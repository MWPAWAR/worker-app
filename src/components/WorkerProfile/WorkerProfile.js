import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { List } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { getFormattedPhoneNumber, getMiles } from '../../utils';
import styles from './WorkerProfile.module.css';

const WorkerProfile = inject('userProfile')(observer(({ userProfile }) => {
  useEffect(() => {
    userProfile.fetchUserProfile();
  }, [userProfile]);

  if (userProfile.showLoader) return <div className={styles.loaderContainer}><SyncOutlined spin /></div>;

  if (userProfile.apiFailure) return <div>Failed to load worker profile</div>;

  const data = [{
    title: 'Email',
    description: userProfile.data.email
  }, {
    title: 'First name',
    description: userProfile.data.firstName
  }, {
    title: 'Last name',
    description: userProfile.data.lastName
  }, {
    title: 'Phone number',
    description: getFormattedPhoneNumber(userProfile.data.phoneNumber)
  }, {
    title: 'Address',
    description: userProfile?.data?.address?.formattedAddress
  }, {
    title: 'Max job distance',
    description: `${getMiles(userProfile?.data?.maxJobDistance)} miles`
  }];

  return (
    <div className={styles.profileContainer}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}));

export default WorkerProfile;
