'use client';
import React, { use, useEffect, useState } from 'react';
const colorsKey: any = {
  White: '#ffffff',
  Red: '#ff0000',
  Green: '#69be28',
  Blue: '#0000ff',
  Yellow: '#ecd803',
  Orange: '#f0852d',
  Purple: '#562270',
  Black: '#000000',
  Pink: '#ffc0cb',
};
const colorsPalet: any = [
  'White',
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Orange',
  'Purple',
  'Black',
  'Pink',
];
function CustomizeCardPrice({ cardState }: any) {
  const [colorState, setColorState] = useState('Clear');
  const [mouthGuardNum, setMouthGuardNum] = useState('');

  useEffect(() => {
    setColorState('Clear');
    setMouthGuardNum('');
  }, [cardState]);

  const handleSubmit = () => {
    if (colorState == '' || mouthGuardNum == '') {
      alert('Please provide 2 letters or numbers');
    }
  };

  return (
    <>
      <div>
        <h4
          className="fs-20 fw-500 text-uppsercase text-white m-0"
          style={{ lineHeight: '10px' }}
        >
          SELECT COLOR & ID
        </h4>
        <em className="fs-7 text-white">
          Hue of color may vary during final production
        </em>
        <div className="pt-4">
          <ul className="list-unstyled m-0 p-0 row m-0 gap-2 justify-content-center">
            <li
              className="bg-white p-0 d-flex align-items-center justify-content-center"
              style={{
                height: '45px',
                width: '45px',
                border: colorState !== 'Clear' ? '0px solid' : '4px solid',
              }}
              title="Clear"
            >
              <a
                className="text-uppercase d-block text-decoration-none text-dark fs-10 h-100 w-100 d-flex align-items-center justify-content-center"
                onClick={() => {
                  setColorState('Clear');
                  setMouthGuardNum('');
                }}
              >
                clear
              </a>
            </li>
            {colorsPalet.map((keyName: any) => (
              <li
                key={keyName}
                title={keyName}
                style={{
                  background: colorsKey[keyName],
                  height: '45px',
                  width: '45px',
                }}
                className="p-0"
              >
                {' '}
                <a
                  href=""
                  className={`d-block ${keyName}  text-decoration-none h-100  
                        ${
                          keyName == colorState ? 'selected-color' : 'border'
                        } fs-11 text-dark d-flex align-items-center justify-content-center`}
                  // onClick={() => setColorState(keyName)}
                >
                  {keyName == 'White' ? keyName : null}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-100 pt-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-white fw-700">2 letter or number ID:</span>
              <input
                type="text"
                maxLength={2}
                style={{ maxWidth: '90px', height: '42px' }}
                className="text-center ms-4 bg-white shadow-none sminput"
                // onChange={(e: any) => setMouthGuardNum(e.target.value)}
              />
            </div>
            <div className="mt-4 px-3">
              <h4 className="text-white montserrat fs-34 fw-400  lh0">$134</h4>
              <em className="fs-7 text-white pt-2 d-block">
                Hue of color may vary during final production
              </em>
              <button
                className=" hover hover-able btn-md btm-sm btn-lg lg-min-w-100 py-12 border-0 bg-blue-800 text-white montserrat fs-20 mt-4"
                data-mouth_guard_color={colorState}
                data-mouth_guard_number={mouthGuardNum}
                // onClick={handleSubmit}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizeCardPrice;
