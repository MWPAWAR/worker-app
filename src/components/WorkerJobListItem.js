import { Link } from 'react-router-dom';

const WorkerJobListItem = ({ item }) => (
  <div>
    <Link to={`/worker-jobs/${item.jobId}`} state={{ jobItem: item }}>
      {item.jobTitle.name}
    </Link>
  </div>
);

export default WorkerJobListItem;
