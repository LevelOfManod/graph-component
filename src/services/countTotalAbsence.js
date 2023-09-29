export const countTotalAbsence = (data) => {
  let totalAbsence = 0;

  for (let user of data) {
    totalAbsence += user._absences.length
  }

  return totalAbsence
};
