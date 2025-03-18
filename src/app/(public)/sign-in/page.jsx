'use client';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, AtSign, CircleAlert, KeyRound } from 'lucide-react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const formSchema = z.object({
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
});
export default function SignIn() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
    return (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            Please log in to continue.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
              <div className="w-full">
                <div>
                  <FormField control={form.control} name="email" render={({ field }) => (<FormItem>
                        <Label>
                          Email
                        </Label>
                        <FormControl>
                          <div className='relative'>
                            <Input {...field} id="email" type="email" name="email" placeholder="Enter your email address" required className='pl-10'/>
                            <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500 peer-focus:text-zinc-900 dark:peer-focus:text-zinc-300"/>
                          </div>
                        </FormControl>
                      </FormItem>)}/>
                </div>
                <div className="mt-4">
                  <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                        <Label>
                          Password
                        </Label>
                        <FormControl>
                          <div className='relative'>
                            <Input {...field} className="peer block w-full rounded-md border border-zinc-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-zinc-500" id="password" type="password" name="password" placeholder="Enter password" required minLength={6}/>
                            <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-500 peer-focus:text-zinc-900 dark:peer-focus:text-zinc-300"/>
                          </div>
                        </FormControl>
                      </FormItem>)}/>
                </div>
              </div>
              <input type="hidden" name="redirectTo" value={callbackUrl}/>
              <Button className="w-full mt-4" aria-disabled={isPending}>
                Log in <ArrowRightIcon className="ml-auto h-5 w-5"/>
              </Button>
              <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (<>
                    <CircleAlert className="h-5 w-5 text-red-500"/>
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>)}
              </div>
            </form>
          </Form>
          <p className="text-sm text-center text-zinc-600 mt-4">
            {"Don't have an account? "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>);
}
