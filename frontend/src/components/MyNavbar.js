import React, { useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import '../Style/Navbar.css'
import "../css/style.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();


  async function logout(e) {
    e.preventDefault();
    console.log("log out here")


    try {
        await axios.get("http://localhost:8000/authorize/logout")
        navigate('/user', { replace: true });

      }
      catch(err){
        console.error(err);

      }}

  return (
    <div>

         <header id="header" >
 				<div class="container" >
 					<div class="row">
 						<div class="col-sm-12">

                           
 							<div class="logo-nav">
 								<a href="/home">
 									<img class="logoN" src="https://i.pinimg.com/564x/66/fa/7f/66fa7fc53033d53ed3e9497cedb0ce0d.jpg" alt="Sky OverFlow" />
 								</a>
 							</div>
                       
 							<div class="clear-toggle"></div>
 							<div id="main-menu" class="collapse scroll navbar-right">
 								<ul class="nav">
                 <a> <label style={{color:'#FFFFFF',fontSize:'30px',marginLeft:'20%'}}></label></a>

                                
 									<li class="active"> <a href="/admin"> <HomeOutlinedIcon></HomeOutlinedIcon> Home</a> </li>
                   <li class="active"> <a href="/admin/createFlight">  CreateFlight</a> </li>



                                    
                                   
																		                                    
										
								</ul>
							</div>
 						</div>
 					</div>
 				</div>
 			</header>
       

    </div>
  );
}

export default Navbar;