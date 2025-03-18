// import { FormState } from "../(public)/register/page"
// import { SignupFormSchema } from "../(public)/register/page"

// export async function SignUpAuth(state: FormState, formData: FormData) {

//   const validatedFields = SignupFormSchema.safeParse({
//     email: formData.get('email'),
//     password: formData.get('password'),
//     passwordConfirm: formData.get('passwordConfirm'),
//   })


//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }


// }
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;