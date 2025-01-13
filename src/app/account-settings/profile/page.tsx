"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FileInputRoot } from "@/components/ui/fileInput/root"
import { FileInputImagePreview } from "@/components/ui/fileInput/imagePreview"
import { FileInputTrigger } from "@/components/ui/fileInput/trigger"
import { FileInputControl } from "@/components/ui/fileInput/control"

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
  "December",
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must have at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must have at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  bio: z.string().max(300, { message: "Bio must not exceed 300 characters" }).optional(),
  country: z.string().min(1, { message: "Please select a country" }),
  address: z.string().min(1, { message: "" }),
  address2: z.string().min(1, { message: "" }),
  city: z.string().min(1, { message: "" }),
  state: z.string().min(1, { message: "" }),
  zipCode: z.string().min(1, { message: "" }),
  dateOfBirth: z.object({
    day: z
      .string()
      .regex(/^\d{1,2}$/, { message: "Invalid day" })
      .refine((day) => parseInt(day) >= 1 && parseInt(day) <= 31, { message: "Day must be between 1 and 31" }),
    month: z.string().min(1, { message: "Please select a month" }),
    year: z
      .string()
      .regex(/^\d{4}$/, { message: "Invalid year" })
      .refine((year) => parseInt(year) >= 1900 && parseInt(year) <= new Date().getFullYear(), { message: "Year must be valid" }),
  }),
})

export default function Profile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
      country: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
  })

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
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
                <BreadcrumbLink href="/profile">
                  Profile
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4 py-4">
              Edit Profile
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleOnSubmit)}
                className="mt-6 flex flex-col w-full gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input type="numver" placeholder="Add your phone number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div>
                  <FormLabel>Date of Birth</FormLabel>
                  <div className="flex gap-4 py-1">
                    <FormField
                      control={form.control}
                      name="dateOfBirth.month"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Select onValueChange={(value) => field.onChange(value)} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Month" />
                              </SelectTrigger>
                              <SelectContent>
                                {monthsOfYear.map((month) => (
                                  <SelectItem key={month} value={month}>
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth.day"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input type="text" placeholder="Day" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth.year"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input type="text" placeholder="Year" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
                  <FormLabel
                    htmlFor="photo"
                    className="text-sm font-medium"
                  >
                    Your photo
                    <span
                      className="text-sm font-normal text-zinc-500 block mt-0.5"
                    >
                      This will be displayed on your profile.
                    </span>
                  </FormLabel>

                  <FileInputRoot className="flex lg:items-start gap-5 lg:flex-row flex-col">
                    <FileInputImagePreview />
                    <FileInputTrigger />
                    <FileInputControl />
                  </FileInputRoot>
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Write a short introduction." {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brazil">Brazil</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Street address" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />

                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Apt, Suite, Floor
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="(optional)" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ZIP code
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="ZIP code" {...field} />
                      </FormControl>
                    </FormItem>
                  )} />

                <div className="flex gap-4 py-1 w-full">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="City"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="State / Province / County / Region"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>



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
    </>
  )
}
