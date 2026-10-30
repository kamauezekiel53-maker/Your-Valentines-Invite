'use client';

import { useEffect, useState } from 'react';
import loveConfig from '@/config/loveConfig';
import styles from './TimeCounter.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft | null => {
      const startDate = new Date(loveConfig.relationshipStart);
      if (Number.isNaN(startDate.getTime())) return null;

      const difference = Date.now() - startDate.getTime();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section className={styles.counterSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>⏰</div>
          <h2 className={styles.title}>Time We've Shared</h2>
          <p className={styles.subtitle}>Every second with you is a treasure</p>

          {timeLeft ? (
            <>
              <div className={styles.counterGrid}>
                <div className={styles.timeBox}>
                  <div className={styles.timeValue}>{timeLeft.days}</div>
                  <div className={styles.timeLabel}>Days</div>
                  <div className={styles.timeIcon}>📅</div>
                </div>
                <div className={styles.timeBox}>
                  <div className={styles.timeValue}>{timeLeft.hours}</div>
                  <div className={styles.timeLabel}>Hours</div>
                  <div className={styles.timeIcon}>🕐</div>
                </div>
                <div className={styles.timeBox}>
                  <div className={styles.timeValue}>{timeLeft.minutes}</div>
                  <div className={styles.timeLabel}>Minutes</div>
                  <div className={styles.timeIcon}>⏱️</div>
                </div>
                <div className={styles.timeBox}>
                  <div className={styles.timeValue}>{timeLeft.seconds}</div>
                  <div className={styles.timeLabel}>Seconds</div>
                  <div className={styles.timeIcon}>⚡</div>
                </div>
              </div>
              <p className={styles.message}>...and counting! Here's to infinity more moments together💕</p>
            </>
          ) : (
            <p className={styles.message}>
              Add your relationship start date in the configuration to activate this counter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
