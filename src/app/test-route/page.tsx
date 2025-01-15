import { auth } from '@/auth'
import React from 'react'
import WhoAmIClient from './WhoAmI.client';
import WhoAmIApi from './WhoAmIApi';

const TextRoutePage = async() => {
  const session = await auth();
  
  const onGetUserAction = async() => {
    "use server";
    const session = await auth();
    return session?.user?.name ?? '';
  }

  return (
    <main>
      <div>TextRoutePage {session?.user?.name}</div>
        <WhoAmIClient onGetUserAction={onGetUserAction}/>
        <WhoAmIApi/>
    </main>
  )
}

export default TextRoutePage