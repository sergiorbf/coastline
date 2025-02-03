'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  passwordConfirm: z.string().min(1, { message: "Confirmation password is required" }),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-4">
              <FormField control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Email
                    </Label>
                    <FormControl>
                      <Input {...field}
                        type="email"
                        placeholder="Enter your email" required />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Password
                    </Label>
                    <FormControl>
                      <Input {...field}
                        type="password"
                        placeholder="Enter your password" required />
                    </FormControl>
                  </FormItem>
                )} />
              <FormField control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Confirm Password
                    </Label>
                    <FormControl>
                      <Input {...field}
                        type="password"
                        placeholder="Confirm your password" required />
                    </FormControl>
                  </FormItem>
                )} />
              <Button type="submit"
                className="w-full mt-4">
                Sign Up
              </Button>
            </form>
          </Form>
          <p className="text-sm text-center text-zinc-600 mt-4">
            {"Already have an account? "}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
