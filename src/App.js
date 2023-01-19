import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from 'antd';
import WorkerJobList from './components/WorkerJobList/WorkerJobList';
import WorkerJobDetails from './components/WorkerJobDetails/WorkerJobDetails';
import WorkerProfile from './components/WorkerProfile/WorkerProfile';
import WorkerAppHeader from './components/WorkerAppHeader';
import styles from './App.module.css';

const { Header, Content } = Layout;

const App = () => (
  <Layout className={styles.layoutContainer}>
    <Header className={styles.header}><WorkerAppHeader /></Header>
    <Content className={styles.contentContainer}>
      <Routes>
        <Route path="/profile" element={<WorkerProfile />} />
        <Route path="/workerJobs" element={<WorkerJobList />} />
        <Route path="/workerJobs/:jobId" element={<WorkerJobDetails />} />
        <Route path="/" element={<Navigate to="/workerJobs" />} />
      </Routes>
    </Content>
  </Layout>
);

export default App;
