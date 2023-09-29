import React, { useEffect, useState } from "react";
import GraphDonutAbsence from "./GraphDonutAbsence";
import GraphDonutStatutCra from "./GraphDonutStatutCra";
import { dataAbs } from "../data/dataAbs";
import { countAbsence } from "../services/countAbsence";
import { countLength } from "../services/countLength";
import { dataUsers } from "../data/dataUsers";
import { countBilledDays } from "../services/countBilledDays";

const Dashboard = () => {
  const [seriesAbs, setSeriesAbs] = useState([]);
  const [soumis, setSoumis] = useState([]);
  const [nonSoumis, setNonSoumis] = useState([]);
  const [billedDays, setBilledDays] = useState([]);

  //Fetch
  const simulateFetchCraMonth = () => {
    const data = dataAbs;
    const counter = countAbsence(data);
    setSeriesAbs(Object.values(counter));

    const soumisLength = countLength(data);
    const arraySoumis = [soumisLength];
    setSoumis(arraySoumis);

    const billedDaysLength = countBilledDays(data);
    setBilledDays(billedDaysLength);
  };

  //Fetch
  const simulateFetchAllCollab = () => {
    const data = dataUsers;
    const nonSoumisLength = countLength(data);
    const arrayNonSoumis = [nonSoumisLength];
    setNonSoumis(arrayNonSoumis);
  };

  const sousTractionLength = nonSoumis - soumis;
  const nonSoumisLength = [sousTractionLength];
  const seriesCra = [...nonSoumisLength, ...soumis];

  useEffect(() => {
    simulateFetchCraMonth();
    simulateFetchAllCollab();
  }, []);

  return (
    <div className="container">
      <div className="w100 dashboard gp20">
        <div className="col gp20 jcsb left">
          <div className="graph-cra flex jcs aic ">
            <GraphDonutStatutCra seriesCra={seriesCra} />
          </div>

          <div className="billed-days col jcs aic ">
            <p>Nombre de jours facturé</p>
            <p>{billedDays}</p>
          </div>
        </div>

        <div className="flex jcs aic graph-abs right">
          <GraphDonutAbsence seriesAbs={seriesAbs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
