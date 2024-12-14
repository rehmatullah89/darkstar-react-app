"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS } from '@/utils';
import UserProfileCard from '@/ui/profile/UserProfileCard/UserProfileCard';
import { useMediaQuery } from 'react-responsive';
import EditProfileLoader from '@/ui/skeletonLoader/EditProfileLoader';

const ProfileDetail = () => {
  const { userData, setUser } = useUser();


  const { makeApiCall, loading } = useApi();
  const [edit, setEdit] = useState(false);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [userEditData, setUserEditData] = useState({
    ...userData,
    id: userData?.id,
    first_name: userData?.first_name,
    last_name: userData?.last_name,
    phone: userData?.billing?.phone || 0,
    avatar_url: userData?.avatar_url,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    if (userEditData) {
      setUserEditData({
        id: userData?.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.billing?.phone,
        avatar_url: userData?.avatar_url,
      });
      setIsLoading(false);

    }
  }, [userData]);

  const handleUpdateUser = async () => {
    const { first_name, last_name, phone, id } = userEditData;
    const newEmptyFields: string[] = [];

    if (!first_name.trim()) newEmptyFields.push('First Name');
    if (!last_name.trim()) newEmptyFields.push('Last Name');
    if (!phone.trim()) newEmptyFields.push('Phone Number');

    if (phone.trim() && !/^\d+$/.test(phone)) {
      alert('Invalid Phone Number - Phone number should contain only numeric characters.');
      return;
    }
    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }

    try {
      const data = { id, user_firstname: first_name, user_lastname: last_name, billing_phone: phone };
      const response = await makeApiCall(`auth/update-customer`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        // toast.success(response.message);
        const data = {
          ...userData,
          first_name: first_name,
          last_name: last_name,
          billing: userData.billing ? {
            ...userData.billing,
            phone: phone
          } : { ...userData.billing }
        }
        setUser(data)
        setEdit(false);
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert(`Something went wrong while updating user: ${error.toString()}`);
    }
  };

  const onChangeuser = (field, value) => {
    setUserEditData(prevUser => ({
      ...prevUser,
      [field]: value,
    }));
  };
  if (isLoading) {
    return (
      <EditProfileLoader />
    );
  }
  return (
    <div className="pageStainConcealer">
      <div className="sectionTopHeading">
        <Heading
          heading="PROFILE"
          subHeading="Manage and edit your name email or password"
          lineHeight={false}
          border={true}
        />
      </div>
      <UserProfileCard />
      <div style={styles.detailsContainer}>
        <Heading
          heading="First Name"
          headingColor={COLORS.gray}
          headingFontSize={13}
          subHeadingFontSize={13}
          lineHeight={false}
          border={true}
          subHeading={userData?.first_name}
          edit={edit}
          error={emptyFields}
          name={'first_name'}
          onInputChange={(field: string | undefined, value: any) =>
            onChangeuser(field, value)
          }
        />
        <Heading
          heading="Last Name"
          headingColor={COLORS.gray}
          headingFontSize={13}
          subHeadingFontSize={13}
          lineHeight={false}
          border={true}
          subHeading={userData?.last_name}
          edit={edit}
          error={emptyFields}
          name={'last_name'}
          onInputChange={(field: string | undefined, value: any) =>
            onChangeuser(field, value)
          }
        />
        <Heading
          heading="Phone Number"
          headingColor={COLORS.gray}
          headingFontSize={13}
          subHeadingFontSize={13}
          lineHeight={false}
          border={true}
          subHeading={userData?.billing.phone}
          edit={edit}
          error={emptyFields}
          name={'phone'}
          onInputChange={(field: string | undefined, value: any) =>
            onChangeuser(field, value)
          }
        />
      </div>

      <div style={{ ...styles.actionButtonContainer, ...(edit && styles.row) }}>
        {!edit ? (
          <Button title={'Edit info'} onClick={() => setEdit(true)} />
        ) : (
          <>
            <Button
              title={'Save'}
              loading={loading}
              onClick={() => handleUpdateUser()}
            />
            <Button
              title={'Cancel'}
              onClick={() => {
                setEdit(false);
                setEmptyFields([]);
              }}
              type="primary"
            />
          </>
        )}
      </div>
    </div >

  );
};

type CSSProperties = React.CSSProperties;

const styles: { [key: string]: CSSProperties } = {
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

export default ProfileDetail;
