import { Link } from 'react-router-dom';
import { Card } from 'antd';
import styles from './WorkerJobList.module.css';

const { Meta } = Card;

const WorkerJobListItem = ({ item }) => (
  <Link to={`/workerJobs/${item.jobId}`} state={{ jobItem: item }}>
    <Card
      className={styles.workerJobListItem}
      hoverable
      cover={<img alt={item.jobTitle.name} src={item.jobTitle.imageUrl} />}
    >
      <Meta title={item.jobTitle.name} description={item.company.name} />
    </Card>
  </Link>
);

export default WorkerJobListItem;
