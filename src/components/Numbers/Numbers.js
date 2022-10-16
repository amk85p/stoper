

import styles from './Numbers.module.scss';

const Numbers = (props) => {
  return <div className={styles.numbers}>{props.children}</div>;
};

export default Numbers;
