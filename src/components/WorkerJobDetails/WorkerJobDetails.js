import { inject, observer } from 'mobx-react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { getGoogleMapsLink } from '../../utils';
import DistanceAndHourlyContent from './DistanceAndHourlyContent';
import styles from './WorkerJobDetails.module.css';
import RejectSuccess from './RejectSuccess';
import AcceptSuccess from './AcceptSuccess';
import DetailsContent from './DetailsContent';
import ButtonFooter from './ButtonFooter';

const { Meta } = Card;

const WorkerJobList = inject('jobAcceptance', 'jobMatches')(observer(({ jobAcceptance, jobMatches }) => {
  let { jobId } = useParams();
  const jobItem = jobMatches.jobList.find(match => match.jobId === jobId);

  if (!jobItem) return <Navigate to='/workerJobs' />;

  if (jobAcceptance.showLoader) return <div className={styles.loaderContainer}><div><SyncOutlined spin /></div></div>;

  if (jobAcceptance.apiAcceptSuccess) return <AcceptSuccess />;

  if (jobAcceptance.apiRejectSuccess) return <RejectSuccess />;

  const openLocationInMaps = () => {
    const gMapsLink = getGoogleMapsLink(jobItem);
    if (gMapsLink) window.open(gMapsLink, '_blank');
  }

  return (
    <div className={styles.jobDetails}>
      <Link to="/workerJobs"><Button type="link">{'<< Back to matching jobs'}</Button></Link>
      <Card
        className="jobDetailsCard"
        cover={<img alt={jobItem.jobTitle.name} src={jobItem.jobTitle.imageUrl} />}
      >
        <Meta title={jobItem.jobTitle.name} description={jobItem.company.name} className="jobDetailsCardMeta" />
        <DistanceAndHourlyContent jobItem={jobItem} />
        <DetailsContent jobItem={jobItem} openLocationInMaps={openLocationInMaps} />
        <ButtonFooter jobAcceptance={jobAcceptance} jobItem={jobItem} />
      </Card>
    </div>
  );
}));

export default WorkerJobList;
