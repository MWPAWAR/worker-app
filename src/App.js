import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import WorkerJobList from './components/WorkerJobList';
import WorkerJobDetails from './components/WorkerJobDetails';
import WorkerProfile from './components/WorkerProfile';
import WorkerAppHeader from './components/WorkerAppHeader';
import styles from './App.module.css';

const { Header, Content } = Layout;

const App = () => (
  <Layout className={styles.layoutContainer}>
    <Header className={styles.header}><WorkerAppHeader /></Header>
    <Content className={styles.contentContainer}>
      <Routes>
        <Route path="/profile" element={<WorkerProfile />} />
        <Route path="/worker-jobs" element={<WorkerJobList />} />
        <Route path="/worker-jobs/:jobId" element={<WorkerJobDetails />} />
      </Routes>
    </Content>
  </Layout>
);

export default App;
