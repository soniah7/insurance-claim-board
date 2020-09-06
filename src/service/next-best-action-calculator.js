import NextBestActionMapping from "./next-best-action-mapping.json";
import database from "./database.json";

export const calculateNextBestAction = (claim) => {
  // assume current date and time is 2020-08-16 00:00:00 to show different next best actions in the given dataset
  const exceedingHours =
    (new Date("2020-08-16T00:00:00.000Z") -
      new Date(claim.createdAt) -
      getSLA(claim.status)) /
    (1000 * 60 * 60);

  // NextBestActionMapping contains a mapping from next best action to exceeding hours.
  let NextBestAction = "Did not exceed SLA hours";
  for (const key in NextBestActionMapping) {
    if (exceedingHours <= NextBestActionMapping[key]) {
      NextBestAction = key;
      break;
    }
  }
  return NextBestAction;
};

const getSLA = (status) => {
  database.slas.forEach((sla) => {
    if (sla.status === status) return sla.hours;
  });
  return 0;
};
