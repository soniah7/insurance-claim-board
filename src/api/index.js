import claimList from "../db.json";

export const reqClaimList = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      resolve(claimList);
    } else {
      reject("failed to load claim list. try again.");
    }
  });
};
