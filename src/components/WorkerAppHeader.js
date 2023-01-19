import { Fragment } from 'react';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import headerStyles from './WorkerAppHeader.module.css';

const MENU_KEYS = {
  workerJobs: 'workerJobs',
  profile: 'profile',
};

const WorkerAppHeader = () => {
  const navigate = useNavigate();
  const route = window.location.pathname.replace('/', '');
  const defaultSelectedKeys = [];

  if (route === MENU_KEYS.workerJobs) defaultSelectedKeys.push(MENU_KEYS.workerJobs);
  else if (route === MENU_KEYS.profile) defaultSelectedKeys.push(MENU_KEYS.profile);

  return (
    <Fragment>
      <Link to="/workerJobs"><div className={headerStyles.logo}>SwipeJobs</div></Link>
      <Menu
        theme="dark"
        defaultSelectedKeys={defaultSelectedKeys}
        className={headerStyles.navMenu}
        mode="horizontal"
        items={[{
          key: 'workerJobs',
          label: 'Jobs',
          className: 'navItem',
          onClick: () => navigate('/workerJobs')
        }, {
          key: 'profile',
          label: `Profile`,
          className: 'navItem',
          onClick: () => navigate('/profile')
        }]}
      />
    </Fragment>
  );
};

export default WorkerAppHeader;
