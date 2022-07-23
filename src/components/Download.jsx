import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite} `}>
      <div className={`${styles.subSection} flex-col text-center `}>
        <div className="">
          <h1 className={`${styles.h1Text} ${styles.blackText} `}>
            {" "}
            Download the Source Code{" "}
          </h1>
          <p className={`${styles.pText} ${styles.blackText} `}>
            Get The Full source code on GitHub
          </p>
          <button onClick={() => window.open(`https://github.com/ghalitsar-coder/landing-native-nft`)} className={styles.btnPrimary}>Source Code</button>
          <div className={styles.flexCenter}>
            <img
              src={assets.scene}
              alt="download_png"
              className={styles.fullImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
