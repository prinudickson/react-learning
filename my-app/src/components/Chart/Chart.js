import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxVal = Math.max(...valueArray);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar value = {dataPoint.value} maxValue = {totalMaxVal} label = {dataPoint.label} key = {dataPoint.label} />)}
    </div>
};

export default Chart;