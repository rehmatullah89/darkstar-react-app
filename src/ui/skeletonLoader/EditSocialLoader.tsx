import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EditSocialLoader = () => {
  return (
    <div className="pageStainConcealer">

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div style={styles.detailsContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex' }}>
              <Skeleton width={15} baseColor={COLORS.grayLight} style={{ marginRight: 5 }} />
              <Skeleton width={150} baseColor={COLORS.grayLight} style={{ marginBottom: 10 }} />
            </div>
            <Skeleton width={'100%'} height={30} />
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
};
export default EditSocialLoader
