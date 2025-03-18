'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { SignUpAuth } from "@/app/actions/auth";
// import { useActionState } from "react";
export const SignupFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
    })
        .trim(),
    passwordConfirm: z.string().min(1, { message: "Confirmation password is required" }),
}).refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords must match",
    path: ["passwordConfirm"],
});
export default function Register() {
    const form = useForm({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
    });
    const handleOnSubmit = (values) => {
        console.log(values);
    };
    // const [state, action, pending] = useActionState(SignUpAuth, undefined)
    return (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4">
              <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
                    <Label>
                      Email
                    </Label>
                    <FormControl>
                      <Input {...field} id="email" type="email" placeholder="Enter your email" required/>
                    </FormControl>
                  </FormItem>)}/>
              {/* {state?.errors?.email && <p>{state.errors.email}</p>} */}
              <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                    <Label>
                      Password
                    </Label>
                    <FormControl>
                      <Input {...field} type="password" id="password" placeholder="Enter your password" required/>
                    </FormControl>
                  </FormItem>)}/>
              {/* {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )} */}
              <FormField control={form.control} name="passwordConfirm" render={({ field }) => (<FormItem>
                    <Label>
                      Confirm Password
                    </Label>
                    <FormControl>
                      <Input {...field} type="password" id="passwordConfirm" placeholder="Confirm your password" required/>
                    </FormControl>
                  </FormItem>)}/>
              {/* {state?.errors?.passwordConfirm && (
          <div>
            <p>Confirm Password must:</p>
            <ul>
              {state.errors.passwordConfirm.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )} */}
              <Button type="submit" className="w-full mt-4">
                Sign Up
              </Button>
            </form>
          </Form>
          <p className="text-sm text-center text-zinc-600 mt-4">
            {"Already have an account? "}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>);
}
