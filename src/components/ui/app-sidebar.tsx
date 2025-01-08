import { Bed, Home, LucideProps, MapPin, Search, Settings, Sun, Utensils } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Menu {
  title: string
  url: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const items: Menu[] = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Destination",
    url: "/destination",
    icon: MapPin,
  },
  {
    title: "Gastronomy",
    url: "/gastronomy",
    icon: Utensils,
  },
  {
    title: "Activity",
    url: "/activity",
    icon: Sun,
  },
  {
    title: "Hosting",
    url: "/hosting",
    icon: Bed,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
