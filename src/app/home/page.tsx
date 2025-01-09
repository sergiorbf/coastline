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
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
                        <Tabs defaultValue="calendar">
                          <TabsList className="w-full">
                            <TabsTrigger value="calendar">
                              Calendar
                            </TabsTrigger>
                            <TabsTrigger value="flexible">
                              {`I'm flexible`}
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="calendar">
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
                          </TabsContent>
                          <TabsContent value="flexible">
                            <CardContent>
                              <div className="p-3">
                                <div className="flex flex-col items-center">
                                  <span>
                                    How long would you like to stay?
                                  </span>
                                </div>
                                <div className="p-10 flex gap-4">
                                  <div className="border border-zinc-300 rounded-full px-2 hover:border-zinc-700 group cursor-pointer">
                                    <Label className="group-hover:cursor-pointer">
                                      A weekend
                                    </Label>
                                  </div>
                                  <div className="border border-zinc-300 rounded-full px-2 hover:border-zinc-700 group cursor-pointer">
                                    <Label className="group-hover:cursor-pointer">
                                      A week
                                    </Label>
                                  </div>
                                  <div className="border border-zinc-300 rounded-full px-2 hover:border-zinc-700 group cursor-pointer">
                                    <Label className="group-hover:cursor-pointer">
                                      A month
                                    </Label>
                                  </div>
                                </div>

                                <Separator className="my-4" />
                                <div className="flex flex-col items-center">
                                  <span>
                                    When do you want to go?
                                  </span>
                                  <Carousel
                                    opts={{
                                      align: "start",
                                    }}
                                    className="w-full max-w-sm"
                                  >
                                    <CarouselContent>
                                      {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}
                                          className="md:basis-1/2 lg:basis-1/3">
                                          <div className="p-1">
                                            <Card>
                                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">
                                                  {index + 1}
                                                </span>
                                              </CardContent>
                                            </Card>
                                          </div>
                                        </CarouselItem>
                                      ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                  </Carousel>
                                </div>


                              </div>
                            </CardContent>
                          </TabsContent>
                        </Tabs>
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
                        <CardContent className="flex flex-col gap-2">
                          <span>
                            Adults
                          </span>
                          <span>
                            Children
                          </span>
                          <span>
                            Rooms
                          </span>
                          <Separator className="my-4" />
                          <span className="flex gap-5 items-center text-sm">
                            Traveling with pets?
                            <Switch />
                          </span>
                          <span className="text-xs">
                            By selecting this option, you will only see properties that accept pets.
                          </span>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">
                            Done
                          </Button>
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
