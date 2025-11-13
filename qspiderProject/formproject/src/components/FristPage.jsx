import { Link } from "react-router-dom";
export const FirstPage = ({ data, handleInput }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        value={data.name}
        onChange={handleInput}
      />

      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        value={data.age}
        onChange={handleInput}
      />

      <Link to="/page2">
        <button>next</button>
      </Link>
    </>
  );
};