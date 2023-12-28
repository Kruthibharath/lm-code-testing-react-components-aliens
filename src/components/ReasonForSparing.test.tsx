import { render, screen } from "@testing-library/react";
import { ReasonForSparing } from "./ReasonForSparing";

describe("Reason for Sparing", () => {
  test("renders the component without fail", () => {
    render(
      <ReasonForSparing
        reason=""
        onChangeOfReason={() => {}}
        validate={() => []}
      />
    );
  });

  test("renders textarea with the initial values", () => {
    render(
      <ReasonForSparing
        reason=""
        onChangeOfReason={() => {}}
        validate={() => []}
      />
    );
    const textareaElement = screen.getByLabelText("Reason for sparing");
    expect(textareaElement).toBeInTheDocument();
  });
});
