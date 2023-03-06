import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(JSON.parse (localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse (localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse (localStorage.getItem("salary")))



  },[])

  var index=employee.map((item)=>item.id).indexOf(id)

  let history=useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()

    
  
  
  let emp=employee[index]
  emp.name=uname
  emp.age=age
  emp.desig=desig
  emp.salary=salary

    history('/')


  }

  return (
    <div>
          <h1 className='text-center text-warning p-5 mt-3'>Update details of Employee</h1>
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
        <Form.Control value={uname} onChange={(e)=>setUname(e.target.value)} type="text" />

     
 
        <Form.Label> Employee Age</Form.Label>
        <Form.Control  value={age} onChange={(e)=>setAge(e.target.value)} type="text" />

   
   
        <Form.Label> Employee Designation</Form.Label>
        <Form.Control value={desig} onChange={(e)=>setDesig(e.target.value)} type="text" />

   
  
        <Form.Label> Employee Salary</Form.Label>
        <Form.Control value={salary} onChange={(e)=>setSalary(e.target.value)} type="text"  />

      </Form.Group>

    
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
            </Col>
            
          </Row>
        </Container>
    </div>
  )
}

export default Edit
