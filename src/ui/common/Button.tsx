import { FUNC } from '@/utils';
import React, { useState, FC, ReactNode, CSSProperties, useEffect } from 'react';

interface ButtonProps {
  type?: 'default' | 'primary' | 'secondary' | 'agree' | 'disagree' | 'alert';
  title?: string;
  onClick?: () => void;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  dashBorder?: boolean;
  loading?: boolean;
  disabled?: boolean;
  bg?: boolean;
  textStyle?: CSSProperties;
  paddingH?: number;
  paddingV?: number;
  border?: boolean;
  bgColor?: string;
}

const COLORS = {
  primary: '#3c98cc',
  white: '#fff',
  btnBlueBg: '#3c98cc',
  text: '#343a40',
  btnYellowBg: '#ffc107',
  yellow: '#ffc107',
  activeGreen: '#8DE070',
  deactivateRed: '#FF0D0E',
};

const Button: FC<ButtonProps> = ({
  type = 'default',
  title,
  onClick,
  icon,
  leftIcon,
  dashBorder = false,
  loading,
  disabled = false,
  bg = false,
  textStyle,
  paddingH,
  paddingV,
  border = true,
  bgColor,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  let btnBackgroundColor = bgColor || COLORS.primary;
  let btnTextColor = COLORS.white;
  let btnBorderColor = bgColor || COLORS.primary;

  if (type === 'primary') {
    btnBackgroundColor = bg ? COLORS.white : COLORS.white;
    btnTextColor = COLORS.primary;
    btnBorderColor = COLORS.primary;
  } else if (type === 'secondary') {
    btnBackgroundColor = COLORS.white;
    btnTextColor = COLORS.text;
    btnBorderColor = COLORS.white;
  } else if (type === 'alert') {
    btnBackgroundColor = COLORS.btnYellowBg;
    btnTextColor = COLORS.yellow;
    btnBorderColor = COLORS.yellow;
  } else if (type === 'agree') {
    btnBackgroundColor = COLORS.white;
    btnTextColor = COLORS.activeGreen;
    btnBorderColor = COLORS.activeGreen;
  } else if (type === 'disagree') {
    btnBackgroundColor = COLORS.white;
    btnTextColor = COLORS.deactivateRed;
    btnBorderColor = COLORS.deactivateRed;
  }

  const handlePress = () => {
    if (!isButtonDisabled) {
      onClick?.();

      setIsButtonDisabled(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      setIsButtonDisabled(false);
    };
  }, []);

  return (
    <button
      disabled={disabled || isButtonDisabled}
      onClick={loading ? undefined : handlePress}
      style={{
        backgroundColor: btnBackgroundColor,
        padding: `${paddingV || 5}px ${paddingH || 15}px`,
        border: border ? `1px solid ${btnBorderColor}` : 'none',
        borderColor: btnBorderColor,
        borderStyle: dashBorder ? 'dashed' : 'solid',
        color: btnTextColor,
        ...textStyle,
        textTransform: 'uppercase'
      }}
    >
      {loading ? (
        'Loading...'
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {title}
          {leftIcon && <span>{leftIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
