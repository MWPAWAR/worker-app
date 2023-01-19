import { Button} from 'antd';
import styles from './WorkerJobDetails.module.css';

const ButtonFooter = ({ jobAcceptance, jobItem }) => {
  const handleAcceptClick = () => {
    jobAcceptance.submitAccept(jobItem.jobId);
  };

  const handleRejectClick = () => {
    jobAcceptance.submitReject(jobItem.jobId);
  };

  return (
    <div className={styles.buttonContainer}>
      <Button size='large' className={styles.secondaryBtn} onClick={handleRejectClick}>No thanks</Button>
      <Button size='large' className={styles.primaryBtn} type="primary" onClick={handleAcceptClick}>I'll take it</Button>
    </div>
  );
};

export default ButtonFooter;
