import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Menu } from "@/app/menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";

export function ItemsMenu({ menuItems }: { menuItems: Menu[] }) {
  return (
    <>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              {item.title === "Settings" ? (
                <Popover>
                  <PopoverTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </PopoverTrigger>
                  <PopoverContent className="w-60">
                    <div className="gap-2 flex flex-col">
                      {item.subMenus?.map((subMenu: Menu) => (
                        <Link
                          href={subMenu.url}
                          key={subMenu.title}
                          className='flex gap-2 items-center'
                        >
                          <subMenu.icon className="h-5 w-5" />
                          <span>{subMenu.title}</span>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link href={item.url} className='flex gap-2 items-center'>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
