import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Docs")).toBeInTheDocument();
  });

  it("renders Vercel logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Vercel Logo")).toBeInTheDocument();
  });

  it("renders Next.js logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js Logo")).toBeInTheDocument();
  });

  it("renders correct hrefs", () => {
    render(<Home />);
    expect(screen.getByText("Docs").closest("a")).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(screen.getByText("Learn").closest("a")).toHaveAttribute(
      "href",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
    expect(screen.getByText("Templates").closest("a")).toHaveAttribute(
      "href",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(screen.getByText("Deploy").closest("a")).toHaveAttribute(
      "href",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
  });
});
