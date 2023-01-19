import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import WorkerJobListItem from './WorkerJobListItem';
import styles from './styles.module.css';

const WorkerJobList = inject('jobMatches')(observer(({ jobMatches }) => {
  useEffect(() => {
    jobMatches.fetchJobMatches();
  }, []);

  if (jobMatches.showLoader) return <div>Loader</div>;

  if (jobMatches.jobList.length === 0) return 'No jobs present right now';

  return (
    <div className={styles.workerJobList}>
      {jobMatches.jobList.map((item) => <WorkerJobListItem item={item} />)}
    </div>
  );

}));

export default WorkerJobList;
