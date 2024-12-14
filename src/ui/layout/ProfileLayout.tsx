import React, { ReactNode } from 'react';

interface IProfileLayout {
  child: ReactNode;
}

const ProfileLayout: React.FC<IProfileLayout> = ({ child }) => {

  return (
    <>
      {child}
    </>
  );
};

export default ProfileLayout;
