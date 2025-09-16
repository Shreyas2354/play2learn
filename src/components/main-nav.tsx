
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

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/missions", label: "Missions", icon: Rocket },
  { href: "/experiments", label: "Experiments", icon: FlaskConical },
  { href: "/multiplayer", label: "Multiplayer", icon: Users },
  { href: "/teacher-dashboard", label: "Teacher Dashboard", icon: BarChart3 },
];

export function MainNav() {
  const pathname = usePathname();

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

    