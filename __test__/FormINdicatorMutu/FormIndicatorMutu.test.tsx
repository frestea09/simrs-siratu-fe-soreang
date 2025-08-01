// __tests__/FormIndicatorMutu.test.tsx
import FormIndicatorMutu from "@/components/organisms/FormIndicatorMutu/FormIndicatorMutu";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// Mock console.log
jest.spyOn(console, "log").mockImplementation(() => {});

describe("FormIndicatorMutu", () => {
  test("renders the form with all fields", () => {
    render(<FormIndicatorMutu />);

    // Check if all input fields are present
    expect(screen.getByLabelText(/Nama Indikator/i)).toBeInTheDocument();
  });
});
