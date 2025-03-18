"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { Bed, Home, MapPin, Utensils, Waves } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, } from "@/components/ui/sidebar";
import { Logo } from "@/app/logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
const data = {
    user: {
        name: "srbf",
        email: "srbf@mail.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
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
            title: "Experiences",
            url: "/experiences",
            icon: Waves,
        },
        {
            title: "Hosting",
            url: "/hosting",
            icon: Bed,
        },
    ],
};
export function AppSidebar(_a) {
    var props = __rest(_a, []);
    return (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user}/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>);
}
