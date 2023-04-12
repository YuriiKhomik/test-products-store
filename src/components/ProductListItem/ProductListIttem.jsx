import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "redux/products/productsOperations";
import { StyledProductListItem, Image } from "./ProductListItem.styled";
import { DeleteButton } from "components/Buttons";
import { Box } from "components/Box";

export const ProductListItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteProduct(item.id));

  return (
    <StyledProductListItem>
      <Link to={`${item.id}`}>
        <Image src="https://via.placeholder.com/200x100" alt={item.name} />
      </Link>
      <Box display="flex" justifyContent="space-between">
        <p>{item.name}</p>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </Box>
    </StyledProductListItem>
  );
};
