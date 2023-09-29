import { dataAbs } from "../data/dataAbs";
import { dataUsers } from "../data/dataUsers";
import { countAbsence } from "../services/countAbsence";
import { countTotalAbsence } from "../services/countTotalAbsence";
import { countLength } from "../services/countLength";
import { countBilledDays } from "../services/countBilledDays";

describe("We check the list dataAbs", () => {
  it("Render the number of RTT Days", () => {
    //Given

    // When
    const absenceTotalRtt = countAbsence(dataAbs);

    //Then
    expect(absenceTotalRtt.rtts).toBe(6);
  });
  it("Render the number of paid leave of days", () => {
    const absenceTotalConges = countAbsence(dataAbs);
    expect(absenceTotalConges.conges).toBe(5);
  });
  it("Render the number of sick days", () => {
    const absenceTotalMaladie = countAbsence(dataAbs);
    expect(absenceTotalMaladie.maladie).toBe(25);
  });
  it("Render the number of day for leave Exceptional", () => {
    const absenceTotalExceptionnelle = countAbsence(dataAbs);
    expect(absenceTotalExceptionnelle.exceptionnelle).toBe(1);
  });
  it("Render the number of day in formation", () => {
    const absenceTotalFormation = countAbsence(dataAbs);
    expect(absenceTotalFormation.formation).toBe(3);
  });
  it("Render the number of day unpaid leave", () => {
    const absenceTotalCongesSansSolde = countAbsence(dataAbs);
    expect(absenceTotalCongesSansSolde.congesSansSolde).toBe(3);
  });
  it("Render the number total of absence", () => {
    const absenceTotal = countTotalAbsence(dataAbs);
    expect(absenceTotal).toBe(86);
  });
});

describe("We check the list dataUsers", () => {
  it("Count the number of users who send there CRA", () => {
    const countCra = countLength(dataUsers);
    expect(countCra).toBe(5);
  });
  it("Count all users", () => {
    const countUsers = countLength(dataUsers);
    const countCra = countLength(dataAbs);
    const countTotal = countUsers + countCra
    expect(countTotal).toBe(8)
  });
});

describe('Count the total billed days inside dataAbs', () => {
  it('Render the total of billed Days', () => {
    const totalBilledDays = countBilledDays(dataAbs)
    expect(totalBilledDays).toBe(20)
  })
})



