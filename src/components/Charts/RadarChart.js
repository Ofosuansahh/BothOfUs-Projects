import { Radar } from 'vue-chartjs';
// const { reactiveProp } = mixins

export default {
  name: 'radar-chart',
  extends: Radar,
  // mixins: [reactiveProp],
  props: ["labels", "data", "options", "colors"],
  mounted() {
    this.renderRadarChart();
  },
  computed: {
    chartData: function () {
      return this.data;
    },
    chartLabel: function () {
      return this.labels;
    },
    chartOptions: function () {
      return this.options;
    },
    colorOptions: function () {
      return this.colors;
    }
  },
  methods: {
    renderRadarChart: function () {
      this.renderChart(
          {
            labels: this.chartLabel,
            datasets: [
              {
                data: this.chartData,
                backgroundColor: this.colorOptions.background,
                borderColor: this.colorOptions.border,
                fill: false,
                pointRadius: 0,
              }
            ]
          },
          this.chartOptions
      );
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderRadarChart();
    }
  }
};
