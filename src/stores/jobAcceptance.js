import { observable } from 'mobx';

const jobAcceptance = observable({
  apiAcceptFailure: false,
  apiAcceptSuccess: false,
  apiRejectFailure: false,
  apiRejectSuccess: false,
  showLoader: false,

  submitAccept(jobId) {
    this.showLoader = true;
    this.apiAcceptFailure = false;
    this.apiAcceptSuccess = false;
    fetch(`https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/${jobId}/accept`)
      .then((response) => response.json())
      .then(() => {
        this.showLoader = false;
        this.apiAcceptSuccess = true;
      })
      .catch(() => {
        this.apiAcceptFailure = true;
        this.showLoader = false;
      })
  },

  submitReject(jobId) {
    this.showLoader = true;
    this.apiRejectSuccess = false;
    this.apiRejectFailure = false;
    fetch(`https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/${jobId}/reject`)
      .then((response) => response.json())
      .then(() => {
        this.showLoader = false;
        this.apiRejectSuccess = true;
      })
      .catch(() => {
        this.apiRejectFailure = true;
        this.showLoader = false;
      })
  }
});

export default jobAcceptance;
