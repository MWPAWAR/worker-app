import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './WorkerJobDetails.module.css';

const AcceptSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.resultContainer}>
      <Result
        status="success"
        title="You've accepted this job!"
      />
      <Button size='large' className={styles.primaryBtn} type="primary" onClick={() => navigate('/workerJobs')}>Done</Button>
    </div>
  );
};

export default AcceptSuccess;
