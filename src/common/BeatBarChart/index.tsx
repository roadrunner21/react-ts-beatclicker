import React from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

interface BeatBarChartProps {
    differences: number[];
    expectedTimestamps: number[];
}

function BeatBarChart(beatBarChartProps: BeatBarChartProps) {
    const {differences, expectedTimestamps} = beatBarChartProps;

    // find highest value and round to 100. this will determine the min/max of the x axis
    let highestValue = Math.ceil(Math.max(...differences.map(Math.abs)) / 100) * 100;

    // if highest value is below 100, set it to 100 to not make it seem like the user did poorly even if he did good :)
    if (highestValue < 100) {
        highestValue = 100;
    }

    const data = {
        labels: Array.from(Array(expectedTimestamps.length).keys()),
        datasets: [
            {
                label: "Differences [ms]",
                data: differences,
                backgroundColor: "rgba(0, 48, 215, 0.2)",
                borderColor: "rgba(88, 125, 255, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: "y" as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "too early                                             " +
                        "ms" +
                        "                                             too late",
                },
                ticks: {},
                min: -highestValue,
                max: highestValue,
            },
            y: {
                title: {
                    display: true,
                    text: "Beats",
                },
            },
        },
    };
    return (
        <Bar options={options}
             data={data}/>
    );
}

export { BeatBarChart };