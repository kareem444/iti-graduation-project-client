import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useFieldArray, useForm } from "react-hook-form";
import { RepoCreateProduct } from "../../../../repositories/product.repo";
// import "react-toastify/dist/ReactToastify.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from 'react-router-dom';
import PageRoutes from "../../../../router/page_routes";
const AdminAddproduct = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    mutate,
    isError: IsMutateError,
    isLoading: isMutateLoading,
    error,
    isSuccess
  } = RepoCreateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items", // unique name for your Field Array
  });

  const registerOptions = {
    title: {
      required: "title is required",
      minLength: {
        value: 8,
        message: "Min length 8 characters",
      },
      maxLength: {
        value: 50,
        message: "Max length 50 characters",
      },
    },
    description: {
      required: "description is required",
      minLength: {
        value: 5,
        message: "Min length 5 characters",
      },
      maxLength: {
        value: 400,
        message: "Max length 400 characters",
      },
    },

    file: { required: "file is required" },
    location: {
      required: "location is required",
      minLength: {
        value: 3,
        message: "Min length 3 characters",
      },
      maxLength: {
        value: 50,
        message: "Max length 50 characters",
      },
    },
    name: {
      required: "name is required",
      minLength: {
        value: 3,
        message: "Min length 3 characters",
      },
      maxLength: {
        value: 30,
        message: "Max length 30 characters",
      },
    },
    quantity: {
      required: " quantity is required",
      pattern: {
        value: /^[1-9][0-9]*$/,
        message: "Must greater than zero ",
      },
    },
    minQuantity: {
      required: "minQuantity is required",
      pattern: {
        value: /^[0-9][0-9]*$/,
        message: "accep number from zero ",
      },
    },
    maxQuantity: {
      required: " maxQuantity is required",
      pattern: {
        value: /^[1-9][0-9]*$/,
        message: "Must greater than zero",
      },
    },
    price: {
      required: " price is required",
      pattern: {
        value: /^[1-9][0-9]*$/,
        message: "Must greater than zero",
      },
    },
    descriptionItem: {
      required: "description is required",
      minLength: {
        value: 5,
        message: "Min length 5 characters",
      },
      maxLength: {
        value: 400,
        message: "Max length 400 characters",
      },
    },
  };
  const handleAddItem = () => {
    append({
      name: "",
      quantity: "",
      description: "",
      minQuantity: "",
      price: "",
      maxQuantity: "",
    });
  };
  const handleDeleteItem = (i) => {
    remove(i);
  };
  const navigate=useNavigate();
  const initialDays = [];
  const [days, setDays] = useState(initialDays);
  const footer =
    days && days.length > 0 ? (
      <p>You selected {days.length} day(s).</p>
    ) : (
      <p>Please pick one or more days.</p>
    );
  const handleRegistration = (data) => {
    data["items"].map((item) => {
      item["price"] = +item["price"];
      item["minQuantity"] = +item["minQuantity"];
      item["maxQuantity"] = +item["maxQuantity"];
      item["quantity"] = +item["quantity"];
    });
    let myDate = [...days];
    myDate.map((day) => {
      day = day.setDate(day.getDate() + 1);
      new Date(day);
    });
    data["notAvailableDAtes"] = myDate;
    data.file = data.file[0];
    mutate(data);
  };

  if (isSuccess) {
    navigate("../"+PageRoutes.adminProducts.path);
  } 

  return (
    <>
      {/* <ToastContainer /> */}
      <Box m="0 20px">
        <Header
          title="CREATE Product"
          subtitle="Create a New Product Profile"
        />
        <form onSubmit={handleSubmit(handleRegistration)}>
          <Box
            display="grid"
            gap="10px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Title"
              name="title"
              // sx={{ gridColumn: "span 2" }}
              {...register("title", registerOptions.title)}
              sx={{ gridColumn: "span 4" }}
            />
            {errors?.title && <Typography>{errors.title.message}</Typography>}

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Location"
              name="location"
              // sx={{ gridColumn: "span 2" }}
              sx={{ gridColumn: "span 4" }}
              {...register("location", registerOptions.location)}
            />
            {errors?.location && (
              <Typography>{errors.location.message}</Typography>
            )}
            <Box
              sx={{ gridColumn: 'span 4' }}
            >
              <Box   sx={{ gridColumn: 'span 2' }} >
                <Typography sx={{ gridColumn: "span 4" }}>
                  Product Image
                </Typography>
                <TextField
                  variant="standard"
                  type="file"
                  name="file"
                  sx={{ gridColumn: "span 4" }}
                  {...register("file", registerOptions.file)}
                />
                {errors?.file && (
                  <Typography sx={{ gridColumn: "span 4" }}>
                    {errors.file.message}
                  </Typography>
                )}
              </Box>
              <Box   sx={{ gridColumn: 'span 2' }} >
                <Typography sx={{ gridColumn: "span 4" }}>
                  NotAvailableDates
                </Typography>
                <DayPicker
                  mode="multiple"
                  min={0}
                  max={5}
                  selected={days}
                  onSelect={setDays}
                  footer={footer}
                />
              </Box>
            </Box>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              name="description"
              sx={{ gridColumn: "span 4" }}
              multiline
              rows={3}
              {...register("description", registerOptions.description)}
            />
            {errors?.description && (
              <Typography sx={{ gridColumn: "span 4" }}>
                {errors.description.message}
              </Typography>
            )}

            {fields.map((val, i) => (
              <Box key={val.id}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  name="name"
                  sx={{ gridColumn: "span 2" }}
                  {...register(`items.${i}.name`, registerOptions.name)}
                />
                {errors?.name && <Typography>{errors.name.message}</Typography>}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Quantity"
                  name="quantity"
                  sx={{ gridColumn: "span 2" }}
                  {...register(`items.${i}.quantity`, registerOptions.quantity)}
                />
                {errors?.quantity && (
                  <Typography sx={{ gridColumn: "span 2" }}>
                    {errors.quantity.message}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="MaxQuantity"
                  name="maxQuantity"
                  sx={{ gridColumn: "span 2" }}
                  {...register(
                    `items.${i}.maxQuantity`,
                    registerOptions.maxQuantity
                  )}
                />
                {errors?.maxQuantity && (
                  <Typography>{errors.maxQuantity.message}</Typography>
                )}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="MinQuantity"
                  name="minQuantity"
                  sx={{ gridColumn: "span 2" }}
                  {...register(
                    `items.${i}.minQuantity`,
                    registerOptions.minQuantity
                  )}
                />
                {errors?.minQuantity && (
                  <Typography>{errors.minQuantity.message}</Typography>
                )}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Price"
                  name="price"
                  sx={{ gridColumn: "span 2" }}
                  {...register(`items.${i}.price`, registerOptions.price)}
                />
                <Typography>{errors?.price && errors.price.message}</Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Description"
                  name="description"
                  sx={{ gridColumn: "span 4" }}
                  multiline
                  rows={3}
                  {...register(
                    `items.${i}.description`,
                    registerOptions.descriptionItem
                  )}
                />
                {errors?.descriptionItem && (
                  <Typography>{errors.descriptionItem.message}</Typography>
                )}
                {/* <FormControl
                  fullWidth
                  variant="filled"
                  name="role"
                  sx={{ gridColumn: "span 4" }}
                  {...register("role", registerOptions.userType)}
                >
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={"CLIENT"}
                    label="Role"
                    name="role"
                  >
                    <MenuItem value={"ADMIN"}>Admin</MenuItem>
                    <MenuItem value={"CLIENT"}>Client</MenuItem>
                    <MenuItem value={"SELLER"}>Seller</MenuItem>
                  </Select>
                </FormControl>
                {errors?.role && <Typography>{errors.role.message}</Typography>} */}
                <Button
                  onClick={() => handleDeleteItem(i)}
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    ":hover": {
                      bgcolor: "#ff1744",
                    },
                  }}
                >
                  Delete Item
                </Button>
              </Box>
            ))}
            <Button
              onClick={handleAddItem}
              sx={{
                backgroundColor: colors.blueAccent[500],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                ":hover": {
                  bgcolor: colors.blueAccent[600],
                },
              }}
            >
              Add New Item
            </Button>
          </Box>
          {fields.length > 0 && (
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Product
              </Button>
            </Box>
          )}
        </form>
      </Box>
    </>
  );
};

export default AdminAddproduct;
