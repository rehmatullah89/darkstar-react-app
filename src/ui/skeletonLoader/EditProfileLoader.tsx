import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const EditProfileLoader = () => {
  return (
    <div className="pageStainConcealer">

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div style={styles.userInfoContainer}>
        <div style={styles.avatarContainer}>
          <Skeleton baseColor="#3c98cc" width={70} height={70} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[1, 2, 3].map((item, idx) => (
            <div key={idx}>
              <Skeleton width={150} baseColor={COLORS.grayLight} />
              <Skeleton width={250} />
            </div>
          ))}
        </div>
      </div>
      <div style={styles.detailsContainer}>
        {[1, 2, 3].map((item, idx) => (
          <div key={idx}>
            <Skeleton width={150} baseColor={COLORS.grayLight} style={{ marginBottom: 10 }} />
            <Skeleton width={'100%'} height={30} />
            <div style={{ borderBottom: '1px solid #ccc', marginTop: 20, marginBottom: 20 }} />
          </div>
        ))}
      </div>
      <div style={{ ...styles.actionButtonContainer, marginBottom: 20 }}>
        <Skeleton width={150} baseColor={COLORS.primary} height={40} />
      </div>
    </div>
  )
}

type CSSProperties = React.CSSProperties;

const styles: { [key: string]: CSSProperties } = {
  userInfoContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  },
  avatarContainer: {
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    height: 70,
    width: 70,
  },
  detailsContainer: {
    borderTopWidth: 1,
    padding: '10px 0px',
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

export default EditProfileLoader