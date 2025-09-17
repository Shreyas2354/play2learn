
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Rocket,
  FlaskConical,
  Users,
  BarChart3,
  LogIn,
  LogOut,
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
      multiplayer: { en: "Multiplayer", hi: "मल्टीप्लेयर", te: "మల్టీప్లేయర్" },
      teacherDashboard: { en: "Teacher Dashboard", hi: "शिक्षक डैशबोर्ड", te: "ఉపాధ్యాయ డాష్‌బోర్డ్" },
      login: { en: "Login", hi: "लॉग इन करें", te: "లాగిన్" },
      logout: { en: "Logout", hi: "लॉग आउट", te: "లాగ్అవుట్" },
  }

  const navItems = [
    { href: "/", label: t('dashboard', navText), icon: LayoutDashboard, role: ['student', 'teacher'] },
    { href: "/missions", label: t('missions', navText), icon: Rocket, role: ['student', 'teacher'] },
    { href: "/experiments", label: t('experiments', navText), icon: FlaskConical, role: ['student', 'teacher'] },
    { href: "/multiplayer", label: t('multiplayer', navText), icon: Users, role: ['student', 'teacher'] },
    { href: "/teacher-dashboard", label: t('teacherDashboard', navText), icon: BarChart3, role: ['teacher'] },
  ];

  const visibleNavItems = navItems.filter(item => user && item.role.includes(user.role));

  return (
    <nav className="p-2 flex flex-col h-full">
      <ul className="space-y-2 flex-grow">
        {user ? visibleNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
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
        }) : (
             <li>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                        href="/login"
                        className={cn(
                        "flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:justify-center",
                        pathname === "/login" ? "bg-primary text-primary-foreground" : "hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                    >
                        <LogIn className="h-5 w-5 shrink-0" />
                        <span className="group-data-[collapsible=icon]:hidden">
                            {t('login', navText)}
                        </span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent
                    side="right"
                    className="hidden group-data-[collapsible=icon]:block"
                    >
                    {t('login', navText)}
                    </TooltipContent>
                </Tooltip>
            </li>
        )}
      </ul>
       {user && (
        <div className="mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className={cn(
                  "flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:w-12 group-data-[collapsible=icon]:justify-center w-full justify-start hover:bg-destructive/80 hover:text-destructive-foreground"
                )}
              >
                <LogOut className="h-5 w-5 shrink-0" />
                <span className="group-data-[collapsible=icon]:hidden">
                  {t('logout', navText)}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="hidden group-data-[collapsible=icon]:block"
            >
              {t('logout', navText)}
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </nav>
  );
}
