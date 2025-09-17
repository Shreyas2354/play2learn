"use client";

import type { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/language-context';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/main-nav';
import { SiteHeader } from '@/components/site-header';
import { Icons } from '@/components/icons';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className="p-4">
            <a
              href="/"
              className="flex items-center gap-2 font-headline font-bold text-2xl text-primary"
            >
              <Icons.logo className="h-8 w-8" />
              <span>play2learn</span>
            </a>
          </SidebarHeader>
          <SidebarContent>
            <MainNav />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <SiteHeader />
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </LanguageProvider>
  );
}
