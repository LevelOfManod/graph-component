import React from "react";
import Chart from "react-apexcharts";

const GraphDonutStatutCra = ({ seriesCra }) => {
  return (
    <div className="cra-donut">
      <Chart
        type="donut"
        series={seriesCra}
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
          colors: ["#D38430", "#82B04A"],
          labels: ["Incomplet", "Complet"],
          title: {},
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
                    fontSize: "32px",
                    fontFamily: "Montserrat, Arial, sans-serif",
                    color: undefined,
                    offsetY: 10,
                  },
                  total: {
                    show: true,
                    label: "CRA",
                    fontSize: "20px",
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 600,
                    color: "#4F5252",
                  },
                },
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
                return val + " CRA";
              },
            },
          },

          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: "bottom",
            horizontalAlign: "center",
            floating: false,
            fontSize: "14px",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontWeight: 500,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            customLegendItems: [],
            offsetX: 0,
            offsetY: 0,
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
              offsetY: 0,
            },
            itemMargin: {
              horizontal: 30,
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

export default GraphDonutStatutCra;
