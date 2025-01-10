import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Menu } from "@/app/menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import { LinkTo, sidebarMenuClasses } from "./link";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export function ItemsMenu({ menuItems }: { menuItems: Menu[] }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode)
  };

  return (
    <>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              {item.title === "Settings" ? (
                <Popover>
                  <PopoverTrigger className={clsx(sidebarMenuClasses)}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </PopoverTrigger>

                  <PopoverContent className="w-60">
                    <div className="gap-2 flex flex-col">
                      {item.subMenus?.map((subMenu: Menu) => (
                        <SidebarMenuButton key={subMenu.title}>
                          {subMenu.subType === "button" ? (
                            <div
                              className={clsx(sidebarMenuClasses)}
                              onClick={() => {
                                if (subMenu.title === "Appearance") handleThemeMode();
                              }}
                            >
                              {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                              ) : (
                                <Moon className="h-5 w-5" />
                              )}
                              <span>{subMenu.title}</span>
                            </div>
                          ) : (
                            <LinkTo {...subMenu} />
                          )}
                        </SidebarMenuButton>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <LinkTo {...item} />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu >
    </>
  );
}