// __tests__/FormIndicatorMutu.test.tsx
import FormIndicatorMutu from "@/components/organisms/FormIndicatorMutu/FormIndicatorMutu";
import { render, screen } from "@testing-library/react";

// Mock console.log
jest.spyOn(console, "log").mockImplementation(() => {});

describe("FormIndicatorMutu", () => {
  test("renders the form with all fields", () => {
    render(<FormIndicatorMutu />);

    // Check if all input fields are present
    expect(screen.getByLabelText(/Nama Indikator/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Numerator/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Denominator/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Hasil Capaian/i)).toBeInTheDocument();
  });
});
