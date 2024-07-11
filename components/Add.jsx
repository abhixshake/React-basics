import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({person}) => {
  //const [count,setCount]=useState(0);
  // let valueAdd=()=>{
  //   setCount(count+1)
  // }
  const [form,setForm]=useState(
    {
      fname:person.fname,
      middlename:person.middlename,
      lastname:person.lastname
    }
  )
  function valueCap(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="First-Name"
          // defaultValue="Hello World"
          // variant="standard"
          name="fname"
          value={form.fname}
          onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Middle-Name"
          // defaultValue="Hello World"
          // variant="standard"
          name="middlename"
          value={form.middlename}
          onChange={valueCap}
          // required
          // id="standard-required"
          // label="Required"
          // defaultValue="Hello World"
          // variant="standard"
          // name="fname"
          // onChange={valueCap}
        />
        <TextField
          required
          id="outlined-required"
          label="Last-Name"
          // defaultValue="Hello World"
          // variant="standard"
          name="lastname"
          value={form.lastname}
          onChange={valueCap}
          // required
          // id="standard-required"
          // label="Required"
          // defaultValue="Hello World"
          // variant="standard"
          // name="fname"
          // onChange={valueCap}
        />
        </div>
        <Button variant='contained' color='success' onClick={valueAdd} > Submit </Button>
        {/* <small>count is {count}</small> */}
      
    </Box>
    </div>
  )
}
export default Add