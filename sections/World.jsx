'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyle='text-center' />
      <TitleText title={<>
        Track friends around you and invite them to play together in the same world
      </>}
        textStyle="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[60px] flex w-full h-[550px"
      >
        <img
          src="/map.png"
          alt="map"
          className='w-full h-full object-cover'
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>


        <div className="lg:block hidden absolute top-[190px] left-[220px] 
        w-[217px] h-[167px] rounded-[24px] bg-[#5d6680]">
          <img
            src="bgpinkblur.png"
            alt="bgpinkblur"
            className="-z-50 absolute h-[180%] w-full object-content -top-[70px]"
          />
          <img
            src="maskgroup1.png"
            alt="maskgroups1"
            className="w-[95%] h-[95%] mx-auto mt-1 z-10"
          />
          <div
            className="flex absolute bottom-14 left-3 items-center"
          >
            <img
              src="ppl1.png"
              alt="ppl1"
              className="z-20 ml-[10px]"
            />
            <img
              src="ppl2.png"
              alt="ppl2"
              className="z-10 relative right-3"
            />
            <img
              src="ppl3.png"
              alt="ppl3"
              className="z-0 relative right-6"
            />
            <p className="text-white -ml-4 text-[12px] leading-[15.12px]">
              + 264 has joined
            </p>
          </div>
          <p className="relative flex bottom-10 font-semibold text-[18px] ml-6 justify-start text-white mb-6">
            The Upside Town
          </p>
        </div>

        <div className="lg:block hidden absolute top-[45px] right-[205px] 
        w-[217px] h-[167px] rounded-[24px] bg-[#5d6680]">
          <img
            src="bgblueblur.png"
            alt="bgblueblur"
            className="-z-50 absolute h-[180%] w-full object-content -top-[70px]"
          />
          <img
            src="maskgroup2.png"
            alt="maskgroups2"
            className="w-[95%] h-[95%] mx-auto mt-1 z-10"
          />
          <div
            className="flex absolute bottom-14 left-3 items-center"
          >
            <img
              src="ppl1.png"
              alt="ppl1"
              className="z-20 ml-[10px]"
            />
            <img
              src="ppl2.png"
              alt="ppl2"
              className="z-10 relative right-3"
            />
            <img
              src="ppl3.png"
              alt="ppl3"
              className="z-0 relative right-6"
            />
            <p className="text-white -ml-4 text-[12px] leading-[15.12px]">
              + 264 has joined
            </p>
          </div>
          <p className="relative flex bottom-10 font-semibold text-[18px] ml-6 justify-start text-white mb-6">
            Hawkins Labs
          </p>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
