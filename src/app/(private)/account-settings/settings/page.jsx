"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export default function Settings() {
    function handleDeactivateAccount() {
        console.log("Account deactivated");
    }
    return (<>
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
                  Account
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4 py-4">
              Account
            </h1>

            <div className="mt-8">
              <h2 className="text-lg font-bold mb-2">
                Deactivate Account
              </h2>
              <p className="text-sm text-zinc-500 mb-4">
                If you deactivate your account, you will no longer be able to access it. This action is permanent.
              </p>
              <Button variant="destructive" onClick={handleDeactivateAccount}>
                Deactivate Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>);
}
