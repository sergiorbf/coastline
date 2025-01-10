'use client'

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, Diff, MapPinHouse, Search, UserRound, Calendar as IconCalendar, MapPin } from "lucide-react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IncrementDecrementButton } from "@/components/ui/incrementDecrementButton";

const formSchema = z.object({
  location: z.string().min(3).max(50),
  dateFrom: z.string().date(),
  dateTo: z.string().date()
})

const popularDestinations = [
  { city: 'Florianópolis', country: 'Brazil' },
  { city: 'Bombinhas', country: 'Brazil' },
  { city: 'Itapema', country: 'Brazil' },
  { city: 'Praia do Rosa', country: 'Brazil' },
  { city: 'Itajaí', country: 'Brazil' }
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: ""
    }
  })

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const handleDestinationClick = (destination: string) => {
    form.setValue("location", destination);
  };

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
              <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                <div className="flex items-center gap-10 border border-zinc-500 rounded-full p-3">

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
                      <div className="mt-2 space-y-1">
                        <div className="text-sm font-semibold py-3 px-2">
                          <span>
                            Popular destinations nearby
                          </span>
                        </div>
                        {popularDestinations.map((destination) => (
                          <Button
                            key={destination.city}
                            type="button"
                            variant="ghost"
                            className="w-full justify-start gap-4 px-2 py-1 rounded hover:bg-gray-100"
                            onClick={() => handleDestinationClick(destination.city)}
                          >
                            <MapPin />
                            <div className="flex flex-col items-start">
                              <span>
                                {destination.city}
                              </span>
                              <span className="text-xs text-zinc-500">
                                {destination.country}
                              </span>
                            </div>
                          </Button>
                        ))}
                      </div>
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
                                <div className="flex flex-col items-center gap-4">
                                  <div className="flex flex-col items-center">
                                    <span>
                                      When do you want to go?
                                    </span>
                                    <span className="text-xs text-zinc-500">
                                      Select up to 3 months
                                    </span>
                                  </div>
                                  <Carousel
                                    opts={{
                                      align: "start",
                                    }}
                                    className="w-full max-w-sm"
                                  >
                                    <CarouselContent>
                                      {monthsOfYear.map((month, index) => (
                                        <CarouselItem key={index}
                                          className="md:basis-1/2 lg:basis-1/4">
                                          <div className="p-1">
                                            <Card>
                                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <div className="flex flex-col items-center gap-0.5">
                                                  <span>
                                                    <IconCalendar />
                                                  </span>
                                                  <span className="text-xs">
                                                    {month}
                                                  </span>
                                                  <span className="text-xs">
                                                    2025
                                                  </span>
                                                </div>
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
                        <CardContent className="flex flex-col gap-3 p-3">
                          <div className="flex justify-between">
                            <span className="flex flex-col">
                              Adults
                              <span className="text-xs text-zinc-500">
                                13 years above
                              </span>
                            </span>
                            <IncrementDecrementButton initialMinValue={1} initialMaxValue={0} />
                          </div>
                          <div className="flex justify-between">
                            <span className="flex flex-col">
                              Children
                              <span className="text-xs text-zinc-500">
                                2 to 12 years old
                              </span>
                            </span>
                            <IncrementDecrementButton initialMinValue={0} initialMaxValue={0} />
                          </div>
                          <div className="flex justify-between">
                            <span>
                              Rooms
                            </span>
                            <IncrementDecrementButton initialMinValue={1} initialMaxValue={0} />
                          </div>
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

                  <Button type="submit">
                    <Search />
                    Search
                  </Button>

                </div>

              </form>
            </Form>
          </section>
        </div>
      </div>
    </>
  );
}
