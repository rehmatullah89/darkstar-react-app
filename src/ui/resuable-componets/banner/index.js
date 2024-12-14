import React from 'react';

const Banner = ({ children, bannerImage, bannerImageSetting }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bannerImage.src})` }}
        id="bannerId"
        className={`${bannerImageSetting}`}
      >
        <div className="banner-content">{children}</div>
      </div>
    </>
  );
};

export default Banner;
