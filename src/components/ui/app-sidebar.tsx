"use client"

import * as React from "react"
import { Bed, Home, MapPin, Sun, Utensils } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Logo } from "@/app/logo"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "srbf",
    email: "srbf@mail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain:
    [
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

    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
