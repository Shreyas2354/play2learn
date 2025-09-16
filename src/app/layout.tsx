import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
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

export const metadata: Metadata = {
  title: 'play2learn: STEM Adventures',
  description: 'A gamified learning platform for rural students that works offline.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
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
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
