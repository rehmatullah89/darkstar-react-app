'use client'
import React, { useEffect, useState } from "react";
import styles from "./gehaBadge.module.css";
import Link from 'next/link';
import { useCookies } from "@/lib/TagManager/useCookies";
import { usePathname } from 'next/navigation';
const GehaBadge  = () => {
  const pathname = usePathname();
  const [activate,setActivate] = useState(false)
  const [url,setUrl] = useState(false)

  const [userLinkData, setUserLinkData] = useState({ url: '', name: '', cssClass1: '', cssClass2: '' });

  const {isGehaUser,getUserTypeCookie} = useCookies()
 
  useEffect(() => {
    const userData:any = getUserTypeCookie();
   console.log('path current',usePathname);
    if (userData.name !== '' && pathname != '/shine-search') {
      setUserLinkData(userData);
      setActivate(true);
    }
  },[pathname]);
  
  return (
    activate ? (
      <div className={styles[userLinkData.cssClass1]}>
        <div className={styles[userLinkData.cssClass2]}>
          <Link href={userLinkData.url}>{userLinkData.name}</Link>
        </div>
      </div>
    ) : <></>
  );
};

export default GehaBadge ;
