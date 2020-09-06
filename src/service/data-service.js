import database from "./database.json";

export const reqClaimList = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      resolve(database.claims);
    } else {
      reject("failed to load claim list. try again.");
    }
  });
};
