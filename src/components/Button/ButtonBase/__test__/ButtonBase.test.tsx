import * as React from "react";

import ButtonBase, { ButtonBaseProps } from "..";

import { render, RenderResult, screen } from "@testing-library/react";

describe("<ButtonBase />", () => {
    let wrapper: RenderResult;

    const props: ButtonBaseProps = {
        children: <div>Test</div>,
    };

    beforeEach(() => {
        wrapper = render(<ButtonBase {...props} />);
    });

    it("should exist children", () => {
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        expect(wrapper.container).toMatchSnapshot();
    });
});
