import Image from 'next/image'
import React from 'react'
import NoImage from '../../../../public/noImage.png'
import { useUser } from '@/context/UserContext';

const UserProfileCard = () => {
  const { userData } = useUser();

  return (
    <div className="userSectionWrapper" style={styles.userInfoContainer}>
      <div style={styles.avatarContainer}>
        <Image style={styles.avatarContainerImage}
          src={userData?.avatar_url || NoImage} alt="Avatar" width={100} height={100} />
      </div>
      <div>
        <div style={styles.userName}>{userData?.username}</div>
        <div style={styles.userEmail}>{userData?.email}</div>
        <div style={styles.userID}>{`C-${userData?.id}`}</div>
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
    marginBottom: 20,
  },
  avatarContainer: {
    borderWidth: 1,
    padding: 5,
    marginRight: 15,
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainerImage: {
    borderRadius: '5px'
  },
  userName: {
    fontSize: '20px',
    fontWeight: '600'

  },
};

export default UserProfileCard
