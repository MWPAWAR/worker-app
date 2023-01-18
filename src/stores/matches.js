import { observable } from 'mobx';

const jobMatches = observable({
  jobList: [],
  apiFailure: false,
  apiSuccess: false,
  showLoader: true,

  fetchJobMatches() {
    this.showLoader = true;
    this.apiFailure = false;
    fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')
      .then((response) => response.json())
      .then((response) => {
        this.showLoader = false;
        this.jobList = response;
      })
      .catch(() => {
        this.apiFailure = true;
        this.showLoader = false;
      })
  },
});

export default jobMatches;
