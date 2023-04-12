// import { getProducts } from "fakeAPI";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectProducts } from "redux/products/productsSelectors";
import { fetchProducts } from "redux/products/productsOperations";
import { Product, Image, List } from "./ProductList.styled";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "20px" }}>
      {error && <h1>ooops, smth went wrong :(</h1>}
      <List>
        {products.map((product) => (
          <Product key={product.id}>
            <Link to={`${product.id}`}>
              <Image
                src="https://via.placeholder.com/200x100"
                alt={product.name}
              />
            </Link>
            <p>{product.name}</p>
          </Product>
        ))}
      </List>
    </div>
  );
};
