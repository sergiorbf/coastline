'use server';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import postgres from 'postgres';
const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });
export async function handleSignOut() {
    await signOut({ redirectTo: "/sign-in" });
}
async function getUser(email) {
    try {
        const user = await sql `SELECT * FROM users WHERE email=${email}`;
        return user[0];
    }
    catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
export const { auth, signIn, signOut } = NextAuth(Object.assign(Object.assign({}, authConfig), { providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user)
                        return null;
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (passwordMatch)
                        return user;
                }
                return null;
            },
        }),
    ] }));
