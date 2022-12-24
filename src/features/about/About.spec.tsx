import { render, screen } from '@testing-library/react';
import { About } from './About';

describe("About component", () => {
    test("renders headline", () => {
        render(<About/>);
        expect(screen.getByText(`About Beat Clicker`)).toBeInTheDocument();
    });

    test("renders score algorithm section", () => {
        render(<About/>);
        expect(screen.getByText("Score Algorithm")).toBeInTheDocument();
        expect(screen.getByText("Differences are cumulative", { exact: false })).toBeInTheDocument();
    });

    test("renders technology section", () => {
        render(<About/>);
        expect(screen.getByText("Technology")).toBeInTheDocument();
        expect(screen.getByText("React and Redux", { exact: false })).toBeInTheDocument();
    });

    test("renders infrastructure section", () => {
        render(<About/>);
        expect(screen.getByText("Infrastructure")).toBeInTheDocument();
        expect(screen.getByText("/pages", { exact: false })).toBeInTheDocument();
    });
});