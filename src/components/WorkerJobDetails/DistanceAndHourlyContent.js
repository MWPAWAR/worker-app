import { getMiles, getWagesInDollersAndCents } from '../../utils';
import styles from './WorkerJobDetails.module.css';

const DistanceAndHourlyContent = ({ jobItem }) => (
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
);

export default DistanceAndHourlyContent;
