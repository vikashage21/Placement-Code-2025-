// testing the card if data is rendered or not
import { render , screen } from "@testing-library/react";
import { mockData } from "../../mock/mockData";
import '@testing-library/jest-dom'

import Cards from "../Cards";


it('card component should render with given data', () => {
    let {name, rating , image } = mockData
    // render the card component with mock data

    // title, rating, desc, time, img , username
    render(<Cards  title={name}  rating={rating} img={image} />)

    const titleElement = screen.getByText('Classic Margherita Pizza');
    expect(titleElement).toBeInTheDocument();

})