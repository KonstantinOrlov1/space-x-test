import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Description } from "./components/Description/Description";
import { ListPage } from "./pages/ListPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":elemId" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
};
