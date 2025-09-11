import { render, screen, fireEvent } from "@testing-library/react";
import { AmountField } from "./amount-field";
import { vi, describe, expect, it, beforeEach } from "vitest";

describe("AmountField", () => {
  const defaultProps = {
    value: 0,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders with default props", () => {
    render(<AmountField {...defaultProps} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("0");
  });

  it("shows rupee icon by default", () => {
    render(<AmountField {...defaultProps} />);
    expect(screen.getByText("₹")).toBeInTheDocument();
  });

  it("hides rupee icon when showRupeeIcon is false", () => {
    render(<AmountField {...defaultProps} showRupeeIcon={false} />);
    expect(screen.queryByText("₹")).not.toBeInTheDocument();
  });

  it("calls onChange handler with input value", () => {
    render(<AmountField {...defaultProps} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "100" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("100");
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("respects maxLength constraint", () => {
    render(<AmountField {...defaultProps} maxLength={3} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("maxLength", "3");
  });

  it("calls handleBlur when input loses focus", () => {
    const handleBlur = vi.fn();
    render(<AmountField {...defaultProps} handleBlur={handleBlur} />);
    const input = screen.getByRole("textbox");

    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("adjusts width based on value length", () => {
    const { rerender } = render(<AmountField {...defaultProps} value={1000} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveStyle({ width: "5ch" }); // 4 digits + 1

    rerender(<AmountField {...defaultProps} value={10} />);
    expect(input).toHaveStyle({ width: "3ch" }); // 2 digits + 1
  });

  it("has tel type for numeric keyboard on mobile", () => {
    render(<AmountField {...defaultProps} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("type", "tel");
  });
});
