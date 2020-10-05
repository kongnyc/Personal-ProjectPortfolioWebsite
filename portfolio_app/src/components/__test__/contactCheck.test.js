import React from "react";
import {render, screen} from "@testing-library/react";
import Contact from "../Contact"

test('should email send out successful?', () => {
    render(Contact)
})

