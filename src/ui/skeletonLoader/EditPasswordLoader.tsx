import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EditPasswordLoader = () => {
  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div style={styles.detailsContainer}>
        {[1, 2, 3].map((item, idx) => (
          <div key={idx}>
            <Skeleton width={150} baseColor={COLORS.grayLight} style={{ marginBottom: 10 }} />
            <Skeleton width={'100%'} height={40} />
            <div style={{ borderBottom: '1px solid #ccc', marginTop: 20, marginBottom: 20 }} />
          </div>
        ))}
      </div>
      <div style={{ ...styles.actionButtonContainer }}>
        <Skeleton width={150} baseColor={COLORS.primary} height={40} />
      </div>
    </div>
  )
}

type CSSProperties = React.CSSProperties;

const styles: { [key: string]: CSSProperties } = {
  detailsContainer: {
    borderTopWidth: 1,
    padding: '10px 0px',
    marginTop: 20
  },
  actionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
  },
};
export default EditPasswordLoader
