import { inject, observer } from 'mobx-react';
import { Navigate, useLocation } from 'react-router-dom';

const WorkerJobList = inject('jobAcceptance')(observer(({ jobAcceptance }) => {
  const location = useLocation();
  const { jobItem } = location.state || {};

  if (!jobItem) <Navigate to='/worker-jobs' />;

  if (jobAcceptance.showLoader) return <div>Loader</div>;

  const handleAcceptClick = () => {
    jobAcceptance.submitAccept(jobItem.jobId);
  };

  const handleRejectClick = () => {
    jobAcceptance.submitReject(jobItem.jobId);
  };

  return (
    <div>
      <div>{jobItem.jobTitle.name}</div>
      <button onClick={handleAcceptClick}>I'll take it</button>
      <button onClick={handleRejectClick}>No thanks</button>
    </div>
  );

}));

export default WorkerJobList;
