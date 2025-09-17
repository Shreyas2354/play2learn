
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Rocket,
  FlaskConical,
  Users,
  BarChart3,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/language-context";

export function MainNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navText = {
      dashboard: { en: "Dashboard", hi: "डैशबोर्ड", te: "డాష్‌బోర్డ్" },
      missions: { en: "Missions", hi: "मिशन", te: "మిషన్లు" },
      experiments: { en: "Experiments", hi: "प्रयोग", te: "ప్రయోగాలు" },
      multiplayer: { en: "Multiplayer", hi: "मल्टीप्लेयर", te: "మల్టీప్లేయర్" },
      teacherDashboard: { en: "Teacher Dashboard", hi: "शिक्षक डैशबोर्ड", te: "ఉపాధ్యాయ డాష్‌బోర్డ్" },
  }

  const navItems = [
    { href: "/", label: t('dashboard', navText), icon: LayoutDashboard },
    { href: "/missions", label: t('missions', navText), icon: Rocket },
    { href: "/experiments", label: t('experiments', navText), icon: FlaskConical },
    { href: "/multiplayer", label: t('multiplayer', navText), icon: Users },
    { href: "/teacher-dashboard", label: t('teacherDashboard', navText), icon: BarChart3 },
  ];

  return (
    <nav className="p-2">
      <ul className="space-y-2">
        {navItems.map((item) => {
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
        })}
      </ul>
    </nav>
  );
}
