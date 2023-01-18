import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';

const WorkerProfile = inject('userProfile')(observer(({ userProfile }) => {
  useEffect(() => {
    userProfile.fetchUserProfile();
  }, []);

  if (userProfile.showLoader) return <div>Loader</div>;

  if (userProfile.apiFailure) return <div>Failed to load worker profile</div>;

  return (
    <div>
      <div>{userProfile.data.firstName}</div>
      <div>{userProfile.data.lastName}</div>
      <div>{userProfile.data.email}</div>
    </div>
  );
}));

export default WorkerProfile;
