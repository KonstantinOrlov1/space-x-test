import { NavLink, useParams } from "react-router-dom";

export const Description = () => {
  const { elemId } = useParams();

  const ff = async () => {
    const res = await fetch(`http://localhost:3003/api/bikeType`);
    const a = await res.json();
    console.log(a);
  };
  ff();

  return (
    <div>
      <NavLink to={"/"}>Назад</NavLink>
      <div>{elemId}</div>
    </div>
  );
};
