'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import footerStyles from './styles.module.css';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-12`}
      >
        <div
          className="flex items-center justify-between flex-wrap gap-5"
        >
          <h4 className={`${footerStyles.footerTitle}`}>
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className={footerStyles.footerButton}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className={footerStyles.footerButtonText}>
              ENTER METAVERSE
            </span>
          </button>
        </div>

        <div
          className="flex flex-col"
        >
          <div className={`mb-[50px] ${footerStyles.footerLine}`} />

          <div
            className="flex items-center justify-between flex-wrap gap-4"
          >
            <h4 className="font-extrabold text-[24px] text-white">
              Metaversus
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - {currentYear} Metaversus. All rights reserved.
            </p>
            <div className="flex gap-8">
              {socials.map(({ name, url }) => (
                <img
                  key={name}
                  src={url}
                  alt={name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
