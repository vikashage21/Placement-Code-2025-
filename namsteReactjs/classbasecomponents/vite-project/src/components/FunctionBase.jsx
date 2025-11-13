import UserClass from "./Classbase";

const FunctionBase = () => {
  const config = {
    name: "vikash",
    location: "delhi",
    job: "Mern stack developer",
  };

  return (
    <>
      {/* we can not use forOf loop inside the react so for this we make an object to array */}
      {Object.entries(config).map((i) => {
        let [name, value] = i;
        return (
          <>
                function base 
            <p>
              {name} : {value}
              <UserClass name={name} value={value} />
            </p>
          </>
        );
      })}
    </>
  );
};

export default FunctionBase;
