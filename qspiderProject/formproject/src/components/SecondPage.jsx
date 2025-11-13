
import { Link } from "react-router-dom";
export const SecondPage = ({ data, handleInput }) => {
  return (
    <>
      <input
      name="password"
        type="text"
        placeholder="Enter Your conform password"
        onChange={handleInput}
        value={data.password}
        
        
      />

      <input type="number" placeholder="Enter your password"/>

      <Link to="/page3">
        <button>next</button>
      </Link>
    </>
  );
};