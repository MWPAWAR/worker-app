import { observable } from 'mobx';

const userProfile = observable({
  data: null,
  apiFailure: false,
  showLoader: true,

  fetchUserProfile() {
    this.showLoader = true;
    this.apiFailure = false;
    fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile')
      .then((response) => response.json())
      .then((response) => {
        this.showLoader = false;
        this.data = response;
      })
      .catch(() => {
        this.apiFailure = true;
        this.showLoader = false;
      })
  },
});

export default userProfile;
