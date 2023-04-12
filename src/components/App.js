import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Product } from "components/Product";
import { Header, Logo } from "./App.styled";

export const App = () => {
  return (
    <>
      <Header>
        <Logo>Your products store</Logo>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
