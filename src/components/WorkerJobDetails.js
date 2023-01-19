import { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { Button, Card, Divider } from 'antd';
import { RightOutlined, CalendarFilled, EnvironmentFilled, ToolFilled, UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { getGoogleMapsLink, getMilesTextForLocation, getMiles, getShiftTime, getWagesInDollersAndCents } from '../utils';

const { Meta } = Card;

const WorkerJobList = inject('jobAcceptance', 'jobMatches')(observer(({ jobAcceptance, jobMatches }) => {
  let { jobId } = useParams();
  const jobItem = jobMatches.jobList.find(match => match.jobId === jobId);

  if (!jobItem) return <Navigate to='/worker-jobs' />;

  if (jobAcceptance.showLoader) return <div>Loader</div>;

  const handleAcceptClick = () => {
    jobAcceptance.submitAccept(jobItem.jobId);
  };

  const openLocationInMaps = () => {
    const gMapsLink = getGoogleMapsLink(jobItem);
    if (gMapsLink) window.open(gMapsLink, '_blank');
  }

  const handleRejectClick = () => {
    jobAcceptance.submitReject(jobItem.jobId);
  };

  return (
    <div className={styles.jobDetails}>
      <Link to="/worker-jobs"><Button type="link">{'<< Back to matching jobs'}</Button></Link>
      <Card
        cover={<img alt={jobItem.jobTitle.name} src={jobItem.jobTitle.imageUrl} />}
      >
        <Meta className={styles.jobDetailsCard} title={jobItem.jobTitle.name} description={jobItem.company.name} />
        <div className={styles.distanceAndHourlyRateContainer}>
          <div className={styles.distanceAndHourlyRateLabels}>
            <h4 className={styles.distanceLabel}>{'Distance'}</h4>
            <h4 className={styles.hourlyRateLabel}>{'Hourly rate'}</h4>
          </div>
          <div className={styles.distanceAndHourlyRateValues}>
            <div className={styles.distanceValue}>{`${getMiles(jobItem.milesToTravel)} miles`}</div>
            <div className={styles.hourlyRateValue}>{getWagesInDollersAndCents(jobItem.wagePerHourInCents)}</div>
          </div>
        </div>
        <div className={styles.jobDetailsContainer}>
          {jobItem.shifts && jobItem.shifts.length ? (
            <Fragment>
              <div className={styles.iconAndContent}>
                <div className={styles.rowIcon}>
                  <CalendarFilled style={{ fontSize: 25 }} />
                </div>
                <div className={styles.shiftDates}>
                  <h3>Shift dates</h3>
                  <Fragment>
                    {jobItem.shifts.map((shift) => <div>{getShiftTime(shift)}</div>)}
                  </Fragment>
                </div>
              </div>
              <Divider />
            </Fragment>
          ) : <Fragment />}
          <div className={styles.iconAndContent}>
            <div className={styles.rowIcon}>
              <EnvironmentFilled style={{ fontSize: 25 }} />
            </div>
            <div className={styles.location}>
              <h3>Location</h3>
              <p>{jobItem.company.address.formattedAddress}</p>
              <p>{getMilesTextForLocation(jobItem.milesToTravel)}</p>
            </div>
            <div className={styles.rowIcon} onClick={openLocationInMaps}>
              <RightOutlined style={{ fontSize: 25 }} />
            </div>
          </div>
          <Divider />
          {jobItem.requirements && jobItem.requirements.length ? (
            <Fragment>
            <div className={styles.iconAndContent}>
              <div className={styles.rowIcon}>
                <ToolFilled style={{ fontSize: 25 }} />
              </div>          
              <div className={styles.requirements}>
                <h3>Requirements</h3>
                <ul className={styles.requirementUlList}>
                  {jobItem.requirements.map((requirement) => (<li>{requirement}</li>))}
                </ul>
              </div>
            </div>
            <Divider />
            </Fragment>) : <Fragment />}
          <div className={styles.iconAndContent}>
            <div className={styles.rowIcon}>
              <UserOutlined style={{ fontSize: 25 }} />
            </div>
            <div className={styles.reportToDescription}>
              <h3>Report to</h3>
              <p>{jobItem.company.reportTo.name} {jobItem.company.reportTo.phone}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button size='large' className={styles.secondaryBtn} onClick={handleRejectClick}>No thanks</Button>
          <Button size='large' className={styles.primaryBtn} type="primary" onClick={handleAcceptClick}>I'll take it</Button>
        </div>
      </Card>
    </div>
  );
}));

export default WorkerJobList;
