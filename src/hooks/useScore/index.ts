import { useMemo } from "react";

function useScore(expectedTimestamps: number[], userTimestamps: number[]) {
    const differences = useMemo(() => {
        return expectedTimestamps.map((expectedTimestamp, index) => {
            return userTimestamps[index] - expectedTimestamp;
        });
    }, [expectedTimestamps, userTimestamps]);

    const totalDifference = useMemo(() => {
        let totalDifference = 0;
        for (const difference of differences) {
            totalDifference += Math.abs(difference);
        }
        return totalDifference;
    }, [differences]);

    const score = useMemo(() => {
        if (totalDifference < 100) {
            return 1000;
        } else if (totalDifference > 5000) {
            return 0;
        } else {
            return 1000 - Math.ceil(((totalDifference - 100) / 4900) * 1000);
        }
    }, [totalDifference]);

    return { differences, totalDifference, score };
}

export { useScore };
