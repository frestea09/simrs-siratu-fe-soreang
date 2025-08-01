// __tests__/DatePicker.test.tsx
import DatePicker from "@/components/atoms/datepicker/datepicker";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock console.log
jest.spyOn(console, "log").mockImplementation(() => {});

describe("DatePicker Component", () => {
  test("renders DatePicker with label", () => {
    render(<DatePicker label="Tanggal Lahir" value="" onChange={jest.fn()} />);

    // Check if the label is rendered
    expect(screen.getByLabelText(/Tanggal Lahir/i)).toBeInTheDocument();
  });

  //   test("displays error message when required field is not filled", async () => {
  //     render(
  //       <DatePicker
  //         label="Tanggal Lahir"
  //         value=""
  //         onChange={jest.fn()}
  //         required
  //         error="Tanggal wajib diisi"
  //       />
  //     );

  //     // Submit the form without selecting a date
  //     userEvent.click(
  //       screen.getByRole("button", { name: /Create Indikator Mutu/i })
  //     );

  //     // Wait for error message to appear
  //     await waitFor(() =>
  //       expect(screen.getByText(/Tanggal wajib diisi/)).toBeInTheDocument()
  //     );
  //   });

  //   test("fires onChange when a date is selected", async () => {
  //     const handleChange = jest.fn();
  //     render(
  //       <DatePicker label="Tanggal Lahir" value="" onChange={handleChange} />
  //     );

  //     // Select a date
  //     const input = screen.getByLabelText(/Tanggal Lahir/i);
  //     userEvent.type(input, "2025-08-01");

  //     // Check if onChange is called
  //     await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  //   });

  //   test("renders DatePicker with preselected date", () => {
  //     render(
  //       <DatePicker
  //         label="Tanggal Lahir"
  //         value="2025-08-01"
  //         onChange={jest.fn()}
  //       />
  //     );

  //     // Check if the preselected date is rendered
  //     const input = screen.getByLabelText(/Tanggal Lahir/i);
  //     expect(input).toHaveValue("2025-08-01");
  //   });

  //   test("renders DatePicker with error message when invalid", async () => {
  //     render(
  //       <DatePicker
  //         label="Tanggal Lahir"
  //         value=""
  //         onChange={jest.fn()}
  //         error="Tanggal salah format"
  //       />
  //     );

  //     // Check if the error message is rendered
  //     expect(screen.getByText(/Tanggal salah format/i)).toBeInTheDocument();
  //   });

  //   test("renders DatePicker without error when valid", async () => {
  //     render(
  //       <DatePicker
  //         label="Tanggal Lahir"
  //         value=""
  //         onChange={jest.fn()}
  //         error=""
  //       />
  //     );

  //     // Ensure that the error message is not shown
  //     expect(screen.queryByText(/Tanggal salah format/i)).not.toBeInTheDocument();
  //   });
});
