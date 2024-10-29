import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layer from "./LayerManager";

describe("<LayerManager />", () => {
  test("it should mount", () => {
    render(<LayerManager />);

    const LayerManager = screen.getByTestId("LayerManager");

    expect(LayerManager).toBeInTheDocument();
  });
});
