import { Bed, ChevronDown, Home, LifeBuoyIcon, LucideProps, MapPin, Settings, Sun, Utensils } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Logo } from "@/app/logo";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

interface Menu {
  title: string
  url: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  type: 'main' | 'utils'
}

const items: Menu[] = [
  { title: "Home", url: "/home", icon: Home, type: "main" },
  { title: "Destination", url: "/destination", icon: MapPin, type: "main" },
  { title: "Gastronomy", url: "/gastronomy", icon: Utensils, type: "main" },
  { title: "Activity", url: "/activity", icon: Sun, type: "main" },
  { title: "Hosting", url: "/hosting", icon: Bed, type: "main" },
  { title: "Support", url: "/support", icon: LifeBuoyIcon, type: "utils" },
  { title: "Settings", url: "/settings", icon: Settings, type: "utils" },
];

export function AppSidebar() {
  const renderMenuItems = (menuItems: Menu[]) => (
    <SidebarMenu>
      {menuItems.map((item) => (
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
  );

  const mainItems = items.filter(item => item.type === 'main');
  const utilsItems = items.filter(item => item.type === 'utils');

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <Logo />
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {renderMenuItems(mainItems)}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                More
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
          </SidebarGroup>
          <CollapsibleContent>
            {renderMenuItems(utilsItems)}
          </CollapsibleContent>
        </Collapsible>
      </SidebarFooter>
    </Sidebar>
  );
}