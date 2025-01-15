'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButtonClient = () => {
	const { data: session } = useSession();

	console.log('auth button client session', session);

	return (
		session?.user
			? <button onClick={async () => {
				await signOut();
			}}>로그아웃</button>
			: <button onClick={async () => await signIn()}>로그인</button>
	)
}

export default AuthButtonClient