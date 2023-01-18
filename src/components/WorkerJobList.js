import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import WorkerJobListItem from './WorkerJobListItem';

const WorkerJobList = inject('jobMatches')(observer(({ jobMatches }) => {
  useEffect(() => {
    jobMatches.fetchJobMatches();
  }, []);

  if (jobMatches.showLoader) return <div>Loader</div>;

  if (jobMatches.jobList.length === 0) return 'No jobs present right now';

  return (
    <div>
      {jobMatches.jobList.map((item) => <WorkerJobListItem item={item} />)}
    </div>
  );

}));

export default WorkerJobList;
