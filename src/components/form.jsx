import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { OutlinedButtons } from "./Buttons";
import { useForm } from "react-hook-form"


export default function BasicTextFields() {

  return (

    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="names"
        label="Nombre y apellido"
        variant="standard"
      />
      <TextField
        id="OwnCellphone"
        label="Tu numero de telefono"
        variant="standard"
        type="number"
        placeholder="+549(codigo de area)(numero de telefono)"

      />
      <TextField
        id="Emergency1"
        label="Numero de emergencia 1"
        variant="standard"
        type="number"
        placeholder="+549(codigo de area)(numero de telefono)"
      />
      <TextField
        id="Emergency2"
        label="Numero de emergencia 2"
        variant="standard"
        type="number"
        placeholder="+549(codigo de area)(numero de telefono)"
      />
      <OutlinedButtons type="submit"/>
    </Box>
  );  
}
