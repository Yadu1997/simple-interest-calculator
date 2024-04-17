import { Stack, TextField, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [intrest,setIntrest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [validatePrinciple,setValidatePrinciple]=useState(false)
  const [validateRate,setValidateRate]=useState(false)
  const [validateYear,setValidateYear]=useState(false)

  const handleCalculate = (e)=>{
    e.preventDefault()
    // console.log("calculate button clicked");
    if (principle && rate && year) {
      setIntrest(principle*rate*year/100)
    }else{
      alert("please fill the form completely")
    }
  }
  const handleInputValidation=(tag)=>{
    const{name,value} = tag
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name=='principle') {
        setPrinciple(value)
        setValidatePrinciple(false)
      }else if(name=='rate'){
        setRate(value)
        setValidateRate(false)
      }else{
        setYear(value)
        setValidateYear(false)
      }
    }else{
      if (name=='principle') {
        setPrinciple(value)
        setValidatePrinciple(true)
      }else if(name=='rate'){
        setRate(value)
        setValidateRate(true)
      }else{
        setYear(value)
        setValidateYear(true)
      }
    }
  }
  const handleReset=()=>{
    setIntrest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setValidatePrinciple(false)
    setValidateRate(false)
    setValidateYear(false)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'500px'}} className="bg-light p-5 rounded">
        <h3>Simple Intrest Calculator</h3>
        <p>Calculate Your Simple Intrest Here</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-3 flex-column text-light rounded shadow">
          <h1> ₹  {intrest}</h1>
          <p className='fw-bolder'>Total Simple Intrest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>
          <TextField value={principle || ""} name='principle' onChange={e=>handleInputValidation(e.target)} className='w-100' id="principle" label="Principle Amount" variant="outlined" />
          </div>
          {
            validatePrinciple &&
          <div className="mb-3 text-danger fw-bolder">Invalid Input</div>
          }
          <div className='mb-3'>
          <TextField value={rate || ""} name='rate' onChange={e=>handleInputValidation(e.target)} className='w-100' id="rate" label="Rate of intrest" variant="outlined" />
          </div>
          {
            validateRate &&
          <div className="mb-3 text-danger fw-bolder">Invalid Input</div>
          }
          <div className='mb-3'>
          <TextField value={year || ""} name='year' onChange={e=>handleInputValidation(e.target)} className='w-100' id="principle" label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            validateYear &&
          <div className="mb-3 text-danger fw-bolder">Invalid Input</div>
          }
          <Stack direction="row" spacing={2}>
          <Button disabled={validatePrinciple||validateRate||validateYear} type="submit" onClick={handleCalculate} style={{width:'50%', height:"50px"}} variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%', height:"50px"}} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App