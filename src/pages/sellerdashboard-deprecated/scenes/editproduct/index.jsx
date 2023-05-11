import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useParams } from "react-router-dom";
import { RepGetOneProduct, RepoUpdateProduct } from "../../../../repositories/product.repo";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const SellerEditproduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  let {
    data:myProduct,
    isLoading,
    isError,
    error,
    isSuccess,
  } = RepGetOneProduct(id);
  const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading } = RepoUpdateProduct()
  const [product , setProduct] = useState();
  useEffect(() => {
    if (myProduct != null) {
      setProduct(myProduct)
    }
  }, [myProduct]);
  let {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    values:{ 
    title:product?.title??"",
    location:product?.location??"",
    description:product?.description??"",
      items:
        product != null
          ? [...product["items"]]
          : [
              {
                name: "test",
                description: "Default description to the item",
                price: 5,
                quantity: 1,
                minQuantity: 0,
                maxQuantity: 1,
              },
            ],
    },
  });
  useEffect(() => {}, [id]);
  let { fields, append, remove } = useFieldArray({
    control,
    // defaultValues:(product!=null&&product['items']!=null?product['items']:[]),
    name: "items", // unique name for your Field Array
  });

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
  const handleRegistration = (d) => {
    d['items'].map((item)=>{
      item['price']=(+item['price'])
      item['minQuantity']=(+item['minQuantity'])
      item['maxQuantity']=(+item['maxQuantity'])
      item['quantity']=(+item['quantity'])
      }
      )
      
    d.file=d.file[0];
    console.log("d" , d)
    mutate(id,{name:"kareem"});
  }
  return (
    <Box m="0 20px">
      <Header title="EDIT Product" subtitle="Edit Product Profile" />
      {product && (
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
            <TextField
              variant="filled"
              type="file"
              label="Image"
              name="file"
              sx={{ gridColumn: "span 4" }}
              {...register("file", registerOptions.file)}
              
            />
            {errors?.file && (
              <Typography>{errors.file.message}</Typography>
            )}
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
                Update Product
              </Button>
            </Box>
          )}
        </form>
      )}
    </Box>
  );
};

export default SellerEditproduct;
