
const plugin = {
  id: "doughnutInnerText",
  beforeDraw: chart => {

    if (!chart.options.centerText) {
      return;
    }
    const chartArea = chart.chartArea;
    const top = chartArea.top;
    const left = chartArea.left;
    const height = chartArea.height;
    const width = chartArea.width;
    const centerText = chart.options.centerText;
    const ctx = chart.ctx;

    let fontSize = (height / 114).toFixed(2);
    if (centerText.fontSizeAdjust) {
      fontSize = fontSize * (1 + centerText.fontSizeAdjust);
    }
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    const textX = Math.round((width - ctx.measureText(centerText.value).width) / 2 + left);

    const textY = Math.round(height / 2 + top);
    if (centerText.color) {
      ctx.fillStyle = centerText.color;
    }
    ctx.fillText(centerText.value, textX, textY);
  }
};

// if the environment is neither amd nor commonjs, register the plugin globally for the samples and tests
export default plugin;
// if (
//   !(typeof define === "function" && define.amd) &&
//   !(typeof module === "object" && module.exports)
// ) {
//   Chart.register(plugin);
// }
