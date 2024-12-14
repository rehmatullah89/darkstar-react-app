import {
  cookieExists,
  removeCookie,
  setCookie,
  getCookie,
} from '@/utils/helpers';
import { WP_BASE_URL } from '@/utils/constants';
import { User } from '@/utils/types';
import { SHIPPING_PROTECTION_PRICES_NG, SHIPPING_PROTECTION_PRICES_NON_NG } from '@/utils/utils';
export const useCookies = () => {
  const cookiesList: Record<string, any> = {
    shipping_protection: 'shipping_protection',
    shipping_protection_prices_ng: 'shipping_protection_prices_ng',
    shipping_protection_prices_non_ng: 'shipping_protection_prices_non_ng',
    irclickid: 'irclickid',
    logged_in_user_mbt_darkstar: 'logged_in_user_mbt_darkstar',
    geha_user: 'geha_user',
    sweatcoin: 'sweatcoin',
    benefithub: 'benefithub',
    perkspot: 'perkspot',
    abenity: 'abenity',
    goodrx: 'goodrx',
    teledentists: 'teledentists',
    onedental: '1dental',
    insurance_lander: 'insurance_lander',
    shine_user: 'shine_user'

  };
  const tagObj = {
    url: WP_BASE_URL,
    name: '',
    cssClass1: 'floting_geha_button',
    cssClass2: 'geha_memeber_button'
  }
  // Shiiping protection cookie

  const init_shipping_protection = () => {
    if (!cookieExists(cookiesList.shipping_protection)) {
      setCookie(cookiesList.shipping_protection, 1, 300);
    }
    //Set cookies for random prices 
    if (!cookieExists(cookiesList.shipping_protection_prices_ng) && SHIPPING_PROTECTION_PRICES_NG) {
      let cookieValue = getRandomOfArray(SHIPPING_PROTECTION_PRICES_NG)
      if (cookieValue)
        setCookie(cookiesList.shipping_protection_prices_ng, cookieValue, 360);
    }
    if (!cookieExists(cookiesList.shipping_protection_prices_non_ng) && SHIPPING_PROTECTION_PRICES_NON_NG) {
      let cookieValue = getRandomOfArray(SHIPPING_PROTECTION_PRICES_NON_NG)
      if (cookieValue)
        setCookie(cookiesList.shipping_protection_prices_non_ng, cookieValue, 360);
    }
  };
  const toggleShippingProtection = () => {
    if (cookieExists(cookiesList.shipping_protection)) {
      const cookie = getCookie(cookiesList.shipping_protection);
      const newValue = cookie == 1 ? '0' : '1';
      setCookie(cookiesList.shipping_protection, newValue, 300);
    }
  };
  const disable_shipping_protection = () => {
    setCookie(cookiesList.shipping_protection, 0, 300);
  };
  const getShippingProtection = () => {
    if (cookieExists(cookiesList.shipping_protection)) {
      return getCookie(cookiesList.shipping_protection);
    }
  };

  const init_impact_cookie = (searchParams: any) => {
    // Set Impact Cookie
    if (searchParams) {
      const irclickid = searchParams.get(cookiesList.irclickid);
      if (irclickid) {
        if (cookieExists(cookiesList.irclickid)) {
          removeCookie(cookiesList.irclickid);
        }

        setCookie('irclickid', irclickid, 30);
      }
    }
  };
  const getUser = () => {
    if (cookieExists(cookiesList.logged_in_user_mbt_darkstar)) {
      const cookie = getCookie(cookiesList.logged_in_user_mbt_darkstar);
      if (cookie) {
        const user_values: string[] = (cookie as string)?.split('|')!;
        const user: User = {
          ID: user_values[0],
          user_email: user_values[1],
          first_name: user_values[2],
          last_name: user_values[3],
          dentist_user_username: user_values[4] ? user_values[4] : '',

        };
        return user;
      }
    }
  };
  const setAffliateCookie = (value: any) => {
    if (value) {
      setCookie(cookiesList.affwp_ref, value, 30);
    }
  }
  const getUserTypeCookie = () => {
    if (isGehaUser()) {
      tagObj.name = 'GEHA Members',
        tagObj.url = WP_BASE_URL + '/geha'
    }
    else if (isDentistUser()) {
      const dentist = getUser();
      tagObj.name = 'Dentist Access',
        tagObj.url = WP_BASE_URL + '/dentist/' + dentist?.dentist_user_username
    }

    else if (isSweatCoinUser()) {
      tagObj.name = 'Sweatcoin Members',
        tagObj.url = WP_BASE_URL + '/sweatcoin'
    }
    else if (isbenefitHubUser()) {
      tagObj.name = 'Benefit Hub Members',
        tagObj.url = WP_BASE_URL + '/benefit-hub'
    }
    else if (isPerkspotUser()) {
      tagObj.name = 'Perkspot Members',
        tagObj.url = WP_BASE_URL + '/sweatcoin'
    }
    else if (isAbenityUser()) {
      tagObj.name = 'Abenity Members',
        tagObj.url = WP_BASE_URL + '/abenity'
    }
    else if (isGoodRxUser()) {
      tagObj.name = 'GoodRx Members',
        tagObj.url = WP_BASE_URL + '/goodrx '
    }
    else if (isTeleDentistsUser()) {
      tagObj.name = 'Tele Dentists Members',
        tagObj.url = WP_BASE_URL + '/teledentists'
    }
    else if (isOneDentalUser()) {
      tagObj.name = 'Sweatcoin Members',
        tagObj.url = WP_BASE_URL + '/one-dental'
    }
    else if (isShineUser()) {
      tagObj.name = 'Shine Discounts',
        tagObj.url = WP_BASE_URL + '/shine-members'
    }



    return tagObj;

  }

  const isGehaUser = () => {
    const gehaUser = getCookie(cookiesList.geha_user)
    return gehaUser && gehaUser === 'yes' ? true : false;
  }
  const isSweatCoinUser = () => {
    const sweatcoinUser = getCookie(cookiesList.sweatcoin)
    return sweatcoinUser && sweatcoinUser === 'yes' ? true : false;
  }
  const isbenefitHubUser = () => {
    const benefithubUser = getCookie(cookiesList.benefithub)
    return benefithubUser && benefithubUser === 'yes' ? true : false;
  }
  const isPerkspotUser = () => {
    const perkSpotUser = getCookie(cookiesList.perkspot)
    return perkSpotUser && perkSpotUser === 'yes' ? true : false;
  }
  const isAbenityUser = () => {
    const abenityUser = getCookie(cookiesList.abenity)
    return abenityUser && abenityUser === 'yes' ? true : false;
  }
  const isTeleDentistsUser = () => {
    const teleDentistsUser = getCookie(cookiesList.teledentists)
    return teleDentistsUser && teleDentistsUser === 'yes' ? true : false;
  }
  const isGoodRxUser = () => {
    const goodRxUser = getCookie(cookiesList.goodrx)
    return goodRxUser && goodRxUser === 'yes' ? true : false;
  }
  const isOneDentalUser = () => {
    const oneDentalUser = getCookie(cookiesList.onedental)
    return oneDentalUser && oneDentalUser === 'yes' ? true : false;
  }
  const isShineUser = () => {
    const oneDentalUser = getCookie(cookiesList.shine_user)
    return oneDentalUser && oneDentalUser === 'yes' ? true : false;
  }
  const isInsuranceLanderUser = () => {
    const insuranceLanderUser = getCookie(cookiesList.insurance_lander)
    return insuranceLanderUser && insuranceLanderUser === 'yes' ? true : false;
  }
  const isDentistUser = () => {
    const userObj = getUser();

    if (!userObj)
      return false
    return userObj?.dentist_user_username === '' ? false : true;
  }
  const getRandomOfArray = (array: any[]) => {
    if (array.length === 0) {
      return undefined; // If empty, return undefined
    }
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }
  return {
    init_shipping_protection,
    init_impact_cookie,
    getUser,
    cookiesList,
    toggleShippingProtection,
    getShippingProtection,
    disable_shipping_protection,
    isGehaUser,
    setAffliateCookie,
    getUserTypeCookie
  };
};
