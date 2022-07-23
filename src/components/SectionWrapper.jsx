import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section}  ${banner} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } `}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4 gap-y-4 xl:gap-y-0 `}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
          ${reverse ? styles.blackText : styles.whiteText}

          `}
        >
          <h1
            className={` 
             
            ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && <Button assetUrl={assets.expo} link="something" />}
        </div>

        <div className={`flex-1 ${styles.flexCenter} `}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
            ${styles.sectionImg}
            ${reverse ? " fadeLeftMini" : " fadeRightMini"}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
