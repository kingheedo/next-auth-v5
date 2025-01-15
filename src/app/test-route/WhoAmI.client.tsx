'use client';

import React, { useCallback, useEffect, useState } from 'react'

interface WhoAmIClientProps {
  onGetUserAction: () =>  Promise<string>;
}

const WhoAmIClient = ({
  onGetUserAction
}: WhoAmIClientProps) => {
  const [userName, setUserName] = useState('');

  const settingUserName = useCallback(async() => {
    try{
      const name = await onGetUserAction();
      setUserName(name);
    }catch(error){
      console.log('error',error);
      
    }
  },[onGetUserAction])

  useEffect(() => {
    settingUserName();
  }, [onGetUserAction, settingUserName])
  
  return (
    <div>WhoAmIClient: {userName}</div>
  )
}

export default WhoAmIClient