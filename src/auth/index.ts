import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials';

export const BASE_PATH = "/api/auth";

type User = {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

const authOptions: NextAuthConfig ={
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '이름'},
                password: { label: 'Password', type: 'password', placeholder: '비밀번호'},
            },
             authorize: async(credentials): Promise<Omit<User, 'password' | 'userName'> | null> => {
                const users: User[] = [
                    {
                        id: "test-user-1",
                        userName: 'test1',
                        name: 'test1',
                        password: 'test1',
                        email: 'test1@test.com'
                    },
                    {
                        id: "test-user-2",
                        userName: 'test2',
                        name: 'test2',
                        password: 'test2',
                        email: 'test2@test.com'
                    }
                ];

                const user = users.find(user => user.userName === credentials.username && user.password === credentials.password);
                return user ? {id: user.id, name: user.name, email: user.email} : null;
            }
        })
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const {handlers, auth, signIn, signOut} = NextAuth(authOptions);