"use client";
import { useUser } from "@/context/UserContext";
import Heading from "@/ui/common/Heading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { COLORS } from "@/utils";
import { accScreensData } from "@/utils/myAccountRouting";
import Image from "next/image";
import awardActive from "../../../public/icons/awardActive.svg";
import url from "../../../public/my-account/url-icon.svg";
import Loading from "@/ui/common/Loading";
import { Accordion,AccordionItem,AccordionBody, AccordionHeader } from 'react-bootstrap';
import MyAccountDesktopLoader from "@/ui/skeletonLoader/MyAccountDesktopLoader";
import MyAccountMobileLoader from "@/ui/skeletonLoader/MyAccountMobileLoader";

const MyAccount = () => {
  const router = useRouter();
  const [isDesktop,setIsDesktop] = useState(false)
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (!mobileRegex.test(userAgent)) {
        setIsDesktop(true);
    }
  }, []);
  const { setUser, userData, setToken } = useUser();
//   const isDesktop = useMediaQuery({ minWidth: 992 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isDesktop]);


  const logoutUser = () => {
    setUser(null);
    setToken(null);
    router.push("/auth/login");
  };

  const aff = userData?.is_affiliate_user;
  const hasSubscription = userData?.is_subscribed_user;
  const modifiedAccScreensData = accScreensData
    .map((section) => {
      if (section.heading === "Reward" && !aff) {
        return {
          heading: "Join Reward",
          subHeading: "Earn commissions & perks.",
          activeIcon: awardActive,
          options: [
            {
              icon: url,
              title: "Register you self",
              link: "/my-account-new/reward/affiliate-url",
            },
          ],
        };
      }
      return section;
    })
    .filter(
      (section) =>
        (aff || section.heading !== "Reward") &&
        (hasSubscription || section.heading !== "Subscription")
    );

//   if (isLoading) {
//     return (
//       isDesktop ? <MyAccountDesktopLoader /> : <MyAccountMobileLoader />
//     );
//   }
  if (isLoading) {
    return (
      <MyAccountDesktopLoader />
    );
  }
  return (
    <>
    {/* Show just on mob */}
    
        {/*  Turn off on mobile */}
     <div  className='for-only-desktop-show subpageContainer'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div className="userDisplayname"
            style={{
              color: COLORS.black,
              fontWeight: 600,
              fontSize: 24,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
             Hello   {userData?.last_name}
            
          </div>
          <div
            style={{
              color: COLORS.black,
              fontFamily: "inherit",
              fontSize: 16,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            From your account dashboard you can view your recent orders,
            manage your shipping and billing addresses, and edit your
            password and account details.{" "}
          </div>
          <div
            style={{
              color: COLORS.black,
              fontFamily: "inherit",
              fontSize: 16,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            You can also join our rewards program and earn commission on
            different Smile Brilliant products.{" "}
          </div>
        </div>
    </>
       
    
  );
};

export default MyAccount;
