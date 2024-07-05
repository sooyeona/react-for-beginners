import { Link } from "react-router-dom";
import styles from "../css/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
