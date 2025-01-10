'use client'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/app/logo";
import { items } from "@/app/menu";
import { ItemsMenu } from "./itemsMenu";

export function AppSidebar() {
  const mainItems = items.filter((item) => item.type === "main");
  const moreItems = items.filter((item) => item.type === "others");

  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ItemsMenu menuItems={mainItems} />
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
            <ItemsMenu menuItems={moreItems} />
          </CollapsibleContent>
        </Collapsible>
      </SidebarFooter>
    </Sidebar>
  );
}
