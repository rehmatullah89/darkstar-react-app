"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import dynamic from 'next/dynamic';
import Heading from '@/ui/common/Heading';
import { COLORS } from '@/utils';
import Button from '@/ui/common/Button';
import 'react-quill/dist/quill.snow.css';
import { useUser } from '@/context/UserContext';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useToast } from '@/context/ToastProvider';

const NewTickets = () => {
  const { makeApiCall, loading } = useApi();
  const { userData } = useUser();
  const { showSuccess, showError } = useToast();

  const [selectedCancelReason, setSelectedCancelReason] = useState<any>({ selectedCancelOption: 'General Inquiry' });
  const [value, setValue] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<{ file: File, url: string }[]>([]);

  const ticketsOptions = [
    { name: 'General Inquiry' },
    { name: 'Help With Product' },
    { name: 'Product Review' },
    { name: 'Product Return' },
    { name: 'Order Status' },
    { name: 'Electric Toothbrush Warranty Claim' },
    { name: 'Whitening Tray Replacement Request' },
    { name: 'Night Guard Reorder Request' },
    { name: 'Wholesale Inquiry' },
    { name: 'Partnership/Collaboration Inquiry' },
  ]

  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string')
      setSelectedCancelReason(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map(file => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setSelectedFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  const handleDeleteImage = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      const data = {
        user_id: +userData.id,
        ticket_id: 0,
        message: value,
        type: selectedCancelReason.selectedCancelOption,
        attachment: selectedFiles
      }
      const response = await makeApiCall('auth/user-create-ticket', 'POST', data);
      if (response.statusCode === 200 && response.success) {
        showSuccess(response.message);
        setSelectedCancelReason({ selectedCancelOption: 'General Inquiry' })
        setValue('')
        setSelectedFiles([]);
      }
    } catch (error) {
      showError('Something went wrong,', error);
    }
  };

  return (
    <div className="pageStainConcealer" >
      <Heading
        heading="Support center"
        subHeading="Connect with our team."
        lineHeight={false}
        border={true}
      />

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          MESSAGE TYPE</div>
        <select
          style={{
            paddingRight: '15px',
            padding: '15px',
            height: '50px',
            borderWidth: '1px',
            width: '100%',
            borderRadius: '10px',
          }}
          aria-label="Default select example"
          value={selectedCancelReason.selectedCancelOption}
          onChange={(e) => handleChange('selectedCancelOption', e.target.value)}>
          {ticketsOptions.map(option => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          WRITE MESSAGE</div>
        <ReactQuill
          value={value}
          onChange={setValue}
        />
      </div>

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          UPLOAD PICTURE</div>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ border: '2px dashed #fbae05', fontSize: 14, fontWeight: '400', padding: 10, borderStyle: 'dashed', marginBottom: 20 }}
        />

        <div style={{ fontSize: 14, fontWeight: '400', marginBottom: 20 }}>
          If applicable, please upload pictures to help our staff with your request. If you are writing a review, please upload your before-and-after photos here.
        </div>
        {selectedFiles.length > 0 && (
          <div style={{ marginBottom: 20, marginTop: 20 }}>
            {selectedFiles.map(({ url, file }, index) => (
              <div key={index} style={{ alignItems: 'center', position: 'relative', }}>
                <img src={url} alt={file.name} style={{
                  border: '3px solid #dee2e6', width: '150px', height: '150px', objectFit: 'cover', padding: 5,
                }} />
                <div style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                  {file.name}
                </div>
                <div
                  onClick={() => handleDeleteImage(index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    color: COLORS.primary,
                    border: '1px solid #dee2e6',
                    borderRadius: 25,
                    position: 'absolute',
                    left: 140,
                    top: -10,
                    height: '25px',
                    width: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 13
                  }}>
                  x
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
      <Button title={'send message'} textStyle={{ width: '100%' }} onClick={handleSubmit}
        loading={loading} />
    </div>
  );
};

export default NewTickets;
