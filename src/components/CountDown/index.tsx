import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function CountDown() {
  // Alterado de [state] para { state }
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
