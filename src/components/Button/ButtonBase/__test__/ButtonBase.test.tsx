import * as React from "react";

import ButtonBase, { ButtonBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<ButtonBase />", () => {
    const props: ButtonBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        render(<ButtonBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
