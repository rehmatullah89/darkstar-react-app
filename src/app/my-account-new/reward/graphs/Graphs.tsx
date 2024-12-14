"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import RewardLayout from '@/ui/layout/RewardLayout';
import { WP_BASE_URL } from '@/utils/constants';

const Graphs = () => {
  const { makeApiCall, loading } = useApi();

  const [graphs, setGraphs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);


  const getOrderData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('order/customer-graphs', 'GET');
      if (response.statusCode === 200 && response.success) {
        const updatedGraphs = response.data.map(order => {
          const imageUrls =
            order.image_url && order.image_url.length > 0
              ? order.image_url
              : [''];
          const updatedLineItems = order.line_items.map((item, index) => ({
            ...item,
            image_url: imageUrls[index]
              ? `${WP_BASE_URL}${imageUrls[index]}`
              : '',
          }));
          return {
            ...order,
            line_items: updatedLineItems,
          };
        });
        setGraphs(updatedGraphs);
        setIsLoading(false);
      }
    } catch (error) {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Something went wrong, while getting User data',
      // });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RewardLayout child={
      <div className="pageStainConcealer" >
        <Heading
          heading="Graphs"
          subHeading="Track, return or buy items again."
        />
      </div>} />
  );
};

export default Graphs;
