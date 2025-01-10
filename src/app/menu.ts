import { Bed, CircleUser, Heart, Home, LifeBuoyIcon, LogOut, MapPin, Moon, Settings, Sun, Utensils } from "lucide-react"
import { ElementType } from "react"

export interface Menu {
  title: string
  url: string
  icon: ElementType
  type: 'main' | 'others' | 'sub'
  subType?: 'button' | 'link'
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
    type: "others"
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
    type: "others",
    subType: 'button',
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
        title: "Appearance",
        url: "/",
        icon: Moon,
        type: "sub",
        subType: 'button'
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