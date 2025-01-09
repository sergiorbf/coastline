'use client'

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, Diff, MapPinHouse, Search, UserRound } from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const formSchema = z.object({
  location: z.string().min(3).max(50),
  dateFrom: z.string().date(),
  dateTo: z.string().date()

})

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}

export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: ""
    }
  })

  return (
    <>
      <div className="p-8">
        <div className="mb-8">
          <header>
            <h1 className="text-3xl font-bold text-zinc-900">
              <span>
                Where your coastal vacation begins
              </span>
            </h1>
            <p className="text-lg font-medium">
              Find the perfect beach house, condo, or resort for your getaway...
            </p>
          </header>
        </div>
        <div>
          <section>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex gap-10">

                  <Popover>
                    <PopoverTrigger className="flex gap-2 ">
                      <MapPinHouse />
                      Where are you going?
                    </PopoverTrigger>
                    <PopoverContent>
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Where are you going?" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger className="flex gap-2 ">
                      <CalendarDays />
                      Dates
                    </PopoverTrigger>
                    <PopoverContent className="w-auto">
                      <Card>
                        <CardHeader>
                          <p>
                            Calendar
                          </p>
                          <p>
                            {`I'm flexible`}
                          </p>
                        </CardHeader>
                        <CardContent className="flex gap-2">
                          <FormField
                            control={form.control}
                            name="dateFrom"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Calendar mode="single" {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="dateTo"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Calendar mode="single" {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </CardContent>
                        <CardFooter>
                          <div className="flex gap-2">
                            <Button>
                              <Diff />
                              Exact dates
                            </Button>
                            <Button>
                              <Diff />
                              1 day
                            </Button>
                            <Button>
                              <Diff />
                              2 day
                            </Button>
                            <Button>
                              <Diff />
                              3 day
                            </Button>
                            <Button>
                              <Diff />
                              7 day
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger className="flex gap-2 ">
                      <UserRound />
                      Traveling
                    </PopoverTrigger>
                    <PopoverContent className="w-auto">
                      <Card>
                        <CardContent className="flex gap-2">
                          content
                        </CardContent>
                        <CardFooter>
                          footer
                        </CardFooter>
                      </Card>
                    </PopoverContent>
                  </Popover>

                </div>

                <Button type="submit">
                  <Search />
                  Search
                </Button>

              </form>
            </Form>
          </section>
        </div>
      </div>
    </>
  );
}
