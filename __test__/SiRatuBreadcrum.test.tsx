import { render, screen } from "@testing-library/react";
import { SiRatuBreadcrumb } from "../components/organisms/SiRatuBreadcrumb/SiRatuBreadcrumb"; // Sesuaikan path
import "@testing-library/jest-dom"; // Untuk matcher `toBeInTheDocument`

describe("SiRatuBreadcrumb", () => {
  it("renders breadcrumb items correctly", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings" }, // Tanpa href
    ];

    render(<SiRatuBreadcrumb items={items} />);

    // Cek apakah item "Home" ada
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();

    // Cek apakah link "Home" mengarah ke / (href)
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Dashboard").closest("a")).toHaveAttribute(
      "href",
      "/dashboard"
    );
  });

  it("renders breadcrumb without links correctly", () => {
    const items = [{ label: "Home" }, { label: "Settings" }];

    render(<SiRatuBreadcrumb items={items} />);

    // Cek apakah kedua item breadcrumb ada tanpa link
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
