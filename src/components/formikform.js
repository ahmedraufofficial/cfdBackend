import * as React from 'react';
import { ReactDOM } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Input, FormHelperText, TextField, Box, Paper, Grid, MenuItem, Divider} from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid blue',
  p: 4,
  overflow:'scroll'
};

const style01 = {
    padding: 1

}

const style02 = {
  padding: 5

}

const Websites = [
    {
      value: 'carfairdeal',
      label: 'carfairdeal',
    },
    {
      value: 'dubizzle',
      label: 'dubizzle',
    },
  ];

  const Users = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const selloptions = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Locations = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const valstatuses = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Heard_From_Uss = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const staffsources = [
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const contactLocations =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Model_Years =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const makes =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Global_Model_Names =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Model_Names =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const Car_Optionslist =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const mileages =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];
  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        Website: '',
        User: '',
        Sell_Option: '',
        Location: '',
        Valuation_Status: '',
        Heard_From_Us: '',
        Staff_Lead_Source: '',
        Appointment_Date: '',
        Time: '',
        Customer_Information: {},
        Car_Valuation_Details: {}
      },
      onSubmit: (values) => {
        async function add() {
            const response = await fetch(`https://e7f5-2001-8f8-1623-5e91-c99e-f35a-c239-24a5.in.ngrok.io/add/evaulation`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:values
            })
            const data = await response.json()
            alert(data)  
        }
        add();
        //alert(JSON.stringify(values, null, 2));
      },
    });
    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleChange07 = (newValue) => {
      setValue(newValue);
    }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
    return (
    <div>
      <Button size="small" variant="contained" startIcon={<AddCircleOutlineIcon/>} onClick={handleOpen}>
                Create New
              </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={5} >
          
        <TextField style={style01} 
          sx={{ m: 1, minWidth: 150 }} size="small" 
          id="Website"
          name="Website"
          select
          label="Website"
          value={formik.values.Website}
          onChange={formik.handleChange}
        >
          {Websites.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="User"
          name="User"
          select
          label="User"
          value={formik.values.User}
          onChange={formik.handleChange}
        >
          {Users.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="Sell_Option"
          name="Sell_Option"
          select
          label="Sell Option"
          value={formik.values.Sell_Option}
          onChange={formik.handleChange}
        >
          {selloptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="Location"
          name="Location"
          select
          label="Location"
          value={formik.values.Location}
          onChange={formik.handleChange}
        >
          {Locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="Valuation_Status"
          name="Valuation_Status"
          select
          label="Valuation Status"
          value={formik.values.Valuation_Status}
          onChange={formik.handleChange}
        >
          {valstatuses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack paddingBottom={"2%"} paddingTop={"2%"} spacing={1} direction="row">
                <DesktopDatePicker
                label="Appointment_Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange07}
                renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                label="Time"
                value={value}
                onChange={handleChange07}
                renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="Heard_From_Us"
          name="Heard_From_Us"
          select
          label="Hear Us From"
          value={formik.values.Heard_From_Us}
          onChange={formik.handleChange}
        >
          {Heard_From_Uss.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="Staff_Lead_Source"
          name="Staff_Lead_Source"
          select
          label="Staff Lead Source"
          value={formik.values.Staff_Lead_Source}
          onChange={formik.handleChange}
        >
          {staffsources.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={6} md={3}>
        <FormControl variant="standard" style={style02}>
        <InputLabel htmlFor="Contact_Name" style={style02}>
          First Name
        </InputLabel>
        <Input
          id="Customer_Information.Contact_Name"
          name="Customer_Information.Contact_Name"
          value={formik.values.Customer_Information.Contact_Name}
          onChange={formik.handleChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl variant="standard" style={style02}>
        <InputLabel htmlFor="Email" style={style02}>
          Email
        </InputLabel>
        <Input
          id="Customer_Information.Email"
          name="Customer_Information.Email"
          value={formik.values.Customer_Information.Email}
          onChange={formik.handleChange}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl variant="standard" style={style01}>
        <InputLabel htmlFor="Contact_Number" style={style01}>
          Contact Number
        </InputLabel>
        <Input
          id="Customer_Information.Contact_Number"
          name="Customer_Information.Contact_Number"
          value={formik.values.Customer_Information.Contact_Number}
          onChange={formik.handleChange}
          startAdornment={
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="Customer_Information.Customer_Location"
          name="Customer_Information.Customer_Location"
          select
          label="Contact Location"
          value={formik.values.Customer_Information.Customer_Location}
          onChange={formik.handleChange}
        >
          {contactLocations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={6} md={4}>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Model_Year"
          name="Customer_Information.Model_Year"
          select
          label="Model Year"
          value={formik.values.Customer_Information.Model_Year}
          onChange={formik.handleChange}
        >
          {Model_Years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Make"
          name="Customer_Information.Make"
          select
          label="Make"
          value={formik.values.Customer_Information.Make}
          onChange={formik.handleChange}
        >
          {makes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Global_Model_Name"
          name="Customer_Information.Global_Model_Name"
          select
          label="Global Model"
          value={formik.values.Customer_Information.Global_Model_Name}
          onChange={formik.handleChange}
        >
          {Global_Model_Names.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Model_Name"
          name="Customer_Information.Model_Name"
          select
          label="Model Name"
          value={formik.values.Customer_Information.Model_Name}
          onChange={formik.handleChange}
        >
          {Model_Names.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Car_Options"
          name="Customer_Information.Car_Options"
          select
          label=" Car Options"
          value={formik.values.Customer_Information.Car_Options}
          onChange={formik.handleChange}
        >
          {Car_Optionslist.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="Customer_Information.Mileage"
          name="Customer_Information.Mileage"
          select
          label="Mileage"
          value={formik.values.Customer_Information.Mileage}
          onChange={formik.handleChange}
        >
          {mileages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl variant="standard" style={style02}>
        <InputLabel htmlFor="Evaluation_Options" style={style02}>
          Evaluation Amount
        </InputLabel>
        <Input
          id="Customer_Information.Evaluation_Options"
          name="Customer_Information.Evaluation_Options"
          value={formik.values.Customer_Information.Evaluation_Options}
          onChange={formik.handleChange}
          startAdornment={
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>Comments</Item>
          <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </Grid>
      </Grid>
          </form>
          </Box>
        </Modal>
        

    </div>
    );
  };

  export default WithMaterialUI;