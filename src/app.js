import { chart } from "./chart";
// import { getChartData } from "./data";
import data from "./data.json"
import "./styles.scss";

// const tgChart = chart(document.getElementById("chart"), getChartData());
// You can change data[index] if u wanna see the others graphics
const tgChart = chart(document.getElementById("chart"), data[4]);
tgChart.init();
