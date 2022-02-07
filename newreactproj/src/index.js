import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Calculator(){

  const [a,setA]=useState(null);
  const [b,setB]=useState(null);
  const [flag,setFlag]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{if(flag){setFlag(false);}},2000);
    });

return(
    <div>
    <center>
    <div style={{margin: 'auto', width: '50%'}}>
    {flag &&
    <Alert variant='info' style={{position: 'absolute','z-index': 100,display: 'flex', 'justify-content': 'center',width: '42.5rem',height:'50px',alignSelf: 'flex-end'}}>
    A={a} B={b}
    </Alert>
    }
    </div>
  <h1>
  <br/>
  <Badge pill bg="warning" text="dark">
  Calculator
</Badge>{' '}
</h1>
<br/>
<Stack center direction="horizontal" gap={4}>
<div style={{"width" : "30%"}}>
</div>
    <div className="bg-light border">
    <FloatingLabel
      controlId="floatingInput"
      label="A"
      className="mb-3"
    >
      <Form.Control  placeholder="Enter a value here" value={a} onChange={(e)=>{setA(Number(e.target.value));setFlag(true)}}/>
    </FloatingLabel>
</div>
<div className="bg-light border">
    <FloatingLabel
      controlId="floatingInput"
      label="B"
      className="mb-3"
    >
      <Form.Control  placeholder="Enter a value here" value={b} onChange={(e)=>{setB(Number(e.target.value));setFlag(true)}}/>
    </FloatingLabel>
    </div>
    <Button variant="danger" onClick={()=>{setA('');setB('');setFlag(true)}}  disabled={!a && !b}>Reset</Button>
    </Stack>
    <br/>
    <Table striped bordered hover size="sm" style={{"width" : "50%"}} >
  <thead>
    <tr>
      <th>S.No</th>
      <th>Operation</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Addition</td>
      <td>{a+b}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Substraction</td>
      <td>{a-b}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Multiplication</td>
      <td>{a*b}</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Division</td>
      <td>{a/b}</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Remainder</td>
      <td>{a%b}</td>
    </tr>
  </tbody>
</Table>
</center>
<div style={{display: 'flex', justifyContent:'flex-end'}}>
<Card style={{ width: '18rem',alignSelf: 'flex-end' }}>
<Card.Body>
    <Card.Title>Designed using React</Card.Title>
    <Card.Text>
      Designed by Aditya Konduri and Himamsu Marellapudi
    </Card.Text>
    <a href="https://github.com/AdityaKonduri79/ReactCalculator" target="_blank">  <Button> Github Link</Button> </a>
  </Card.Body>
</Card>
</div>
</div>);
}
ReactDOM.render(<Calculator/>,  document.getElementById('root'));

//<Completed value={this.state.right}>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
