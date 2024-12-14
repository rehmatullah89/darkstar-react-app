import { COLORS } from '@/utils'
import React from 'react'

const NoData = ({ title }) => {
  return (
    <div style={{ display: 'flex', height: 600, color: COLORS.black, justifyContent: 'center', alignItems: 'center' }}>{title}</div>
  )
}

export default NoData
