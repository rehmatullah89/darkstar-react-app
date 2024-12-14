import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const index = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen ? (
        <div
          className={`fixed-top h-100 w-100 ${
            isOpen ? 'appmodal' : 'hide-modal'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-white position-absolute end-0 top-0 pe-5 pt-4 cursor-pointer">
            <FaTimes />
          </div>
          <div id="modal-content">{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default index;
