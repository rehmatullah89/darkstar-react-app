import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const Loader = ({
  image,
  InitLoader,
  email,
  setPopUp,
  isOpenPopUp,
}: any) => {
  return (
    <>
      {isOpenPopUp && (
        <div className="fixed-top top-0 end-0 right-0 bottom-0  d-flex align-items-center justify-content-center loader-bg">
          <div
            className="p-3 bg-white rounded position-relative"
            onClick={() => setPopUp()}
          >
            <span
              className="position-absolute top-0 text-danger cursor-pointer"
              style={{ zIndex: '9999', right: '8px' }}
            >
              <FaTimes />
            </span>
            <div>
              <Image src={image} alt="logo image" width={150} height={40} />
              <span className="dots dot1 ms-5"></span>
              <span className="dots dot2"></span>
              <span className="dots dot3"></span>
            </div>
            <Link
              href={{
                pathname: '/product/thankyou',
                query: {
                  name: InitLoader.first_name,
                  email: email,
                  scanId: InitLoader.threed_scan_id,
                },
              }}
              className="text-decoration-none text-info fw-500 fs-16"
            >
              Your scan ID is already available click here to view!
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export const OnSubmitPopUp = ({ logo }: any) => {
  return (
    <div className="fixed-top top-0 end-0 right-0 bottom-0  d-flex align-items-center justify-content-center loader-bg">
      <div className="p-3 bg-white rounded position-relative">
        <Image src={logo} alt="logo image" width={150} height={40} />
        <span className="dots dot1 ms-5"></span>
        <span className="dots dot2"></span>
        <span className="dots dot3"></span>
      </div>
    </div>
  );
};
