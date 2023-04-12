import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "redux/products/productsSelectors";
import { fetchProductById } from "redux/products/productsOperations";
import { Box } from "components/Box";

export const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const {
    name,
    count,
    weight,
    // size: { width, height },
    // comments,
  } = product;

  return (
    <Box p="20px">
      <ul>
        <li>name: {name}</li>
        <li>count: {count}</li>
        <li>weight: {weight}</li>
      </ul>
    </Box>
  );
};