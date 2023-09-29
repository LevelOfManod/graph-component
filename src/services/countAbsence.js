export const countAbsence = (users) => {
  let countRtt = 0;
  let countConges = 0;
  let countMaladie = 0;
  let countExceptionnelle = 0;
  let countFormation = 0;
  let countCongesSansSolde = 0;

  for (let user of users) {
    for (let absence of user._absences) {
      if (absence.raison === "RTT") {
        countRtt++;
      } else if (absence.raison === "Conges") {
        countConges++;
      } else if (absence.raison === "Maladie") {
        countMaladie++;
      } else if (absence.raison === "Exceptionnelle") {
        countExceptionnelle++;
      } else if (absence.raison === "Formation") {
        countFormation++;
      } else if (absence.raison === "Conges sans solde") {
        countCongesSansSolde++;
      }
    }
  }

  return {
    rtts: countRtt / 2,
    conges: countConges / 2,
    maladie: countMaladie / 2,
    exceptionnelle: countExceptionnelle / 2,
    formation: countFormation / 2,
    congesSansSolde: countCongesSansSolde / 2,
  };
};
