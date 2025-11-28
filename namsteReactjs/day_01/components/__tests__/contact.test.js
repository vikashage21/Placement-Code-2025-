import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../Pages/Contact";

describe('contact ui test' , ()=>{
test("testing contact should be loaded on screen", () => {
  // render the contact component
  render(<Contact />);

  // now we check if it is rendered on the screen
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
// testing if button is in the dom or not 
test('testing if button is render or not  ',()=>{
    render(<Contact/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
})

})



