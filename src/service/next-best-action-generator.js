import ActionToHoursMapping from "./action-to-hours-mapping.json";
import database from "./database.json";

// calculate next best action for each claim based on waiting time and corresponding sla.
export const generateNextBestAction = (claimCreatedTime, claimStatus) => {
  // assume current date and time is 2020-08-16 00:00:00 to show different next best actions in the given dataset
  const exceedingHours =
    (new Date("2020-08-16T00:00:00.000Z") -
      new Date(claimCreatedTime) -
      getSLA(claimStatus)) /
    (1000 * 60 * 60);

  // ActionToHoursMapping contains a mapping from a next best action to corresponding range of exceeding hours.
  let NextBestAction = "Did not exceed SLA hours";
  for (const key in ActionToHoursMapping) {
    if (exceedingHours <= ActionToHoursMapping[key]) {
      NextBestAction = key;
      break;
    }
  }
  return NextBestAction;
};

// get sla amount of a specific claim status
const getSLA = (claimStatus) => {
  database.slas.forEach((sla) => {
    if (sla.status === claimStatus) return sla.hours;
  });
  return 0;
};
