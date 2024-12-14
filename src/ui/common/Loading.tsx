import { COLORS } from '@/utils';
import Image from 'next/image';
import React from 'react'
import loader from "../../../public/icons/puff-white.svg";

const Loading = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', color: COLORS.black, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000069', opacity: 0.6 }}>    <Image
      src={loader}
      alt="logo"
      width={105}
      height={105}
    /></div>
  )
}

export default Loading
