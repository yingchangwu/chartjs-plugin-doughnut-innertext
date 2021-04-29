import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-doughnut-innertext'
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
      value: 12
    }
  ]
  const dataLabels = data.map(({orderType})=>orderType);
  const dataInput = data.map(({value})=>value);
  const datasets = {
    labels: dataLabels,
    datasets:[
      {
        label: '# of order types',
        data: dataInput,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 10
      }
    ]
  };
  const options = {
    centerText: 5000,	
    responsive: true,
    maintainAspectRatio: false, 
    plugins:{
      scaleShowLabels:false,
      filler:{
        propagate: false
      },
      legend: {
        display: true,
        position: 'right'
      },
      title:{
        display: true,
        text: "Sales By Source"
      }
    },
    layout: { padding: { left: 50, right: 40, top: 50, bottom: 50 } },
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
