'use client';

import React, { useEffect, useState } from 'react'

const WhoAmIApi = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    fetch('/api/whoami')
    .then(res => res.json())
    .then(({user}) => setUserName(user));
  }, [])
  

  return (
    <div>WhoAmIApi: {userName}</div>
  )
}

export default WhoAmIApi