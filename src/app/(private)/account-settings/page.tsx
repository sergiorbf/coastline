import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { LinkButton } from "@/components/ui/linkButton"
import { Settings, User, Lock, CreditCard, Bell, Globe } from "lucide-react"

const settingsOptions = [
  {
    icon: <User className="w-6 h-6 text-blue-500 mr-3" />,
    title: "Profile",
    description: "Manage your personal information and update your profile details.",
    link: "account-settings/profile",
    buttonText: "Edit Profile"
  },
  {
    icon: <Lock className="w-6 h-6 text-green-500 mr-3" />,
    title: "Security",
    description: "Change your password and update security settings.",
    link: "account-settings/security",
    buttonText: "Manage Security"
  },
  {
    icon: <CreditCard className="w-6 h-6 text-yellow-500 mr-3" />,
    title: "Payments",
    description: "Add or update your payment methods and view transaction history.",
    link: "account-settings/payments",
    buttonText: "Manage Payments"
  },
  {
    icon: <Bell className="w-6 h-6 text-red-500 mr-3" />,
    title: "Notifications",
    description: "Customize your notification preferences.",
    link: "account-settings/notifications",
    buttonText: "Notification Preferences"
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-500 mr-3" />,
    title: "Language",
    description: "Select your preferred language for the platform.",
    link: "account-settings/language",
    buttonText: "Change Language"
  },
  {
    icon: <Settings className="w-6 h-6 text-zinc-500 mr-3" />,
    title: "Account",
    description: "View and manage your account settings or delete your account.",
    link: "account-settings/settings",
    buttonText: "Manage Account"
  }
]

export default function AccountSettings() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsOptions.map((option, index) => (
          <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardTitle className="p-4 flex items-center border-b">
              {option.icon}
              <h2 className="text-xl font-semibold">
                {option.title}
              </h2>
            </CardTitle>
            <CardContent className="p-4 flex-grow">
              <p className="text-zinc-500">
                {option.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 mt-auto flex justify-between items-center">
              <LinkButton href={option.link}
                buttonText={option.buttonText} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
