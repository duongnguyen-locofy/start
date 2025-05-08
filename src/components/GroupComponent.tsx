import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-50@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <div className={styles.title}>Title</div>
            <div className={styles.exploreNow}>Explore Now!</div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
