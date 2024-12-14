'use client';

import { useUser } from '@/context/UserContext';
import { COLORS } from '@/utils';
import { removeLocalStorage } from '@/utils/helpers';
import { useRouter } from 'next/navigation';
const Logout = () => {
    const { setUser, setToken } = useUser();
    const router = useRouter();
    const logoutUser = () => {
      
        
       removeLocalStorage('access_token')
        router.push('/auth/login');
      
      };

  return <>
   <div
              style={{ color: COLORS.primary, marginLeft: 10, cursor: 'pointer' }}
              onClick={logoutUser}
            >
              Log Out
            </div>
  </>
};

export default Logout;
