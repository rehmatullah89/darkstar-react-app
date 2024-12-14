"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import NoData from '@/ui/common/NoData';
import { useMediaQuery } from 'react-responsive';
import Loading from '@/ui/common/Loading';

const AddBilling = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isDesktop]);
  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="pageStainConcealer">
      <Heading
        heading="add Billing"
        subHeading="Manage your addBilling addresses."
        border={true}
        lineHeight={false}
      />
      <NoData title="Feature is temporary disable" />
    </div >
  );
};

export default AddBilling;
