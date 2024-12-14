import React, { useState } from 'react';

const categories = [
    { value: '', label: 'All Categories', icon: '' }, ///assets/shine-search/all-categories.svg
    { value: 'Dentist', label: 'Dentist', icon: '/assets/shine-search/dentalDentist.png' },
    { value: 'Optical', label: 'Vision Center', icon: '/assets/shine-search/dental-optimal.png' },
    { value: 'Pharmacy', label: 'Pharmacy', icon: '/assets/shine-search/dentalPharmacy.png' },
];

const CustomSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = categories.find((cat) => cat.value === value) || categories[0];

  const handleSelect = (categoryValue: string) => {
    onChange(categoryValue);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
      <div className="selected-value">
        {/* Conditionally render the image if the icon is not an empty string */}
        {selectedCategory?.icon && (
          <img
            src={selectedCategory.icon}
            alt={selectedCategory.label}
            className="selected-icon"
            style={{ maxWidth: '19px' }}
          />
        )}
        <span>{selectedCategory?.label}</span>
      </div>
      {isOpen && (
        <div className="options">
          {categories.map((category) => (
            <div
              key={category.value}
              className="option"
              onClick={() => handleSelect(category.value)}
            >
              {/* Conditionally render the image if the icon is not an empty string */}
              {category.icon && (
                <img
                  src={category.icon}
                  alt={category.label}
                  className="option-icon"
                  style={{ maxWidth: '19px' }}
                />
              )}
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .custom-select {
          position: relative;
          width: 100%;
          cursor: pointer;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
          background-color: #fff;
          padding: 10px;
        }
        .selected-value {
          display: flex;
          align-items: center;
        }
        .selected-icon, .option-icon {
          width: 19px;
          margin-right: 10px;
          filter: grayscale(1);
        }
        .options {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
          z-index: 10;
          margin-top: 4px;
        }
        .option {
          padding: 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .option:hover {
          background-color: #f0f0f0;
        }

        .custom-select .selected-value span {
          position: relative;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          font-family: "Montserrat", sans-serif;
        }
        .custom-select:after {
          content: "";
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          border: solid #212529;
          border-width: 0 2px 2px 0;
          padding: 2px;
          display: inline-block;
          transform: translateY(-50%) rotate(45deg);
        }

        @media (max-width: 767px) {
          .option, .custom-select {
            font-size: 14px;
            padding: 6px 10px;
          }
          .custom-select {
            padding: 4px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomSelect;
