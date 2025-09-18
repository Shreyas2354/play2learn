
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Rocket,
  FlaskConical,
  BarChart3,
  LogOut,
  Trophy,
  Award,
  ClipboardEdit,
} from "lucide-react";
import { getCurrentUser, logout } from "@/lib/users";
import type { User } from "@/lib/users";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/language-context";

export function MainNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const updateUser = () => setUser(getCurrentUser());
    updateUser(); // Initial check
    window.addEventListener('storage', updateUser); // Listen for login/logout from other tabs
    return () => {
      window.removeEventListener('storage', updateUser);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push('/login');
    // Force a reload to ensure all state is cleared
    window.location.reload();
  };

  const navText = {
      dashboard: { en: "Dashboard", hi: "डैशबोर्ड", te: "డాష్‌బోర్డ్" },
      missions: { en: "Missions", hi: "मिशन", te: "మిషన్లు" },
      experiments: { en: "Experiments", hi: "प्रयोग", te: "ప్రయోగాలు" },
      competition: { en: "Competition", hi: "प्रतियोगिता", te: "పోటీ" },
      achievements: { en: "Achievements", hi: "उपलब्धियाँ", te: "విజయాలు" },
      teacherDashboard: { en: "Teacher Dashboard", hi: "शिक्षक डैशबोर्ड", te: "ఉపాధ్యాయ డాష్‌బోర్డ్" },
      manageContent: { en: "Manage Content", hi: "सामग्री प्रबंधित करें", te: "కంటెంట్‌ను నిర్వహించండి" },
      logout: { en: "Logout", hi: "लॉग आउट", te: "లాగ్అవుట్" },
  }

  const navItems = [
    { href: "/", label: t('dashboard', navText), icon: LayoutDashboard, role: ['student'] },
    { href: "/missions", label: t('missions', navText), icon: Rocket, role: ['student'] },
    { href: "/experiments", label: t('experiments', navText), icon: FlaskConical, role: ['student'] },
    { href: "/competition", label: t('competition', navText), icon: Trophy, role: ['student'] },
    { href: "/achievements", label: t('achievements', navText), icon: Award, role: ['student'] },
    // Teacher routes
    { href: "/teacher-dashboard", label: t('teacherDashboard', navText), icon: BarChart3, role: ['teacher'] },
    { href: "/teacher-dashboard/manage-content", label: t('manageContent', navText), icon: ClipboardEdit, role: ['teacher'] },
  ];

  const visibleNavItems = navItems.filter(item => user && item.role.includes(user.role));
  
  if (!user) {
    return null; // Don't render anything if there's no user
  }

  return (
    <nav className="p-2 flex flex-col h-full">
      <ul className="space-y-2 flex-grow">
        {visibleNavItems.map((item) => {
          const isActive =
            (item.href === "/" && pathname === "/") ||
            (item.href === "/teacher-dashboard" && pathname === "/teacher-dashboard") ||
            (item.href !== "/" && item.href !== "/teacher-dashboard" && pathname.startsWith(item.href));
          return (
            <li key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:justify-center",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent/50 hover:text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.label}
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="hidden group-data-[collapsible=icon]:block"
                >
                  {item.label}
                </TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
