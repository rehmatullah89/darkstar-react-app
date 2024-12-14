// components/Countdown.tsx
"use client";
import React, { useEffect, useState } from "react";
import styles from "./Countdown.module.css";
import Link from "next/link";

const startSale = "2023-11-26 00:00:00"; // Adjust as necessary
const endSale = "2024-09-03 02:00:00"; // Adjust as necessary
const timezone = "America/Chicago"; // Replace with the desired timezone

interface TimeRemaining {
  total: number;
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const startTime = startSale + "-05:00"; // for Chicago
  const endTime = endSale + "-05:00"; // for chicago
  const getDateWithTimezone = (dateString: string) => {
    return new Date(
      new Date(dateString).toLocaleString("en-US", { timeZone: timezone })
    );
  };

  const calculateTimeRemaining = (): TimeRemaining => {
    const end = getDateWithTimezone(endTime).getTime();
    const now = getDateWithTimezone(new Date().toISOString()).getTime();
    const t = end - now;

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    if (days > 2 || days === 2) {
      return {
        total: t,
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        total: t,
        hours: hours + days * 24,
        minutes,
        seconds,
      };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const start = getDateWithTimezone(startTime).getTime();
    const end = getDateWithTimezone(endTime).getTime();
    const now = getDateWithTimezone(new Date().toISOString()).getTime();

    if (now >= start && now <= end) {
      setIsActive(true);

      const intervalId = setInterval(() => {
        const updatedTime = calculateTimeRemaining();
        if (updatedTime.total <= 0) {
          clearInterval(intervalId);
          setIsActive(false);
        }
        setTimeRemaining(updatedTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [startTime, endTime, timezone]);

  if (!isActive) return null;

  return (
    <div className={styles.deal_top_bar}>
      <div className={styles.flex_div}>
        <div className={styles.flex_div_innerleft}>
          <span className={styles.deal_left_text}>
            {" "}
            LABOR DAY SALE <span className={styles.hidden_mobile}>ENDS:</span>
          </span>
        </div>

        <div className={`${styles.flex_div_innerright} ${styles.flex_div}`}>
          <div className={styles["deal-days"]}>
            <div className={styles.d_flex}>
            {timeRemaining.days ? (
              <div className={styles.parent_span}>
                <div className={styles.days_left}>
                  {timeRemaining.days.toString().padStart(2, "0")}
                </div>
                <div className={styles.days_name}>DAYS</div>
                
              </div>
              
            ) : null}
             <span className={styles.dot_seprator} style={{ marginLeft: "4px" }}>:</span>
            </div>
          </div>
        </div>
        <div className={`${styles.flex_div_innerright} ${styles.flex_div}`}>
          <div className={styles["deal-hours"]}>
            <div style={{ display: "inline-block", textAlign: "center" }}>
              <div className={styles.parent_span}>
                <div className={styles.days_left}>
                  {timeRemaining.hours.toString().padStart(2, "0")}
                </div>
                <div className={styles.days_name}>HRS</div>
              </div>
            </div>
            <span className={styles.dot_seprator} style={{ marginLeft: "4px" }}>:</span>
          </div>
        </div>
        <div className={styles["deal-minutes"]}>
        <div className={styles.parent_span}>
        <div className={styles.days_left}>
            {timeRemaining.minutes.toString().padStart(2, "0")}
            
          </div>
          <div className={styles.days_name}>MINS</div>
        </div>
        </div>
        {/* <div
          className={styles["deal-seconds"]}
        >{`${timeRemaining.seconds.toString().padStart(2, "0")} S`}</div> */}
          <Link className={styles.shop_deals} href="/sale">SHOP DEALS</Link>
      </div>
        
    </div>
  );
};

export default Countdown;
