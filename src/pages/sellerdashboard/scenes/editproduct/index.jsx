import { Box, Button, TextField, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {  useParams } from "react-router-dom";
import {
  RepGetOneProduct,
  RepoUpdateProduct,
} from "../../../../repositories/product.repo";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from 'react-router';
const SellerEditproduct = () => {
  const initialDays = [];
  const [days, setDays] = useState(initialDays);
  const footer =
  days && days.length > 0 ? (
    <p>You selected {days.length} day(s).</p>
  ) : (
    <p>Please pick one or more days.</p>
  );
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [updateData, setData] = useState({});
  let {
    data: myProduct,
    isLoading,
    isError,
    error,
    refetch,
  } = RepGetOneProduct(id);
  const {
    mutate,
    isError: IsMutateError,
    error: mutateError,
    isLoading: isMutateLoading,
    isSuccess
  } = RepoUpdateProduct();
  const [product, setProduct] = useState();
  useEffect(() => {
    if (myProduct != null) {
      for(let i=0;i<myProduct['notAvailableDAtes'].length;i++){
        myProduct['notAvailableDAtes'][i] = new Date(myProduct['notAvailableDAtes'][i])
      }
      setProduct(myProduct);
    }
  }, [myProduct]);
  let {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    values: {
      title: product?.title ?? "",
      location: product?.location ?? "",
      description: product?.description ?? "",
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

    // file: { required: "file is required" },
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
  const handleRegistration = (data) => {
    handleClickOpen(data);
  };
  const handleClickOpen = (data) => {
    setData(data);
    setOpen(true);
  };
  const handleClose = (e) => {
    if (e.target.name == "agree") {
      updateData["items"].map((item) => {
        item["price"] = +item["price"];
        item["minQuantity"] = +item["minQuantity"];
        item["maxQuantity"] = +item["maxQuantity"];
        item["quantity"] = +item["quantity"];
      });
      if (updateData.file) {
        updateData.file = updateData.file[0];
      }
      let myDate=[...days];
      myDate.map((day) => {
           day = day.setDate(day.getDate()+1);
           new Date(day);
         });
         updateData["notAvailableDAtes"] = myDate;
      mutate({ id, data: updateData });
      refetch();
    }
    setOpen(false);
  };
  const navigate=useNavigate()
  if (isSuccess) {
    navigate(`../sellerproductdetails/${id}`);
  } 
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontSize="30px" textAlign="center">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            fontSize="20px"
            textAlign="center"
          >
            Are you sure to update !!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            name="disagree"
            sx={{
              backgroundColor: "red",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClose}
            autoFocus
            name="agree"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
                  {errors?.name && (
                    <Typography>{errors.name.message}</Typography>
                  )}
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Quantity"
                    name="quantity"
                    sx={{ gridColumn: "span 2" }}
                    {...register(
                      `items.${i}.quantity`,
                      registerOptions.quantity
                    )}
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
                  <Typography>
                    {errors?.price && errors.price.message}
                  </Typography>
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
    </>
  );
};

export default SellerEditproduct;
