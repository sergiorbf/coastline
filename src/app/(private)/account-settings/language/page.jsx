"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    language: z.string().min(1, { message: "Please select a language" }),
    currency: z.string().min(1, { message: "Please select a currency" }),
    timezone: z.string().min(1, { message: "Please select a timezone" }),
});
export default function Language() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            language: "",
            currency: "",
            timezone: ""
        },
    });
    const handleOnSubmit = (values) => {
        console.log(values);
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
                <BreadcrumbLink href="/account-settings/language">
                  Language
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4 py-4">
              Language
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)} className="mt-6 flex flex-col w-full gap-5">

                <FormField control={form.control} name="language" render={({ field }) => (<FormItem>
                      <FormLabel className="flex flex-col gap-2">
                        Preferred language
                        <span className="text-sm text-zinc-500">
                          This updates what you read on Coastline, and how we communicate with you.
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your language"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ptBr">{"Português (Brasil)"}</SelectItem>
                            <SelectItem value="ptPt">{"Português (Portugal)"}</SelectItem>
                            <SelectItem value="enUs">{"English"}</SelectItem>
                            <SelectItem value="enUk">{"English (UK)"}</SelectItem>
                            <SelectItem value="frFr">{"Français"}</SelectItem>
                            <SelectItem value="esEp">{"Español"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>)}/>

                <FormField control={form.control} name="currency" render={({ field }) => (<FormItem>
                      <FormLabel>
                        Preferred currency
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your currency"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brl">{"Brazilian Real"}</SelectItem>
                            <SelectItem value="eur">{"Euro"}</SelectItem>
                            <SelectItem value="dol">{"United States Dolar"}</SelectItem>
                            <SelectItem value="ang">{"Angolan Kwanza"}</SelectItem>
                            <SelectItem value="mex">{"Mexican Peso"}</SelectItem>
                            <SelectItem value="jp">{"Japanese Yen"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>)}/>

                <FormField control={form.control} name="timezone" render={({ field }) => (<FormItem>
                      <FormLabel>
                        Preferred timezone
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brt">{"Brasília Time (BRT, GMT-3)"}</SelectItem>
                            <SelectItem value="est">{"Eastern Standard Time (EST, GMT-5)"}</SelectItem>
                            <SelectItem value="cet">{"Central European Time (CET, GMT+1)"}</SelectItem>
                            <SelectItem value="gmt">{"Greenwich Mean Time (GMT, GMT+0)"}</SelectItem>
                            <SelectItem value="jst">{"Japan Standard Time (JST, GMT+9)"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>)}/>

                <div className="flex justify-end gap-2 pt-5">
                  <Button type="submit">
                    Save
                  </Button>
                </div>

              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>);
}
