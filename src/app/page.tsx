import { auth } from '@/auth'
import React from 'react'
import AuthButton from './AuthButton.server';

const Home = async () => {
  const session = await auth();

  return (
    <div>
      Home
      {JSON.stringify(session)}
      <AuthButton />
    </div>
  )
}

export default Home