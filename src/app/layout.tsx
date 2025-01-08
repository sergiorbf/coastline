import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Coastline",
  description: "no description yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon"
          href="/bl.svg"
          type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <main className="px-4 pb-12 pt-4 lg:col-start-2 lg:px-8 lg:pt-8 max-w-s">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
