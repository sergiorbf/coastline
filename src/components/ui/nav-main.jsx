"use client";
import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, } from "@/components/ui/sidebar";
import Link from "next/link";
export function NavMain({ items, }) {
    return (<SidebarGroup>
      <SidebarGroupLabel>
        Menu
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
            var _a;
            const hasSubItems = item.items && item.items.length > 0;
            return (<SidebarMenuItem key={item.title}>
              {hasSubItems ? (<Collapsible asChild defaultOpen={item.isActive} className="group/collapsible">
                  <div>
                    <CollapsibleTrigger asChild>
                      <Link href={item.url}>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                        </SidebarMenuButton>
                      </Link>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {(_a = item.items) === null || _a === void 0 ? void 0 : _a.map((subItem) => (<SidebarMenuSubItem key={subItem.title}>
                            <Link href={subItem.url}>
                              <SidebarMenuSubButton asChild>
                                <span>{subItem.title}</span>
                              </SidebarMenuSubButton>
                            </Link>
                          </SidebarMenuSubItem>))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </div>
                </Collapsible>) : (<Link href={item.url}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </Link>)}
            </SidebarMenuItem>);
        })}
      </SidebarMenu>
    </SidebarGroup>);
}
