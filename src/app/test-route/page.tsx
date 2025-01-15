import { auth } from '@/auth'
import React from 'react'

const TextRoutePage = async() => {
  const session = await auth();
  
  return (
    <main>
      <div>TextRoutePage {session?.user?.name}</div>
    </main>
  )
}

export default TextRoutePage