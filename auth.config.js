// import { FormState } from "../(public)/register/page"
// import { SignupFormSchema } from "../(public)/register/page"
export const authConfig = {
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!(auth === null || auth === void 0 ? void 0 : auth.user);
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn)
                    return true;
                return false; // Redirect unauthenticated users to login page
            }
            else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
};
