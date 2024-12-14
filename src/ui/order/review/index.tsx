import Button from '@/ui/common/Button'
import Input from '@/ui/common/Input'
import { COLORS } from '@/utils'
import React from 'react'

const ReviewOrder = ({ setIsReviewModalOpen, Rating, handleRating, handleChange, emptyFields, reviewOrder }) => {
  return (
    <div style={{ padding: '12px 15px', }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyTracks: 'space-between',
          width: '100%',
          borderBottom: '1px solid #dee2e6',
          marginBottom: 10
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%', }}>
          <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 18 }}>WRITE YOUR REVIEW</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '20%' }}>
          <Button title={'x'} type={'secondary'} onClick={() => setIsReviewModalOpen(false)} />
        </div>
      </div>
      <div>
        <div style={{ textAlign: 'center' }}>
          We strive to provide the best possible service for our clients. Please leave a review to let us
          know how we are doing and to share your experience with others.
        </div>
        <div>
          <Rating onClick={handleRating} />


        </div>
        <div style={{ fontSize: 12, textAlign: 'center', marginBottom: 10 }}>
          Click on a star to change your rating 1 - 5, where <span style={{ color: COLORS.primary, }}>
            5 = great!</span> and   <span style={{ color: COLORS.danger }}>
            1 = really bad</span></div>

        <Input
          placeholder={'Write Your Review'}
          onInputChange={handleChange}
          name="selectedReview"
          error={emptyFields}
          height={'300px'}
          multiline={true}
          customStyles={{
            marginBottom: 20,
          }}
        />
        <div style={{ fontSize: 12, marginBottom: 10 }}>
          By clicking <span style={{ fontWeight: 700 }}>
            Submit</span>, I authorize the sharing of my name and review
          on the smilebrilliant website. (email will not be shared)
        </div>
        <Button title={'Submit'} textStyle={{ width: '100%' }} onClick={() => reviewOrder()} />
      </div>
    </div>
  )
}

export default ReviewOrder
