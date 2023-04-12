// import { getProducts } from "fakeAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectProducts } from "redux/products/productsSelectors";
import { fetchProducts } from "redux/products/productsOperations";
import { List } from "./ProductList.styled";
import { ProductListItem } from "components/ProductListItem";

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
          <ProductListItem item={product} key={product.id}></ProductListItem>
        ))}
      </List>
    </div>
  );
};
