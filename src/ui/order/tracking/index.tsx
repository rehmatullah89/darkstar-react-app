import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import Image from 'next/image';
import React from 'react'

const TrackingOrder = ({ trackingData, orders, closeModal }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyTracks: 'space-between',
          width: '100%',
          padding: '12px 15px',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>ITEM STATUS LOG</span>
          <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>ORDER NO {orders?.meta_data?._order_number_formatted}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '20%' }}>
          <Button title={'x'} type={'secondary'} onClick={() => closeModal()} />
        </div>
      </div>
      <div style={{ flexDirection: 'row', display: 'flex', marginTop: 15 }}>
        <Image
          src={trackingData[0].img}
          alt={trackingData[0].title}
          width={80}
          height={80}
        />
        <div style={{ paddingRight: 10, paddingLeft: 10 }}>
          <span
            style={{
              color: COLORS.black,
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            {trackingData[0].title}
          </span>
        </div>
      </div>
      {trackingData?.map((tracking, index, arr) => {
        // eslint-disable-next-line no-prototype-builtins
        const hasCreatedDate = tracking && tracking.hasOwnProperty('created_date');
        const { month, day } = hasCreatedDate ? FUNC.splitDate(tracking.created_date) : { month: '', day: '' };

        return (
          <div key={index}>
            {hasCreatedDate ? <div style={{
              display: 'flex', alignItems: 'center', marginTop: 10
            }}>
              <div style={{ color: index === arr.length - 1 ? COLORS.white : COLORS.text, fontWeight: 500, fontSize: 20, backgroundColor: index === arr.length - 1 ? COLORS.primary : '#ededed', borderRadius: 50, width: index === arr.length - 1 ? 80 : 65, height: index === arr.length - 1 ? 80 : 65, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: 5, flexDirection: 'column', marginLeft: index === arr.length - 1 ? 0 : 15 }}>
                <div style={{ fontSize: index === arr.length - 1 ? 30 : 20, }}>{day}</div>
                <div style={{ marginTop: -10 }}>{month}</div>
              </div>
              <div style={{ color: COLORS.black, fontWeight: 300, fontSize: 14, marginLeft: 20 }}>
                {tracking.status ? tracking.status :
                  tracking.impression_notes ?
                    <span dangerouslySetInnerHTML={{ __html: `Analyzing Impression<br> - ${tracking.impression_notes}` }} /> :
                    tracking.event_description ? tracking.event_description :
                      tracking.event_name}
              </div>
            </div> : <div style={{ color: COLORS.black, fontWeight: 300, fontSize: 20, marginTop: 20 }}>No tracking data available</div>}
          </div>
        )
      })}
    </div>
  )
}

export default TrackingOrder
