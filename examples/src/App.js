import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./plugin";

const Home = () =>{
  const data = [
    {
      orderType: 'Website',
      value: 34
    },
    {
      orderType: 'Customer Service',
      value: 10
    },
    {
      orderType: 'Dealers',
      value: 4
    }
  ]
  const dataLabels = data.map(({orderType})=>orderType);
  const dataInput = data.map(({value})=>value);
  const datasets = {
    labels: dataLabels,
    datasets:[
      {
        label: '# of order types',
        data: dataInput
      }
    ]
  };
  const options = {
    innerText: '50',
    innerTextDesc: 'orders',	
    responsive: true,
    maintainAspectRatio: false, 
    plugins:{
      scaleShowLabels:false,
      filler:{
        propagate: false
      },
      doughnutInnerText:{
        innerText: '50'
      },
      innerText: '50',
      legend: {
        display: true,
        position: 'right'
      },
      title:{
        display: true,
        text: "Sales By Source"
      }
    },
    layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  };
  return (
    <div style={{width: "500px", height: "300px"}}>
      <Doughnut type="doughnut"
        data={datasets}
        options={options}
      />      
    </div>

  )
}
export default Home