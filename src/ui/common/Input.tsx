'use client';
import { COLORS } from '@/utils';
import React, { useState, useEffect, FC, ReactNode } from 'react';

interface InputProps {
  placeholder?: string;
  title?: string;
  error?: string[];
  headingIcon?: ReactNode;
  onInputChange?: (field: string | undefined, value: string) => void;
  name?: string;
  multiline?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  value?: string;
  height?: string;
  customStyles?: React.CSSProperties;
  onClick?: () => void;
  editable?: boolean;
  onSubmitEditing?: () => void;
}

const Input: FC<InputProps> = ({
  placeholder = '',
  title,
  error = [],
  onInputChange,
  name,
  multiline = false,
  maxLength = 250,
  secureTextEntry = false,
  value = '',
  height,
  customStyles = {},
  onClick,
  editable = true,
  headingIcon,
  onSubmitEditing
}) => {
  const [text, setText] = useState<string>(value);
  const [isFocused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setText(newValue);
    if (onInputChange) {
      onInputChange(name, newValue);
    }
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const ERROR = error.includes(title || name || '');

  const inputStyle: React.CSSProperties = {
    paddingRight: '15px',
    padding: '15px',
    height: height || '50px',
    borderColor: ERROR ? COLORS.danger : (isFocused ? COLORS.primary : COLORS.gray),
    borderWidth: '1px',
    width: '100%',
    borderRadius: '10px',
    ...customStyles
  };

  return (
    <>

      {!multiline ?
        <div>
          {title && (
            <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
              <span style={{ color: ERROR ? COLORS.danger : COLORS.gray }}>
                {headingIcon && headingIcon}
                {headingIcon && "    "}
                {title}</span>
            </div>
          )}
          <input
            type={secureTextEntry ? 'password' : 'text'}
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={(event) => {
              if (event.key === 'Enter' && onSubmitEditing) {
                onSubmitEditing();
              }
            }}
            style={inputStyle}
            disabled={!editable}
          />
        </div> :
        <div>
          {title && (
            <div style={{ display: 'flex', gap: '10px', paddingBottom: '5px' }}>
              <span style={{ color: ERROR ? COLORS.danger : COLORS.gray }}>
                {headingIcon && headingIcon}
                {headingIcon && "    "}
                {title}</span>
            </div>
          )}
          <textarea
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
            disabled={!editable}
          />
        </div>}
    </>
  );
};

export default Input;
