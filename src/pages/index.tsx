import Login from '../components/Login';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <Login />
      </div>
    </div>
  );
}
