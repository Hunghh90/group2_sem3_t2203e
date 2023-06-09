import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const DashboardComponent = () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',

  
    seriesField: 'type',
    marginRatio: 0,
    label: {
     
      position: 'middle',
    
      layout: [
   
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (
    <div
    style={{
        margin:"20px",
        border: "1px solid #F5F5F5" ,
        with: "900px",
        float:"left"
      }}>
        <Bar {...config} />;
    </div>
  )
};

export default DashboardComponent;
//ReactDOM.render(<DashboardComponent />, document.getElementById('container'));
