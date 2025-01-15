'use client';

import React, { useCallback, useEffect, useState } from 'react'

interface WhoAmISeverActionProps {
  onGetUserAction: () =>  Promise<string>;
}

const WhoAmISeverAction = ({
  onGetUserAction
}: WhoAmISeverActionProps) => {
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
    <div>WhoAmISeverAction: {userName}</div>
  )
}

export default WhoAmISeverAction