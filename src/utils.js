import moment from 'moment';

export const getWagesInDollersAndCents = (wagesInCents) => `${'$' + (wagesInCents / 100)}`;

export const getMiles = (miles) => miles.toFixed(1);

export const getMilesTextForLocation = (miles) => `${miles.toFixed(2)} miles from your job search location`;

export const getShiftTime = (shift) => {
  const { startDate, endDate } = shift;
  const startDateLabel = moment(startDate).format('MMM d, h:mma');
  const endDateLabel = moment(endDate).format('MMM d, h:mma z');
  return `${startDateLabel} - ${endDateLabel}`;
}

export const getFormattedPhoneNumber = (phoneNumber = '') => {
  const number = phoneNumber.replace(/[^\d]/g, "");
  if (number && number.length === 10) {
    //reformat and return phone number
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  return '';
};

export const getGoogleMapsLink = (jobItem) => {
  const location = jobItem?.company?.address?.formattedAddress;
  if (location) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  }
  
  return '';
};
