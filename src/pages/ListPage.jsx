import { Elem } from "../components/Elem/Elem";

export const ListPage = () => {
  const id = ["1", "2", "3"];

  return (
    <div>
      <h1>fvjkdnf</h1>

      {id.map((elem) => (
        <Elem key={elem} elemId={elem} />
      ))}
    </div>
  );
};
