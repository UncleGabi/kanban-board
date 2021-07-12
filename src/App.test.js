import { render, screen } from "@testing-library/react";
// import App from "./App";
import Home from "./pages/Home";

test("renders learn react link", () => {
    render(<Home />);
    const linkElement = screen.getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
});
