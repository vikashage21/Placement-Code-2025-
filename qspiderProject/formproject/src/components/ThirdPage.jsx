import { Link } from "react-router-dom";
export const ThirdPage = ({ data, handleInput, handelForm }) => {
  return (
    <>
    <form onSubmit={handelForm}>
      <input
        name="email"
        type="email"
        placeholder="Enter your Email"
        value={data.email}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Enter Your conform Email"
      
      />

 
        <button type="submit">Sumbit</button>
     </form>
    </>
  );
};
