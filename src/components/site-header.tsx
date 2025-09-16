import { SidebarTrigger } from "@/components/ui/sidebar";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
            <SidebarTrigger />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
