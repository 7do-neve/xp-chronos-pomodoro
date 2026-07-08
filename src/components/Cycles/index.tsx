import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <samp>Ciclos:</samp>
      <div className={styles.cycleDots}>
        <samp className={`${styles.cycleDot} ${styles.workTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.shortBreakTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.workTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.shortBreakTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.workTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.shortBreakTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.workTime}`}></samp>
        <samp className={`${styles.cycleDot} ${styles.longBreakTime}`}></samp>
      </div>
    </div>
  );
}
