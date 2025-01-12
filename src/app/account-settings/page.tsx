import { LinkButton } from "@/components/ui/linkButton";
import { Settings, User, Lock, CreditCard, Bell, Globe } from "lucide-react";

export default function AccountSettings() {
  return (
    <>
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Settings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Profile
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              Manage your personal information and update your profile details.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Edit Profile" />
          </div>

          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Security
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              Change your password and update security settings.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Manage Security" />
          </div>

          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <CreditCard className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Payments
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              Add or update your payment methods and view transaction history.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Manage Payments" />
          </div>

          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Notifications
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              Customize your notification preferences.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Notification Preferences" />
          </div>

          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Language
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              Select your preferred language for the platform.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Change Language" />
          </div>

          <div className="p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-gray-500 mr-3" />
              <h2 className="text-xl font-semibold">
                Account
              </h2>
            </div>
            <p className="text-zinc-500 mb-4">
              View and manage your account settings or delete your account.
            </p>
            <LinkButton href="account-settings/profile"
              buttonText="Manage Account" />
          </div>
        </div>
      </section>
    </>
  );
}
