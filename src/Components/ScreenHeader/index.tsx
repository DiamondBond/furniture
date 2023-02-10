import React, { PropsWithChildren } from "react";

import styles from "./ScreenHeader.module.scss";

interface IProps extends PropsWithChildren {
  title: string;
  desc?: string;
  right?: React.FC;
}

const ScreenHeader: React.FC<IProps> = (props) => {
  return (
    <div className={styles.Container}>
      <div>
        <h2>{props.title}</h2>
        {props.desc && <span className={styles.Desc}>{props.desc}</span>}
      </div>

      {props.children && (
        <div style={{ marginLeft: "auto" }}>{props.children}</div>
      )}
    </div>
  );
};

export default ScreenHeader;
