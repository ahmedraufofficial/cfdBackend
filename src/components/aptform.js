import * as React from 'react';
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
import { Field, Form, Formik, FormikProps } from 'formik';



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

const websites = [
    {
      value: 'carfairdeal',
      label: 'carfairdeal',
    },
    {
      value: 'dubizzle',
      label: 'dubizzle',
    },
  ];

  const lastnames = [
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

  const locations = [
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

  const heards = [
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

  const contactlocations =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const modelyears =[
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

  const globalmodels =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const modelnames =[
    {
      value: 'Option01',
      label: 'Option01',
    },
    {
      value: 'Option02',
      label: 'Option02',
    },
  ];

  const caroptionslist =[
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
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [website, setwebsite] = React.useState();
  const handleChange = (event) => {
    setwebsite(event.target.value);
  };

  const [lastname, setlastname] = React.useState();
  const handleChange01 = (event) => {
    setlastname(event.target.value);
  };

  const [selloption, setselloption] = React.useState();
  const handleChange02 = (event) => {
    setselloption(event.target.value);
  };

  const [location, setlocation] = React.useState();
  const handleChange03 = (event) => {
    setlocation(event.target.value);
  };

  const [valstatus, setvalstatus] = React.useState();
  const handleChange04 = (event) => {
    setvalstatus(event.target.value);
  };

  const [heard, setheard] = React.useState();
  const handleChange05 = (event) => {
    setheard(event.target.value);
  };

  const [staffsource, setstaffsource] = React.useState();
  const handleChange06 = (event) => {
    setstaffsource(event.target.value);
  };

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const handleChange07 = (newValue) => {
    setValue(newValue);
  }

  const [contactlocation, setcontactlocation] = React.useState();
  const handleChange08 = (event) => {
    setcontactlocation(event.target.value);
  };

  const [modelyear, setmodelyear] = React.useState();
  const handleChange09 = (event) => {
    setmodelyear(event.target.value);
  };

  const [make, setmake] = React.useState();
  const handleChange10 = (event) => {
    setmake(event.target.value);
  };

  const [globalmodel, setglobalmodel] = React.useState();
  const handleChange11 = (event) => {
    setglobalmodel(event.target.value);
  };

  const [modelname, setmodelname] = React.useState();
  const handleChange12 = (event) => {
    setmodelname(event.target.value);
  };

  const [caroptions, setcaroptions] = React.useState();
  const handleChange13 = (event) => {
    setcaroptions(event.target.value);
  };

  const [mileage, setmileage] = React.useState();
  const handleChange14 = (event) => {
    setmileage(event.target.value);
  };

  const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
  };


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={5} >
          
        <TextField style={style01} 
          sx={{ m: 1, minWidth: 150 }} size="small" 
          id="website"
          select
          label="Website"
          value={website}
          onChange={handleChange}
        >
          {websites.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="lastname"
          select
          label="Last Name"
          value={lastname}
          onChange={handleChange01}
        >
          {lastnames.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="selloption"
          select
          label="Sell Option"
          value={selloption}
          onChange={handleChange02}
        >
          {selloptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 150 }} size="small"
          id="location"
          select
          label="Location"
          value={location}
          onChange={handleChange03}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="valstatus"
          select
          label="Valuation Status"
          value={valstatus}
          onChange={handleChange04}
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
                label="Dates"
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
          id="heard"
          select
          label="Hear Us From"
          value={heard}
          onChange={handleChange05}
        >
          {heards.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="staffsource"
          select
          label="Staff Lead Source"
          value={staffsource}
          onChange={handleChange06}
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
        <InputLabel htmlFor="contactname" style={style02}>
          First Name
        </InputLabel>
        <Input
          id="contactname"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl variant="standard" style={style02}>
        <InputLabel htmlFor="contactemail" style={style02}>
          Email
        </InputLabel>
        <Input
          id="contactemail"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl variant="standard" style={style01}>
        <InputLabel htmlFor="contactnumber" style={style01}>
          Contact Number
        </InputLabel>
        <Input
          id="contactnumber"
          startAdornment={
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          }
        />
        </FormControl>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 170 }} size="small"
          id="contactlocation"
          select
          label="Contact Location"
          value={contactlocation}
          onChange={handleChange08}
        >
          {contactlocations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={6} md={4}>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="modelyear"
          select
          label="Model Year"
          value={modelyear}
          onChange={handleChange09}
        >
          {modelyears.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="make"
          select
          label="Make"
          value={make}
          onChange={handleChange10}
        >
          {makes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="globalmodel"
          select
          label="Global Model"
          value={globalmodel}
          onChange={handleChange11}
        >
          {globalmodels.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="modelname"
          select
          label="Model Name"
          value={modelname}
          onChange={handleChange12}
        >
          {modelnames.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="caroptions"
          select
          label=" Car Options"
          value={caroptions}
          onChange={handleChange13}
        >
          {caroptionslist.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField style={style01}
          sx={{ m: 1, minWidth: 120 }} size="small"
          id="mileage"
          select
          label="Mileage"
          value={mileage}
          onChange={handleChange14}
        >
          {mileages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>Comments</Item>
        </Grid>
      </Grid>
      </Box>
      </Modal>
    </div>
  );
}