import { MyButton } from "@/components/atoms/mybutton/MyButton";
import { render, screen } from "@testing-library/react";

describe("MyButton", () => {
  it('menampilkan teks "hello world"', () => {
    render(<MyButton />);
    const button = screen.getByText(/hello world/i);
    expect(button).toBeInTheDocument();
  });
});
