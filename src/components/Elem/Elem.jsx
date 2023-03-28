import { NavLink } from "react-router-dom";

export const Elem = ({ elemId }) => {
  return <NavLink to={elemId}>{elemId}</NavLink>;
};
