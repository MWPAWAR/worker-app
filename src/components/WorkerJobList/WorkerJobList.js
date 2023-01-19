import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import WorkerJobListItem from './WorkerJobListItem';
import styles from './WorkerJobList.module.css';

const WorkerJobList = inject('jobMatches', 'jobAcceptance')(observer(({ jobMatches, jobAcceptance }) => {
  useEffect(() => {
    jobMatches.fetchJobMatches();
    jobAcceptance.reset();
  }, []);

  if (jobMatches.showLoader) return <div className={styles.loaderContainer}><SyncOutlined spin /></div>;

  if (jobMatches.jobList.length === 0) return 'No jobs present right now';

  return (
    <div className={styles.workerJobList}>
      {jobMatches.jobList.map((item) => <WorkerJobListItem item={item} />)}
    </div>
  );

}));

export default WorkerJobList;
