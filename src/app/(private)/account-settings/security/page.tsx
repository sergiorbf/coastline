'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const securitySchema = z.object({
  currentPassword: z.string().min(6, "Current password is required and must be at least 6 characters."),
  newPassword: z.string().min(6, "New password must be at least 6 characters."),
  confirmPassword: z.string().min(6, "Please confirm your new password."),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

type SecurityFormValues = z.infer<typeof securitySchema>

export default function Security() {
  const form = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const [is2FAEnabled, setIs2FAEnabled] = useState(false)

  function toggle2FA() {
    setIs2FAEnabled((prev) => !prev)
    console.log(is2FAEnabled ? "2FA Disabled" : "2FA Enabled")
  }

  function handleOnSubmit(data: SecurityFormValues) {
    console.log("Form Data:", data)
  }


  return (
    <>
      <div className="p-8 min-h-screen w-full">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/account-settings">
                  Settings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/account-settings/security">
                  Security
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4 py-4">Security</h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="mt-6 flex flex-col w-full gap-5">
                <FormField
                  name="currentPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your current password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="newPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm your new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button type="submit">
                    Change Password
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-8">
              <h2 className="text-lg font-bold mb-2">Two-Factor Authentication</h2>
              <div className="flex items-center justify-between py-2 gap-5">
                <span className="text-sm text-zinc-500">
                  Enable Two-Factor Authentication for added account security.
                </span>
                <Switch
                  checked={is2FAEnabled}
                  onCheckedChange={toggle2FA}
                />
              </div>
              {is2FAEnabled && (
                <p className="text-sm text-green-600 mt-2">
                  Two-Factor Authentication is enabled.
                </p>
              )}
            </div>

          </CardContent>
        </Card>
      </div>
    </>
  )
}
