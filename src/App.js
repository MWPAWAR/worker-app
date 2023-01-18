import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import WorkerJobList from './components/WorkerJobList';
import WorkerJobDetails from './components/WorkerJobDetails';
import WorkerProfile from './components/WorkerProfile';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header>Header</Header>
    <Content>
      <Routes>
        <Route path="/profile" element={<WorkerProfile />} />
        <Route path="/worker-jobs" element={<WorkerJobList />} />
        <Route path="/worker-jobs/:jobId" element={<WorkerJobDetails />} />
      </Routes>
    </Content>
  </Layout>
);

export default App;
