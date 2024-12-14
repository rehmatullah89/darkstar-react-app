"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import { FaFacebookF, FaInstagram, FaLink, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconType } from 'react-icons/lib';
import UserProfileCard from '@/ui/profile/UserProfileCard/UserProfileCard';

const EditSocial = () => {
  const { userData, setUser } = useUser();
  const { makeApiCall, loading } = useApi();

  const [edit, setEdit] = useState(false);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [socialData, setSocialData] = useState({
    instagram: userData?.meta_data?.s_instagram || '',
    twitter: userData?.meta_data?.s_twitter || '',
    facebook: userData?.meta_data?.s_facebook || '',
    youtube: userData?.meta_data?.s_youtube || '',
    linkedin: userData?.meta_data?.s_linkedin || '',
    tikTok: userData?.meta_data?.s_tikTok || '',
    blog: userData?.meta_data?.s_blog || '',
  });

  useEffect(() => {
    setIsLoading(true)
    if (userData && userData.meta_data) {
      setSocialData({
        instagram: userData.meta_data.s_instagram || '',
        twitter: userData.meta_data.s_twitter || '',
        facebook: userData.meta_data.s_facebook || '',
        youtube: userData.meta_data.s_youtube || '',
        linkedin: userData.meta_data.s_linkedin || '',
        tikTok: userData.meta_data.s_tikTok || '',
        blog: userData.meta_data.s_blog || '',
      });
    }
    setIsLoading(false);
  }, [userData]);

  const handleUpdateSocialData = async () => {
    const { instagram, twitter, facebook, youtube, linkedin, tikTok, blog } =
      socialData;
    let emptyFields: string[] = [];

    const fieldsToValidate = {
      instagram: 'Instagram',
      twitter: 'Twitter',
      facebook: 'Facebook',
      youtube: 'YouTube',
      linkedin: 'LinkedIn',
      tikTok: 'TikTok',
      blog: 'Blog',
    };
    setEmptyFields([]);
    Object.keys(fieldsToValidate).forEach(key => {
      const value = socialData[key];
      if (value && !FUNC.isValidUrl(value)) {
        emptyFields.push(fieldsToValidate[key]);
      }
    });
    setEmptyFields(emptyFields);

    if (emptyFields.length > 0) {
      alert(`Invalid URL detected in: ${emptyFields.join(', ')}`);
      return;
    }
    try {
      const data = {
        id: userData?.id,
        s_twitter: twitter,
        s_instagram: instagram,
        s_facebook: facebook,
        s_youtube: youtube,
        s_linkedin: linkedin,
        s_tikTok: tikTok,
        s_blog: blog,
      };
      const response = await makeApiCall(
        'auth/update-customer-social',
        'POST',
        data,
      );
      if (response.statusCode === 200 && response.success) {
        setUser({
          ...userData,
          meta_data: {
            ...userData?.meta_data,
            s_instagram: instagram,
            s_facebook: facebook,
            s_twitter: twitter,
            s_youtube: youtube,
            s_linkedin: linkedin,
            s_tikTok: tikTok,
            s_blog: blog,
          },
        });
        setEdit(false);
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  const onChangeSocialData = (field, value) => {
    setSocialData(prevSocial => ({
      ...prevSocial,
      [field]: value,
    }));
  };

  const displaySocialInputs = () => {
    return Object.keys(socialData).map(key => {
      let IconComponent: IconType | null = null;

      if (key === 'tikTok') IconComponent = FaTiktok;
      else if (key === 'instagram') IconComponent = FaInstagram;
      else if (key === 'twitter') IconComponent = FaTwitter;
      else if (key === 'facebook') IconComponent = FaFacebookF;
      else if (key === 'youtube') IconComponent = FaYoutube;
      else if (key === 'linkedin') IconComponent = FaLinkedinIn;
      else if (key === 'blog') IconComponent = FaLink;

      return (

        <div key={key} style={styles.detailsContainer}>
          <Heading
            headingIcon={IconComponent && <IconComponent />} // Render icon only if it exists
            heading={FUNC.capitalizeFirstChar(key)}
            headingColor={COLORS.gray}
            headingFontSize={13}
            subHeadingFontSize={13}
            lineHeight={false}
            border={true}
            subHeading={FUNC.capitalizeFirstChar(
              userData?.meta_data?.[`s_${key}`] || ''
            )}
            edit={edit}
            error={emptyFields}
            name={key}
            onInputChange={onChangeSocialData}
          />
        </div>
      );
    });
  };

  if (!userData || !userData.meta_data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pageStainConcealer">
      <Heading
        heading="PROFILE"
        subHeading="
Manage and edit your name or email."
        border={true}
        lineHeight={false}
      />
      <UserProfileCard />
      <div style={styles.detailsContainer}>{displaySocialInputs()}</div>

      <div style={{ ...styles.actionButtonContainer, ...(edit && styles.row) }}>
        {!edit ? (
          <Button title={'Edit info'} onClick={() => setEdit(true)} />
        ) : (
          <>
            <Button
              title={'Save'}
              loading={loading}
              onClick={handleUpdateSocialData}
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

export default EditSocial;
