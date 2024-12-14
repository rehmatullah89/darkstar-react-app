"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import Loading from '@/ui/common/Loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NoData from '@/ui/common/NoData';

const AllTickets = () => {
  const { makeApiCall, loading } = useApi();
  const router = useRouter();

  const [allTickets, setAllTickets] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [expandedTickets, setExpandedTickets] = useState<{ [key: number]: boolean }>({});

  const getOrderData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('auth/user-tickets', 'GET');
      if (response.statusCode === 200 && response.success) {
        setAllTickets(response.data);
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

  const handleReadMore = (index: number) => {
    setExpandedTickets(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'closed':
        return COLORS.primary;
      case 'solved':
        return 'green';
      case 'open':
        return COLORS.danger;
      default:
        return COLORS.gray;
    }
  };

  return (
    <div className="pageStainConcealer">
      <Heading
        heading="Support center"
        subHeading="Connect with our team."
      />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginRight: 10 }}>
            <div style={{ fontWeight: 'bold' }}>Messages</div>
            <div>Showing 1 to {allTickets.count} of  {allTickets.count} tickets</div>
          </div>
          <div><Button
            title={'New Ticket'}
            onClick={() => router.push('/my-account-new/support/new-tickets')}
            textStyle={{ fontSize: 14 }} /></div>
        </div>

        {isLoading ? (
          <Loading />
        ) : allTickets?.tickets?.length > 0 ?
          allTickets?.tickets?.map((ticket, index) => {
            const isExpanded = expandedTickets[index];
            const shouldTruncate = ticket.description?.length > 150;
            const displayDescription = shouldTruncate && !isExpanded
              ? `${ticket.description.slice(0, 150)}...`
              : ticket.description;
            const data = {
              ...allTickets,
              item: ticket
            }
            return (
              <div key={index} style={{ marginTop: 10, border: '1px solid #dee2e6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f8f8', borderBottom: '1px solid #dee2e6' }}>
                  <div style={{ color: COLORS.primary, padding: 10 }}>#{ticket.id}</div>
                  <div style={{ fontSize: 12, padding: 10 }}>{FUNC.formatDateWithTime(ticket.created_at)}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f8f8' }}>
                  <div style={{ padding: 10, width: '65%' }}>
                    {ticket.subject}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 12, padding: 10, width: '35%' }}>
                    Status: <span style={{ color: getStatusColor(ticket.status), marginLeft: 5, textTransform: 'capitalize' }}>{ticket.status}</span>
                  </div>
                </div>
                <div style={{ fontSize: 14, padding: 10, }}>
                  {displayDescription}
                  {shouldTruncate && (
                    <Link
                      style={{ color: COLORS.primary, cursor: 'pointer' }}
                      href={{
                        pathname: `/my-account-new/support/all-tickets/${ticket.id}`,
                        query: ticket
                      }}
                    >
                      <div>
                        {isExpanded ? ' Show Less' : ' Read More'}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            )
          }) : <NoData title={'No tickets available'} />}
      </div>
    </div>
  );
};

export default AllTickets;
