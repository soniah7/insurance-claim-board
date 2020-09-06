import Database from "./database.json";

export const reqClaimList = () => {
  return new Promise((resolve, reject) => {
    //simulate 10% chance of failure of requesting data
    if (Math.random() < 0.9) {
      resolve(Database.claims);
    } else {
      reject("failed to load claim list. try again.");
    }
  });
};
