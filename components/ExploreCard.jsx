'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, handleClick, active }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`
    relative
    ${active === id ? 'lg:flex-[3.5] flex-[10]}' : 'lg:flex-[0.5] flex-[2]'}
    flex
    items-center
    justify-center
    lg:min-w-[170px]
    min-w-[100px]
    lg:h-[700px]
    h-[250px]
    transition-[flex]
    duration-[0.7s]
    ease-out-flex
    cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3
        className="font-semibold sm:text-[26px] text-[18pxtext-white absolute z-0 lg:bottom-20lg:rotate-[-90deg]lg:origin-[0,0]"
      >
        {title}
      </h3>
    ) : (
      <div className="
      absolute bottom-0 lg:p-8 p-4 justify-start w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
      >
        <div className={`
        ${styles.flexCenter}
        lg:w-[60px]
        lg:h-[60px]
        w-[40px]
        h-[40px]
        rounded-[24px]
        glassmorphism
        mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p
          className="
          font-normal
          text-[16px]
          leading-[20.16px]
          text-white
          uppercase"
        >
          Enter Metaverse
        </p>
        <h2
          className="
          mt-[24px]
          font-semibold
          sm:text-[32px]
          text-[24px]
          text-white"
        >
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
