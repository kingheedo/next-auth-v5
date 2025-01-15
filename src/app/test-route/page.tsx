import { auth } from '@/auth'
import React from 'react'
import WhoAmISeverAction from './WhoAmISeverAction';
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
        <WhoAmISeverAction onGetUserAction={onGetUserAction}/>
        <WhoAmIApi/>
    </main>
  )
}

export default TextRoutePage