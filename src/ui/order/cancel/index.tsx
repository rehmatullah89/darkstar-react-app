import Button from '@/ui/common/Button'
import Input from '@/ui/common/Input'
import { COLORS } from '@/utils'
import React from 'react'

const CancelOrder = ({ selectedOrder, setIsCancelModalOpen, selectedCancelReason, handleChange, cancelOptions, emptyFields, cancelOrder, replace = false, selectTitle = 'Cancellation reason:', commentTitle = 'Cancellation Description' }) => {
  return (
    <div style={{ padding: '12px 15px', }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyTracks: 'space-between',
          width: '100%',
          paddingBottom: '15px',
          borderBottom: '1px solid #dee2e6',
          marginBottom: 10
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%', }}>
          {replace ? <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 22, textAlign: 'center' }}>Return or Replace</span>
            : <>
              <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>CANCEL ORDER</span>
              <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>ORDER NO {selectedOrder.meta_data?._order_number_formatted}</span>
            </>
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '20%' }}>
          <Button title={'x'} type={'secondary'} onClick={() => setIsCancelModalOpen(false)} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
        <span style={{ color: COLORS.gray }}>
          {selectTitle}</span>
      </div>
      <select
        style={{
          paddingRight: '15px',
          padding: '15px',
          height: '50px',
          borderWidth: '1px',
          width: '100%',
          borderRadius: '10px',
          marginBottom: 20,
        }}
        aria-label="Default select example"
        value={selectedCancelReason.selectedCancelOption}
        onChange={(e) => handleChange('selectedCancelOption', e.target.value)}>
        {cancelOptions.map(option => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <Input
        value={selectedCancelReason.selectedCancelReason}
        title={commentTitle}
        onInputChange={handleChange}
        name="selectedCancelReason"
        error={emptyFields}
        multiline={true}
        height={'300px'}
        customStyles={{
          marginBottom: 20,
        }}
      />
      <Button title={'Cancel Order'} textStyle={{ width: '100%' }} onClick={() => cancelOrder()} />
    </div>
  )
}

export default CancelOrder
