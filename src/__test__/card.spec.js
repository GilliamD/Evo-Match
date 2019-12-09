import React, {useState } from 'react';
import { create, act } from "react-test-renderer";
import Card from '../components/Card/index';

describe('<Card />', () => {
    test("State changed from null to false")
    let getByTestId;

    afterEach(cleanup);

    describe('clicking a card', () => {
        let clickHandler;
        beforeEach(() => {
            clickHandler = jest.fn();
            ({ getByTestId } = render(<Card onClick={clickHandler} />));

});
