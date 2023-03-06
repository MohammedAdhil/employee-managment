import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Add() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState('')

  let history=useNavigate()


  const handleAdd=(e)=>{
    e.preventDefault()

    let ids=uuid()
    let uniqueid=ids.slice(0,8)
    // console.log(ids);


    employee.push(
      {
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary
      }
    )

    history('/')

  }

  return (
    <>
       <h1 className='text-center text-warning p-5 mt-3'>Add New Employee</h1>
          <div className='text-center p-2' >
        <p className='p-3'>Overseeing Workforce for Improved Performance. Effective employee management helps to improve employee morale, increase productivity, and support the overall success of the organization.</p>
        </div>
      
        <Container>
          <Row>
            <Col md={4}>
              <img className='w-100 mt-5' src='https://www.freeiconspng.com/thumbs/person-icon/person-male-light-icon--vista-people-iconset--icons-land-20.png' />
            </Col>
            <Col md={8}>
            <Form className='border p-5'>
      <Form.Group className="mb-3" >
        <Form.Label> Employee Name</Form.Label>
        <Form.Control required
         onChange={(e)=>setUname(e.target.value)}
          type="text" />

     
 
        <Form.Label> Employee Age</Form.Label>
        <Form.Control  required
         onChange={(e)=>setAge(e.target.value)} 
         type="text" />

   
   
        <Form.Label> Employee Designation</Form.Label>
        <Form.Control required
        onChange={(e)=>setDesig(e.target.value)} 
        type="text" />

   
  
        <Form.Label> Employee Salary</Form.Label>
        <Form.Control required
         onChange={(e)=>setSalary(e.target.value)}
          type="text"  />

      </Form.Group>

    
      <Button 
      onClick={(e)=>handleAdd(e)}
       variant="primary" type="submit">
        Add
      </Button>
    </Form>
            </Col>
            
          </Row>
        </Container>
    </>
  )
}

export default Add
