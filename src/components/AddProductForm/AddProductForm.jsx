import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "components/Box";
import { Input } from "./AddProductForm.styled";

// const schema = yup.object().shape({
//   name: yup.string().required("please, type product name"),
//   count: yup.number().required(),
//   width: yup.number().required(),
//   height: yup.number().required(),
//   weight: yup.number().required(),
// });

const initialValues = {
  name: "",
  count: "",
  width: "",
  height: "",
  weight: "",
};

export const AddProductForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Box display="flex" flexDirection="column">
          <label htmlFor="name">
            <Input
              type="text"
              name="name"
              placeholder="name"
              title="Enter name of the product"
              required
            />
            <ErrorMessage name="name" />
          </label>
          <label htmlFor="count">
            <Input
              type="number"
              min="1"
              name="count"
              placeholder="count"
              pattern="[1-9]+"
              title="Here you have to enter count of product"
              required
            />
            <ErrorMessage name="count" />
          </label>
          <label htmlFor="width">
            <Input
              type="number"
              min="1"
              name="width"
              placeholder="width in cm"
              pattern="[0-9]+"
              title="Enter width of product in cm"
              required
            />
            <ErrorMessage name="width" />
          </label>
          <label htmlFor="height">
            <Input
              type="number"
              min="1"
              name="height"
              placeholder="height in cm"
              pattern="[0-9]+"
              title="Enter height of product in cm"
              required
            />
            <ErrorMessage name="height" />
          </label>
          <label htmlFor="weight">
            <Input
              type="number"
              min="1"
              name="weight"
              placeholder="weight in gramms"
              pattern="[0-9]+"
              title="Enter weight of product in gramms"
              required
            />
            <ErrorMessage name="weight" />
          </label>
          <Box
            display="inlineBlock"
            position="absolute"
            bottom="12px"
            left="12px"
          >
            <button type="submit">Add product</button>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
