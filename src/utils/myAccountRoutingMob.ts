
import profileActive from "../../public/my-account/users-icon-v2.svg";
import orderActive from '../../public/my-account/orders-icon.svg';
import credit_iconActive from '../../public/my-account/view-payment-icon.svg';
import deliveryActive from '../../public/my-account/shipping.svg';
import envelopeActive from '../../public/my-account/support-icon-p.svg';
import awardActive from '../../public/my-account/reward-icon-p.svg';
import subscription from '../../public/my-account/subs-icon-1.svg';

import social from '../../public/my-account/social-icon.svg';
import password from '../../public/my-account/password-icon.svg';
import orders from '../../public/my-account/orders-icon.svg';
import subs from '../../public/my-account/subs-icon-1.svg';
import viewPayment from '../../public/my-account/view-payment-icon.svg';
import addPayment from '../../public/my-account/add-payment-icon.svg';
import url from '../../public/my-account/url-icon.svg';
import stat from '../../public/my-account/stat-icon.svg';
import graph from '../../public/my-account/graph-icon.svg';
import referrals from '../../public/my-account/referrals-icon.svg';
import payout from '../../public/my-account/payout-icon.svg';
import settings from '../../public/my-account/settings-icon.svg';
import tickets from '../../public/my-account/tickets-icon.svg';
import newTickets from '../../public/my-account/new-ticket-icon.svg';
import shipping from '../../public/my-account/shipping.svg';
import shippingNew from '../../public/my-account/shipping-new.svg';
import users from '../../public/my-account/users-icon-v2.svg';

type AccountScreen = {
  heading: string;
  subHeading: string;
  activeIcon: string; // Assuming activeIcon is a string representing the path to the SVG file
  options: {
    icon: string; // Assuming icon is a string representing the path to the SVG file
    title: string;
    link: string;
    hideWeb?:boolean
  }[];
};
const accScreensData:AccountScreen[] = [
  {
    heading: 'PROFILE',
    subHeading: 'Manage and edit your name or email.',
    activeIcon: profileActive,
    options: [
      { icon: users, title: 'Profile', link: '/my-account-new/edit-account' },
      { icon: social, title: 'Social', link: '/my-account-new/edit-social' },
      {
        icon: password,
        title: 'Change Password',
        link: '/my-account-new/edit-password',
      },
    ],
  },
  {
    heading: 'Order',
    subHeading: 'Track, return or buy items again.',
    activeIcon: orderActive,
    options: [      
      { icon: orders, title: 'all orders', link: '/my-account-new/orders' },
    ],
  },
  
  {
    heading: 'Subscription',
    subHeading: 'Track, return or buy items again.',
    activeIcon: subscription,

    options: [
      { icon: subs, title: 'View All', link: '/my-account-new/subscription' },
    ],
  },
  {
    heading: 'Shipping',
    subHeading: 'Manage your shipping addresses.',
    activeIcon: deliveryActive,

    options: [
      {
        icon: shipping,
        title: 'View shipping address',
        link: '/my-account-new/shipping/view-shipping',
      },
      {
        icon: shippingNew,
        title: 'Add new shipping',
        link: '/my-account-new/shipping/add-shipping',
      },
    ],
  },
  {
    heading: 'Billing',
    subHeading: 'Manage Billing Methods.',
    activeIcon: credit_iconActive,

    options: [
      {
        icon: viewPayment,
        title: 'View payment methods',
        link: '/my-account-new/billing/view-billing',
      },
      {
        icon: addPayment,
        title: 'Add payment methods',
        link: '/my-account-new/billing/add-billing',
      },
    ],
  },
  {
    heading: 'Reward',
    subHeading: 'Earn commissions & perks.',
    activeIcon: awardActive,

    options: [
      {
        icon: url,
        title: 'Affiliate URLS',
        link: '/my-account-new/reward/affiliate-url',
      },
      {
        icon: stat,
        title: 'Statistics',
        link: '/my-account-new/reward/statistics',
      },
      { icon: graph, title: 'Graphs', link: '/my-account-new/reward/graphs' },
      {
        icon: referrals,
        title: 'Referrals',
        link: '/my-account-new/reward/referrals',
      },
      {
        icon: payout,
        title: 'Payouts',
        link: '/my-account-new/reward/payouts',
      },
      {
        icon: addPayment,
        title: 'Visits',
        link: '/my-account-new/reward/visits',
      },
      {
        icon: settings,
        title: 'Settings',
        link: '/my-account-new/reward/settings',
      },
    ],
  },
  {
    heading: 'Customer Support',
    subHeading: 'Connect with Smile Brilliant customer service',
    activeIcon: envelopeActive,
    options: [
      {
        icon: tickets,
        title: 'All tickets',
        link: '/my-account-new/support/all-tickets',
      },
      {
        icon: newTickets,
        title: 'New tickets',
        link: '/my-account-new/support/new-tickets',
      },
      // { title: 'RDHC messages', link: '/my-account-new/support/RDHC-messages' },
    ],
  },
];

export { accScreensData };
