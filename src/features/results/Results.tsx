import React from "react";
import { useAppSelector, useExpectedTimestamps } from "../../hooks";
import { selectRunning } from "../running/runningSlice";
import { selectSettings } from "../settings/settingsSlice";
import { Container, Typography } from "@mui/material";
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


function Results() {
    const { userTimestamps, startTimestamp } = useAppSelector(selectRunning);
    const { bpm } = useAppSelector(selectSettings);
    const expectedTimestamps = useExpectedTimestamps(startTimestamp, bpm, userTimestamps.length);

    const getScore = (totalDifference: number): number => {
        if (totalDifference < 100) {
            return 1000;
        } else if (totalDifference > 5000) {
            return 0;
        } else {
            return 1000 - Math.ceil(((totalDifference - 100) / 4900) * 1000);
        }
    };

    const getTotalDifference = (differences: number[]): number => {
        let totalDifference = 0;
        for (const difference of differences) {
            totalDifference += Math.abs(difference);
        }
        return totalDifference;
    };

    // create an array of the differences between the expected and user timestamps
    const differences = expectedTimestamps.map((expectedTimestamp, index) => {
        return expectedTimestamp - userTimestamps[index];
    });

    const score = getScore(getTotalDifference(differences));

    console.log(getScore(3000));
    // find highest value and round to 100. this will determine the min/max of the x axis
    let highestValue = Math.ceil(Math.max(...differences.map(Math.abs)) / 100) * 100;

    // if highest value is below 300, set it to 300 to not make it seem like the user did poorly even if he did good :)
    if (highestValue < 300) {
        highestValue = 300;
    }

    // create the bar chart data object
    const data = {
        labels: Array.from(Array(expectedTimestamps.length).keys()),
        datasets: [
            {
                label: "Differences",
                data: differences,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
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
                    text: "ms difference",
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
        <Container>
            <Typography align={"center"} variant={"h3"} gutterBottom>
                Results
            </Typography>
            <Typography align={"center"} variant={"h4"}>
                Your score: {score}
            </Typography>
            <Bar options={options} data={data}/>
        </Container>
    );
}

export default Results;
