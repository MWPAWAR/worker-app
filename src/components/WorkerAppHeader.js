import { Fragment } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo';
import logoStyles from '../assets/logo.module.css';

const WorkerAppHeader = ({ item }) => (
  <Fragment>
    {/* <div><Logo /></div> */}
    <Menu
      theme="dark"
      mode="horizontal"
      items={[{
        key: 'tempKey',
        label: `Profile`,
      }]}
    />
  </Fragment>
);

export default WorkerAppHeader;
