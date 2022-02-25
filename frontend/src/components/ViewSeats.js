import React from "react";
import { Switch, Route, Link, useSearchParams } from "react-router-dom";
import { get, patch, put } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useParams, useLocation } from "react-router-dom";
import {
    Container, Table, CardBody, Card, CardColumns, CardImg, CardSubtitle, CardText,
    Button, CardTitle , Modal ,ModalHeader,ModalBody,ModalFooter,Col,Alert
} from 'reactstrap';
import '../Style/plane.css';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import NavBarUser from './MyNavbarUser'



function ViewSeats() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [HasError, setHasError] = useState(false);
  const [Error, setError] = useState('');
  const [chosenSeatId, setchosenSeatId] = useState(0);
  const [chosenSeatNum, setchosenSeatNum] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (seatId,seatNum) => {
    setShow(true);
    setchosenSeatId(seatId);
    console.log(chosenSeatId)
    setchosenSeatNum(seatNum);
    console.log(chosenSeatNum)
  }
  const { TicketId } = useParams();

  async function handleReserve(chosenSeatId) {
    try {
        console.log(chosenSeatId)
      await axios.post(`http://localhost:8000/user/viewSeats/${chosenSeatId}/${TicketId}`)
      .then(
        setShow(false),
        setHasError(true),
        setError("You have Succeccfuly reserved the seat , To view your ticket please Click the button Below !")
)

    } catch (error) {
      setHasError(true);
      setError('Sorry , An error occured');
    }
  }
  let navigateBack = useNavigate();

  function handleBack() {
    navigateBack(-1)
  }
  

    const [seats, setSeats] = useState([]);
     
    const { FlightId } = useParams();
    const { Cabin } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/user/viewSeats/${FlightId}/${Cabin}/${TicketId}`).then(res => {
            console.log(res.data);
            setSeats(res.data);
        }).catch((err)=> {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
           if (err.response) {
              setHasError(true);
              setError("No Seats Available")
           }
         })
    }, []);
    return (
      <>
      <NavBarUser></NavBarUser>
     
        <div style={{backgroundColor:'#FFF'}}>
        <Container className='mt-5 mb-5'style={{backgroundColor:'#FFF'}} >
            <Modal isOpen={show} style={{marginTop:'20%'}} >
        <ModalHeader
          charCode="Y"

        >
          Confirmation
        </ModalHeader>
        <ModalBody>
          Are you Sure you want to reserve seat no: {chosenSeatNum}?
        </ModalBody>
        <ModalFooter>
          <Button
            style={{color:'#FFFFFF',backgroundColor:'#d4902a'}}
            onClick={() => handleReserve(chosenSeatId)
            }
          >
            Yes
          </Button>
          {' '}
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        
      {!(HasError) &&  <Card style={{width:'50%',marginTop:'30%',marginLeft:'10%'}}>
              <CardBody>
                <CardTitle tag="h5">
                  Available Seats in {Cabin} Cabin 
                </CardTitle>
                <Container>

                <Table>
                  <thead><tr>
                    <th>Seat Number</th>
                    <th>Cabin</th>

                  </tr>
                  </thead>

                  <tbody>


              {
              seats.map((seat) => (

                      <tr key ={seat.SeatNumber}>
                        <td>{seat.SeatNumber}</td>
                        <td>{seat.Cabin}</td>
                       
                        <td> <Button style={{color:'#FFFFFF',backgroundColor:'#d4902a'}} onClick={() => handleShow(seat._id,seat.SeatNumber)}> <AirlineSeatReclineExtraOutlinedIcon></AirlineSeatReclineExtraOutlinedIcon> Reserve </Button>

                         </td>
                      </tr>
                       ))
                      }
                      
                    </tbody>

                  </Table>

                </Container>
                
              </CardBody>
              
            </Card>}
    
            


<div>
      <Button onClick={handleBack}><ArrowCircleLeftRoundedIcon fontSize="large"></ArrowCircleLeftRoundedIcon> Back </Button>
      </div>

{HasError &&  <Col className="bg-light "> <Alert align="center" color="Success" Row > 
<a align="center" style={(Error)?{display: 'block',color:'red',fontSize:'20px'}:{display: 'none'}}><CardTitle>{Error}</CardTitle></a></Alert></Col> 
}
{HasError && 
<Link to={{ pathname:`/user/viewReserved` 
                        
                           }}className="btn btn-primary " style={{color:'#FFFFFF',backgroundColor:'#d4902a'}}>View My tickets</Link> }
            </Container>

   </div>
   </>
     )
}
export default ViewSeats;

