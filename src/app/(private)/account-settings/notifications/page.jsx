"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { NotificationDialog } from "@/components/ui/notificationDialog";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    inspirationAndOffers: z.object({
        email: z.boolean(),
        sms: z.boolean(),
    }),
    tripPlanning: z.object({
        email: z.boolean(),
        sms: z.boolean(),
    }),
    news: z.object({
        email: z.boolean(),
        sms: z.boolean(),
    }),
    feedback: z.object({
        email: z.boolean(),
        sms: z.boolean(),
    }),
    travelRegulations: z.object({
        email: z.boolean(),
        sms: z.boolean(),
    }),
});
export default function Notifications() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            inspirationAndOffers: {
                email: true,
                sms: true,
            },
            tripPlanning: {
                email: true,
                sms: true,
            },
            news: {
                email: true,
                sms: true,
            },
            feedback: {
                email: true,
                sms: true,
            },
            travelRegulations: {
                email: true,
                sms: true,
            }
        },
    });
    function handleOnSubmit(data) {
        console.log("Form Data:", data);
    }
    const [notificationSettings, setNotificationSettings] = useState({
        inspirationAndOffers: { email: true, sms: true },
        tripPlanning: { email: true, sms: true },
        news: { email: true, sms: false },
        feedback: { email: true, sms: false },
        travelRegulations: { email: true, sms: false },
    });
    const handleNotificationChange = (key, updatedValues) => {
        setNotificationSettings((prev) => (Object.assign(Object.assign({}, prev), { [key]: updatedValues })));
    };
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
                <BreadcrumbLink href="/account-settings/notifications">
                  Notifications
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
          <CardContent>
            <h1 className="text-2xl font-bold py-4">
              Notifications
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="mt-6 flex flex-col w-full gap-5">
                <div className="flex flex-col gap-4">
                  <h2 className="px-4">
                    <p className="text-xl font-bold">
                      Travel tips and offers
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Inspire your next trip with personalized recommendations and special offers.
                    </p>
                  </h2>
                  <FormField name="inspirationAndOffers" control={form.control} render={() => (<FormItem className="flex flex-col items-start">
                        <FormLabel className="px-4 text-md">
                          Inspiration and offers
                        </FormLabel>
                        <FormControl>
                          <NotificationDialog title="Inspiration and offers" description="Inspiring stays, experiences, and deals." values={notificationSettings.inspirationAndOffers} onChange={(updatedValues) => handleNotificationChange("inspirationAndOffers", updatedValues)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}/>
                  <FormField name="tripPlanning" control={form.control} render={() => (<FormItem className="flex flex-col items-start">
                        <FormLabel className="px-4 text-md">
                          Trip planning
                        </FormLabel>
                        <FormControl>
                          <NotificationDialog title="Trip planning" description="Personalized recommendations for your trip." values={notificationSettings.tripPlanning} onChange={(updatedValues) => handleNotificationChange("tripPlanning", updatedValues)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}/>
                </div>
                <Separator className="my-4"/>
                <div className="flex flex-col gap-4">
                  <h2 className="px-4">
                    <p className="text-xl font-bold">
                      Coastline updates
                    </p>
                    <p className="text-zinc-500 text-sm">
                      Stay up to date on the latest news from Airbnb, and let us know how we can improve.
                    </p>
                  </h2>
                  <FormField name="news" control={form.control} render={() => (<FormItem className="flex flex-col items-start">
                        <FormLabel className="px-4 text-md">
                          News and programs
                        </FormLabel>
                        <FormControl>
                          <NotificationDialog title="News and programs" description="Stay in the know about brand new programs and announcements." values={notificationSettings.news} onChange={(updatedValues) => handleNotificationChange("news", updatedValues)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}/>
                  <FormField name="feedback" control={form.control} render={() => (<FormItem className="flex flex-col items-start">
                        <FormLabel className="px-4 text-md">
                          Feedback
                        </FormLabel>
                        <FormControl>
                          <NotificationDialog title="Feedback" description="Let us know how we're doing and how we can improve." values={notificationSettings.feedback} onChange={(updatedValues) => handleNotificationChange("feedback", updatedValues)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}/>
                  <FormField name="travelRegulations" control={form.control} render={() => (<FormItem className="flex flex-col items-start">
                        <FormLabel className="px-4 text-md">
                          Travel regulations
                        </FormLabel>
                        <FormControl>
                          <NotificationDialog title="Travel regulations" description="Travel smart with updates about regulations." values={notificationSettings.travelRegulations} onChange={(updatedValues) => handleNotificationChange("travelRegulations", updatedValues)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>)}/>
                </div>
              </form>
            </Form>

          </CardContent>
        </Card>
      </div>
    </>);
}
