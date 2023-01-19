import { Fragment } from 'react';
import { Divider } from 'antd';
import { RightOutlined, CalendarFilled, EnvironmentFilled, ToolFilled, UserOutlined } from '@ant-design/icons';
import { getMilesTextForLocation, getShiftTime } from '../../utils';
import styles from './WorkerJobDetails.module.css';

const DetailsContent = ({ jobItem, openLocationInMaps }) => (
  <div className={styles.jobDetailsContainer}>
    {jobItem.shifts && jobItem.shifts.length ? (
      <Fragment>
        <div className={styles.iconAndContent}>
          <div className={styles.rowIcon}>
            <CalendarFilled className={styles.icon} />
          </div>
          <div className={styles.shiftDates}>
            <h3>Shift dates</h3>
            <Fragment>
              {jobItem.shifts.map((shift) => <div className={styles.shiftTime}>{getShiftTime(shift)}</div>)}
            </Fragment>
          </div>
        </div>
        <Divider />
      </Fragment>
    ) : <Fragment />}
    <div className={styles.iconAndContent}>
      <div className={styles.rowIcon}>
        <EnvironmentFilled className={styles.icon} />
      </div>
      <div className={styles.location}>
        <h3>Location</h3>
        <p className={styles.locationAddress}>{jobItem.company.address.formattedAddress}</p>
        <p className={styles.locationCopy}>{getMilesTextForLocation(jobItem.milesToTravel)}</p>
      </div>
      <div className={styles.locationArrowIcon} onClick={openLocationInMaps}>
        <RightOutlined className={styles.icon} />
      </div>
    </div>
    <Divider />
    {jobItem.requirements && jobItem.requirements.length ? (
      <Fragment>
      <div className={styles.iconAndContent}>
        <div className={styles.rowIcon}>
          <ToolFilled className={styles.icon} />
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
        <UserOutlined className={styles.icon} />
      </div>
      <div className={styles.reportToDescription}>
        <h3>Report to</h3>
        <p>{jobItem.company.reportTo.name} {jobItem.company.reportTo.phone}</p>
      </div>
    </div>
  </div>
);

export default DetailsContent;
