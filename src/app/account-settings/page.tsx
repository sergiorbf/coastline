import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/linkButton";
import { Settings, User, Lock, CreditCard, Bell, Globe } from "lucide-react";

export default function AccountSettings() {
  return (
    <>
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <User className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold">Profile</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                Manage your personal information and update your profile details.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton href="account-settings/profile" buttonText="Edit Profile" />
            </CardFooter>
          </Card>

          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <Lock className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold">Security</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                Change your password and update security settings.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton href="account-settings/security" buttonText="Manage Security" />
            </CardFooter>
          </Card>

          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <CreditCard className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-xl font-semibold">Payments</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                Add or update your payment methods and view transaction history.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton href="account-settings/payments" buttonText="Manage Payments" />
            </CardFooter>
          </Card>

          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <Bell className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                Customize your notification preferences.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton
                href="account-settings/notifications"
                buttonText="Notification Preferences"
              />
            </CardFooter>
          </Card>

          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <Globe className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold">Language</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                Select your preferred language for the platform.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton href="account-settings/language" buttonText="Change Language" />
            </CardFooter>
          </Card>

          <Card className="border shadow-md hover:shadow-lg transition-shadow">
            <CardTitle className="p-4 flex items-center border-b">
              <Settings className="w-6 h-6 text-gray-500 mr-3" />
              <h2 className="text-xl font-semibold">Account</h2>
            </CardTitle>
            <CardContent className="p-4">
              <p className="text-zinc-500">
                View and manage your account settings or delete your account.
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <LinkButton href="account-settings/account" buttonText="Manage Account" />
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
