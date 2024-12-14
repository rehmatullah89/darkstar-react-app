import { useCartContext } from '@/context/CartContext';
import React from 'react';
interface modalType {
  setterFunction?: (c: boolean) => void;
  h2: string;
  btnText: string;
  btnStyle: string;
  borderStyle: string;
  children: JSX.Element;
}

export default function ProductModal(props: modalType) {
  const { dispatch } = useCartContext();
  return (
    <div
      className="fixed-top h-100 w-100 top-0 start-0 d-flex align-items-center justify-content-center"
      style={{ background: 'rgba(51, 51, 51, 0.7);' }}
    >
      <div
        className="modal-layer position-absolute top-0  start-0 end-0 bottom-0 w-100 h-100 "
        onClick={() => dispatch({ type: 'SET_MODAL', payload: null })}
      ></div>
      <div
        className={`bg-white ${props.borderStyle} pt-4 pb-3 modalContent`}
        style={{ width: '600px', zIndex: '99999' }}
      >
        <div className="px-3">
          <h2 className="fs-16 fimaly-multiple-opn fw-600 text-slate-500">
            {props.h2}
          </h2>
        </div>
        <div className="fimaly-multiple-opn px-3">{props.children}</div>

        <div className="px-3">
          <button
            className={` ${props.btnStyle} w-100 border-0 py-11`}
            onClick={() => dispatch({ type: 'SET_MODAL', payload: null })}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

// export default function ProductModal(props: modalType) {
//     return (
//         <div className='fixed-top h-100 w-100 top-0 start-0 d-flex align-items-center justify-content-center' style={{ background: "rgba(51, 51, 51, 0.7);" }}>
//             <div className="modal-layer position-absolute top-0  start-0 end-0 bottom-0 w-100 h-100 " onClick={() => props.setterFunction(false)}></div>
//             <div className={`bg-white ${props.borderStyle} pt-4 pb-3 modalContent`} style={{ width: "600px", zIndex:"99999"}}>
//                 <div className="px-3">
//                     <h2 className="fs-16 fimaly-multiple-opn fw-600 text-slate-500">{props.h2}</h2>
//                 </div>
//                 <div className="fimaly-multiple-opn px-3">{props.children}</div>

//                 <div className="px-3">
//                     <button className={` ${props.btnStyle} w-100 border-0 py-11`} onClick={() => props.setterFunction(false)}>{props.btnText}</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
