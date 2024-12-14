"use client"
import React, { useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Input from '@/ui/common/Input';
import Button from '@/ui/common/Button';
import { FUNC } from '@/utils';
import UserProfileCard from '@/ui/profile/UserProfileCard/UserProfileCard';
import EditPasswordLoader from '@/ui/skeletonLoader/EditPasswordLoader';

const EditPassword = () => {
  const { makeApiCall, loading } = useApi();
  const [isLoading, setIsLoading] = useState(false);

  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [userPassData, setUserPassData] = useState({
    password: '',
    new_password: '',
    confirm_password: '',
  });
  const onChangeUserPassData = (field: string | undefined, value: any) => {
    if (typeof field === 'string')
      setUserPassData(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
  };

  const handleUpdateUserPassData = async () => {
    const { password, new_password, confirm_password } = userPassData;
    const emptyFields: string[] = [];
    setEmptyFields([]);

    // Check for empty fields
    if (!password.trim()) {
      emptyFields.push(FUNC.capitalizeFirstLetterOfEachWordRemove_('password'));
    }
    if (!new_password.trim()) {
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('new_password'),
      );
    }
    if (!confirm_password.trim()) {
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('confirm_password'),
      );
    }

    // Report empty fields early
    if (emptyFields.length > 0) {
      const message =
        emptyFields.length === 1
          ? FUNC.capitalizeSentence(`The ${emptyFields[0]} field is blank`)
          : `${emptyFields.join(', ')}`;
      // Toast.show({
      //   type: 'info',
      //   text1: 'Complete the following fields',
      //   text2: message,
      // });
      setEmptyFields(emptyFields);
      return;
    }
    if (new_password.length < 8) {
      // Toast.show({
      //   type: 'info',
      //   text1: 'New Password should be at least 8 characters long.',
      // });
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('confirm_password'),
      );
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('new_password'),
      );
      alert('New Password should be at least 8 characters long.')
      return;
    }
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;
    if (!passwordPattern.test(new_password)) {
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('confirm_password'),
      );
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('new_password'),
      );
      // Toast.show({
      //   type: 'info',
      //   text1: 'Password must contain at least one number,',
      //   text2: 'One uppercase, one lowercase, and one special character.',
      // });
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('confirm_password'),
      );
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('new_password'),
      );
      alert('Password must contain at least one number, One uppercase, one lowercase, and one special character.')
      setEmptyFields(emptyFields);
      return;
    }
    if (new_password !== confirm_password) {
      // Toast.show({
      //   type: 'info',
      //   text1: 'Passwords do not match.',
      // });
      alert('Passwords do not match.')
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('confirm_password'),
      );
      emptyFields.push(
        FUNC.capitalizeFirstLetterOfEachWordRemove_('new_password'),
      );
      setEmptyFields(emptyFields);
      return;
    }
    try {
      const data = {
        password: password,
        new_password: new_password,
      };
      const response = await makeApiCall('auth/change-password', 'POST', data);
      if (response.statusCode === 200 && response.success) {
        // Toast.show({
        //   type: 'success',
        //   text1: FUNC.capitalizeFirstLetterOfEachWord(response.message),
        // });
      } else {
        // Toast.show({
        //   type: 'error',
        //   text1: FUNC.capitalizeFirstLetterOfEachWord(response.data.message),
        // });
        emptyFields.push(
          FUNC.capitalizeFirstLetterOfEachWordRemove_('password'),
        );
        setEmptyFields(emptyFields);
        return;
      }
    } catch (error) {
      console.error('Error during updating:', error);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Something went wrong, while updating password.',
      //   text2: error.toString(),
      // });
    }
  };


  const displaySocialInputs = () => {
    return Object.keys(userPassData).map(key => {
      return (
        <div key={key} style={styles.detailsContainer}>
          <Input
            title={FUNC.capitalizeFirstLetterOfEachWordRemove_(key)}
            value={FUNC.capitalizeFirstChar(userPassData[key])}
            error={emptyFields}
            name={key}
            onInputChange={onChangeUserPassData}
            secureTextEntry={true}
          />
        </div>
      );
    });
  };

  if (isLoading) {
    return (
      <EditPasswordLoader />
    );
  }
  return (
    <div className="pageStainConcealer">
      <Heading
        heading="PROFILE"
        subHeading="
Manage and edit your name email or password"
        lineHeight={false}
        border={true}
      />
      <UserProfileCard />
      <div style={styles.detailsContainer}>{displaySocialInputs()}</div>
      <div style={styles.actionButtonContainer}>
        <Button
          loading={loading}
          title={'save Password'}
          onClick={() => handleUpdateUserPassData()}
        />
      </div>
    </div >
  );
};

const styles = {
  detailsContainer: {
    paddingTop: 10,
    paddingBottom: 10,

  },
  actionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default EditPassword;
