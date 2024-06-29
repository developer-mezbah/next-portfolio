import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({title, number}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span className={styles.positive}> 15% </span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;