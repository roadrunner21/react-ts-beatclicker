import {useMemo} from "react";
import {SCORING_CUMULATIVE} from "../../features/settings/settingsSlice";
import type {ScoringAlgorithms} from "../../features/settings/settingsSlice";

function useExpectedTimestamps(
    startTimestamp: number,
    bpm: number,
    userTimestamps: number[],
    scoringAlgorithm: ScoringAlgorithms,
): number[] {
    return useMemo(() => {
        if (scoringAlgorithm === SCORING_CUMULATIVE) {
            const expectedTimestamps = [];
            for (let i = 0; i < userTimestamps.length; i++) {
                // Calculate the elapsed time in seconds since the start of the game
                const elapsedTime = i * (60 / bpm);
                let expectedTimestamp = 0;

                // Calculate the expected time for this iteration based on the elapsed time and the BPM
                expectedTimestamp = startTimestamp + elapsedTime * 1000;
                expectedTimestamps.push(expectedTimestamp);
            }
            return expectedTimestamps;
        } else {
            // Individual scoring
            const expectedTimestamps = [startTimestamp];
            for (let i = 1; i < userTimestamps.length; i++) {
                // Calculate the elapsed time in seconds since the start of the game
                const elapsedTime = (60 / bpm);
                let expectedTimestamp = 0;

                // Calculate the expected time for this iteration based on the previous user timestamp and the elapsed time
                expectedTimestamp = userTimestamps[i - 1] + elapsedTime * 1000;
                expectedTimestamps.push(expectedTimestamp);
            }
            return expectedTimestamps;
        }
    }, [userTimestamps, bpm, scoringAlgorithm, startTimestamp]);
}

export {useExpectedTimestamps};
