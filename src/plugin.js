import {Chart} from "chart.js";

const plugin = {
  id: "doughnutInnerText",
  beforeDraw: chart => {

    if (!chart.options.innerText) {
      return;
    }
    const chartArea = chart.chartArea;
    const top = chartArea.top;
    const left = chartArea.left;
    const height = chartArea.height;
    const width = chartArea.width;
    const innerText = chart.options.innerText;
    const ctx = chart.ctx;

    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    const textX = Math.round((width - ctx.measureText(innerText).width) / 2 + left);

    const textY = Math.round(height / 2 + top);
    ctx.fillText(innerText, textX, textY);
  }
};

// if the environment is neither amd nor commonjs, register the plugin globally for the samples and tests
export default plugin;
if (
  !(typeof define === "function" && define.amd) &&
  !(typeof module === "object" && module.exports)
) {
  Chart.pluginService.register(plugin);
}
