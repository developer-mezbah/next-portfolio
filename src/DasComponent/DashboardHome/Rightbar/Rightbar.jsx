import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/images/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Availabe now</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <span className={styles.subtitle}>Lorem ipsum dolor sit.</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut
            dolore debitis recusandae molestiae impedit ad tempore aperiam
            aspernatur et.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/images/wepik.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Availabe now</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <span className={styles.subtitle}>Lorem ipsum dolor sit.</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut
            dolore debitis recusandae molestiae impedit ad tempore aperiam
            aspernatur et.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;