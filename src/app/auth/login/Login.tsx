// Import necessary libraries
'use client'
import React, { useState } from 'react';
import { COLORS, FUNC } from '../../../utils';
import Button from '@/ui/common/Button';
import Input from '@/ui/common/Input';
import useApi from '@/hooks/useApi';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { useToast } from '@/context/ToastProvider';
import { WP_BASE_URL } from '@/utils/constants';

const Login = () => {
  const router = useRouter();
  const { makeApiCall, loading } = useApi();
  const { setUser, setToken } = useUser();
  const { showSuccess, showError } = useToast();

  const [loginData, setLoginData] = useState({
    username: 'hamza@mindblazetech.com',
    password: 'hamza',
  });
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleLogin = async () => {
    const { username, password } = loginData;
    const emptyFields: string[] = [];
    setEmptyFields([]);
    if (username.trim() === '') {
      emptyFields.push('Email');
    }
    if (password.trim() === '') {
      emptyFields.push('Password');
    }
    if (emptyFields.length > 0) {
      if (emptyFields.length === 1) {

        showSuccess(FUNC.capitalizeSentence(
          `The ${emptyFields[0]} field is blank`,
        ),);
      } else {
        showSuccess(`Complete the following fields: ${emptyFields.join(', ')}`);
      }
      setEmptyFields(emptyFields);
      return;
    }

    try {
      const data = {
        username: username,
        password: password,
      };
      const response = await makeApiCall(`auth/login`, 'POST', data);
      if (response?.statusCode === 200 && !response.success) {
        emptyFields.push('Email');
        emptyFields.push('Password');
        setEmptyFields(emptyFields);
        return;
      }
      if (response?.statusCode === 200 && response.success) {
        const { access_token, user } = response.data;
        setUser(user)
        setToken(access_token)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y2tfMTI1YWMzMTdmNzg0NGM2ZjlmM2M4NWU0OTA0MDA4NTliYWYwODAyOTpjc19mZjgwZmJjNjZmM2YwNTYwZjQ0N2YyYjk0ZDRkYTJlMjBiNTUwYmU1");
        myHeaders.append("Cookie", "wordpress_logged_in_7910afd7910653551c70e81b54009154=hamza.mbt%7C1715495151%7CL7ubl8JvL5iYldHvNgFDtVofUf8YciTOcAP5Q4RIiDn%7Ccbd68adc7e04901c1428524222acac3e5789a8d185e19fb1326fce13760accc2");

        const response2 = await fetch(
          `${WP_BASE_URL}/wp-json/wc/v3/login-customer?username=hamza@mindblazetech.com&password=hamza`,
          {
            method: 'GET',
            headers: myHeaders,
            redirect: "follow"
          },
        );
        if (response2)
          router.push('/my-account-new')

        setLoginData({
          username: '',
          password: '',
        });
        // navigation.navigate(ROUTES.HOME);
        return;
      }
    } catch (error) {
      showError('Error during login:', error);
    }
  };
  const onChangeLogin = (field, value) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.brandName}>SBR</h1>
        <p style={styles.loginContinueTxt}>Login in to continue</p>

        <div>
          <Input
            title={'Email'}
            name={'username'}
            placeholder="Enter your username address"
            value={loginData.username}
            onInputChange={(field: string | undefined, value: any) =>
              onChangeLogin(field, value)
            }
            error={emptyFields}
          />
          <Input
            title={'Password'}
            name={'password'}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={loginData.password}
            onInputChange={(field: string | undefined, value: any) =>
              onChangeLogin(field, value)
            }
            error={emptyFields}
          />
          <div style={{ marginTop: 20 }}>
            <Button
              title={'Login'}
              onClick={handleLogin}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type CSSProperties = React.CSSProperties;

const styles: { [key: string]: CSSProperties } = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 70
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center' as 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center' as 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    margin: '10px 0px',
    borderRadius: 5,
    height: 55,
    padding: '0px 15px',
    color: COLORS.gray,
  },
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center' as 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center' as 'center',
    flexDirection: 'row' as 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
};
export default Login;
