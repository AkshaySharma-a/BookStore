import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  address: yup.string().required("Address is required"),
});

export default schema;
