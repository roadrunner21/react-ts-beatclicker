import { useMemo } from "react";

function useExpectedTimestamps(
    startTimestamp: number,
    bpm: number,
    iterations: number,
): number[] {
    return useMemo(() => {
        const expectedTimestamps = [];
        for (let i = 0; i < iterations; i++) {
            // Calculate the elapsed time in seconds since the start of the game
            const elapsedTime = i * (60 / bpm);
            // Calculate the expected time for this iteration based on the elapsed time and the BPM
            const expectedTimestamp = startTimestamp + elapsedTime * 1000;
            expectedTimestamps.push(expectedTimestamp);
        }
        return expectedTimestamps;
    }, [startTimestamp, bpm, iterations]);
}

export default useExpectedTimestamps;
