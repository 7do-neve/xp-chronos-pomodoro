import styles from './styles.module.css';

type CopntainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: CopntainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
