import React from 'react';
import mansutti from '../../../public/assets/stain-concealer-logoes-circle.webp';
import Image from 'next/image';
import ReviwCard from './ReviwCard';

export default function Veiws() {
  return (
    <div className="container-w-1420 pt-5 mt-4">
      <div className="mb-4 pb-5">
        <h1 className="text-slate-500 text-center fimaly-multiple-mon fs-42 fw-700 pb-2">
          CUSTOMERS SPEAK FOR US
        </h1>
        <h2 className="text-slate-500 text-center fimaly-multiple-mon fs-28 fw-400">
          Reviews of our industry-changing teeth whitening products.
        </h2>
      </div>

      <div>
        <div className="row m-0">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <ReviwCard image={mansutti}></ReviwCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
