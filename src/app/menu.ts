import { Bed, CircleUser, Heart, Home, LifeBuoyIcon, LogOut, MapPin, Settings, Sun, Utensils } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export interface Menu {
  title: string
  url: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  type: 'main' | 'more' | 'sub'
  subMenus?: Menu[]
}

export const items: Menu[] = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
    type: "main"
  },
  {
    title: "Destination",
    url: "/destination",
    icon: MapPin,
    type: "main"
  },
  {
    title: "Gastronomy",
    url: "/gastronomy",
    icon: Utensils,
    type: "main"
  },
  {
    title: "Activity",
    url: "/activity",
    icon: Sun,
    type: "main"
  },
  {
    title: "Hosting",
    url: "/hosting",
    icon: Bed,
    type: "main"
  },
  {
    title: "Support",
    url: "/support",
    icon: LifeBuoyIcon,
    type: "more"
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
    type: "more",
    subMenus: [
      {
        title: "Account",
        url: "/account-settings",
        icon: CircleUser,
        type: "sub"
      },
      {
        title: "Saved",
        url: "/wishlist",
        icon: Heart,
        type: "sub"
      },
      {
        title: "Log out",
        url: "/logout",
        icon: LogOut,
        type: "sub"
      },
    ]
  },

];