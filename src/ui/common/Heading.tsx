import React, { ReactNode } from 'react';
import Input from './Input';
import { COLORS } from '@/utils';

interface IHeading {
  icon?: ReactNode;
  headingIcon?: ReactNode;
  heading: string | any;
  subHeading?: string;
  border?: boolean;
  lineHeight?: boolean;
  edit?: boolean;
  headingColor?: string;
  subHeadingColor?: string;
  headingFontSize?: number;
  subHeadingFontSize?: number;
  onClick?: () => void;
  error?: string[];
  name?: string;
  onInputChange?: (
    field: string | undefined,
    value: string | number | any,
  ) => void;
}

const Heading: React.FC<IHeading> = ({
  icon,
  headingIcon,
  heading,
  subHeading,
  border = false,
  edit = false,
  lineHeight = true,
  headingColor,
  subHeadingColor,
  headingFontSize,
  subHeadingFontSize,
  onClick,
  error,
  name,
  onInputChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginBottom: lineHeight ? '0px' : '10px',
        borderBottom: border ? '1px solid #ccc' : 'none',
        paddingBottom: lineHeight ? '0px' : '10px',
      }}>
      {icon && icon}
      <div style={{ width: '100%' }}>
        {edit ? (
          <Input
            value={subHeading}
            title={heading}
            headingIcon={headingIcon}
            onClick={onClick}
            error={error}
            name={name}
            onInputChange={onInputChange}
            customStyles={{
              fontSize: subHeadingFontSize ? subHeadingFontSize : 14,
              color: subHeadingColor ? subHeadingColor : '#000',
              lineHeight: subHeadingFontSize ? subHeadingFontSize : 10,
              paddingTop: lineHeight ? 0 : 10,
              fontFamily: 'Montserrat',
              fontWeight: subHeadingFontSize ? 'bold' : 500,
              borderWidth: 1,
            }}
          />
        ) : (
          <>
            <div className='sectionHeading__row' style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', paddingTop: '13px' }}>
              {headingIcon}
              <div className='sectionheading' style={{
                fontFamily: 'Montserrat',
                textAlign: 'left',
                // fontSize: headingFontSize ? `${headingFontSize}px` : '16px',
                fontWeight: '600',
                lineHeight: '24px',
                paddingRight: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: headingColor || COLORS.primary,
              }}>
                {heading}
              </div>
            </div>
            <div
              style={{
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontSize: subHeadingFontSize ? `${subHeadingFontSize}px` : '12px',
                fontWeight: '500',
                color: subHeadingColor || COLORS.black,
              }}>
              {subHeading || 'N/A'}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Heading;
