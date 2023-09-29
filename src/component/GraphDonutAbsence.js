import React from "react";
import Chart from "react-apexcharts";

const GraphDonutAbsence = ({ seriesAbs }) => {
  return (
    <div className="abs-donut">
      <Chart
        type="donut"
        series={seriesAbs}
        options={{
          chart: {
            width: "100%",
            height: 400,
            type: "donut",
          },
          stroke: {
            width: 5,
            colors: "#FFFCF8",
          },
          labels: [
            "Congés payés",
            "RTT",
            "Congés sans solde",
            "Congés exceptionnels",
            "Arrêt maladie",
            "En Formation",
          ],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    labels: true,
                    fontSize: "20px",
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 600,
                    color: "#4F5252",
                  },
                  value: {
                    show: true,
                    fontSize: "40px",
                    fontFamily: "Montserrat, Arial, sans-serif",
                    color: undefined,
                    offsetY: 26,
                  },
                  total: {
                    show: true,
                    label: "Absences",
                    fontSize: "20px",
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 600,
                    color: "#4F5252",
                  },
                },
                borderRadius: "50%",
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: function (val) {
                return val + " jours";
              },
            },
          },
          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: "right",
            horizontalAlign: "center",
            floating: false,
            fontSize: "18px",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontWeight: 500,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: -12,
            offsetY: 15,
            labels: {
              colors: undefined,
              useSeriesColors: false,
            },
            markers: {
              width: 15,
              height: 15,
              strokeWidth: 0,
              strokeColor: "#fff",
              fillColors: undefined,
              radius: 12,
              customHTML: undefined,
              onClick: undefined,
              offsetX: -5,
              offsetY: 1,
            },
            itemMargin: {
              horizontal: 5,
              vertical: 15,
            },
            onItemClick: {
              toggleDataSeries: true,
            },
            onItemHover: {
              highlightDataSeries: true,
            },
          },
          dataLabels: {
            enabled: true,
            formatter: function (value, opts) {
              return opts.w.config.series[opts.seriesIndex];
            },
            style: {
              fontSize: "20px",
              fontWeight: 400,
            },
          },
        }}
      />
    </div>
  );
};

export default GraphDonutAbsence;
