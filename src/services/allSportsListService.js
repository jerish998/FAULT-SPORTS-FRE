import { allSports } from "../data/all_sports";

export const getAllSports = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allSports);
    }, 500);
  });
};