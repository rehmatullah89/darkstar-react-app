"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import { COLORS, FUNC } from '@/utils';
import Loading from '@/ui/common/Loading';

const AllTickets: React.FC = ({ searchParams }: { params: { slug: string }, searchParams: any }) => {

  const [allTickets, setAllTickets] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    setAllTickets(searchParams)
    setIsLoading(false)
  }, [])

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

  const renderFormattedText = (text) => {
    const lines = text.split('\n').filter(Boolean);
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(### .+)|(\*\*.+?\*\*)/g).filter(Boolean);
      return (
        <div key={lineIndex}>
          {parts.map((part, partIndex) => {
            if (part.startsWith('### ')) {
              return (
                <span key={partIndex} style={{ fontSize: '24px', fontWeight: '700' }}>
                  {part.replace('### ', '')}
                </span>
              );
            } else if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <span key={partIndex} style={{ fontSize: '14px', fontWeight: '700' }}>
                  {part.slice(2, -2)}
                </span>
              );
            } else {
              return <span key={partIndex} style={{ fontSize: '14px', fontWeight: '300' }}>{part}</span>;
            }
          })}
          <br />
        </div>
      );
    });
  };


  return (
    <div className="pageStainConcealer">
      <Heading
        heading="Support Center"
        subHeading="Connect with our team."
        lineHeight={false}
      />
      <div>
        {isLoading ? (
          <Loading />
        ) : allTickets ?
          <>
            <div style={{ marginTop: 10, borderBottom: '1px solid #dee2e6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f8f8', borderBottom: '1px solid #dee2e6' }}>
                <div style={{ color: COLORS.primary, padding: 10 }}>#{allTickets.id}</div>
                <div style={{ padding: 10 }}>
                  <div style={{ fontSize: 12, display: 'flex', justifyContent: 'flex-end' }}>Start: {FUNC.formatDateWithTime(allTickets.created_at)}</div>
                  <div style={{ fontSize: 12, display: 'flex', justifyContent: 'flex-end' }}>Completed: {FUNC.formatDateWithTime(allTickets.updated_at)}</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#f8f8f8' }}>
                <div style={{ paddingLeft: 10, paddingTop: 10 }}>
                  {allTickets.subject}
                </div>
                <div style={{ fontSize: 12, paddingLeft: 10, paddingBottom: 10 }}>
                  Status: <span style={{ color: getStatusColor(allTickets.status), marginLeft: 5, textTransform: 'capitalize' }}>{allTickets.status}</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 10, border: '1px solid #f8a18a', borderStyle: 'dashed', padding: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <div>
                  {renderFormattedText(allTickets.description)}
                  <div style={{ fontSize: 14, marginTop: 10, color: COLORS.gray }}>{FUNC.formatDateWithTime(allTickets.created_at)}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, display: 'flex', justifyContent: 'center', backgroundColor: '#f8a18a', width: 60, padding: 20, color: 'white', borderRadius: 500 }}>Agent</div>
                </div>
              </div>
            </div>
          </>
          : null}
      </div>
    </div>
  );
};

export default AllTickets;
