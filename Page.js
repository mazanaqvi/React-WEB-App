import React from "react";
import './Page.css';
import devlopers from "./developers.json"
import webdescrip from "./webdiscrip.json"
import { Component } from "react";


import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import cod from './cod.svg';

class Page extends Component {
   
    
    render() {
      var rows = [];
        
for (var i = 0; i < 10; i++) {
     rows.push(<section
      id="sec"
      class="p-5"
   
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md">
          <img src={devlopers.developers[i].img} width="250" height="300" />{' '}
            
          </div>
          <div class="col-8">
            <h2>
            {devlopers.developers[i].name}
              <svg
                class="orangepink"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                color="rgb(255, 178, 153)"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
              {devlopers.developers[i].ratting}
            </h2>
            <p class="lead">
            {devlopers.developers[i].since}
              <svg
                class="orangepink"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="rgb(255, 178, 153)"
                fill="currentColor"
                class="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              {devlopers.developers[i].experience}
            </p>
            <p>
              <svg
                class="lightgreen"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color="rgb(184, 204, 198)"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              {devlopers.developers[i].location}
              <svg
                
                class="lightgreen"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="rgb(184, 204, 198)"
                fill="currentColor"
                class="bi bi-globe2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                />
              </svg>
              {devlopers.developers[i].Languages}
              <svg
                
                class="lightgreen"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="rgb(184, 204, 198)"
                fill="currentColor"
                
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                />
              </svg>
              {devlopers.developers[i].projectsdone}
              <svg
                
                class="lightgreen"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="rgb(184, 204, 198)"
                fill="currentColor"
                class="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                />
              </svg>
              {devlopers.developers[i].clientcount}
            </p>
            <div>
            {devlopers.developers[i].tagline}
            </div>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[0]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[1]}</a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[2]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[3]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[4]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[5]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[6]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[7]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[8]} </a>
            <a class="lightgreenbg"> {devlopers.developers[i].tags[9]} </a>
            
          </div>
        </div>
        <button class="profilebtn" type="submit">{devlopers.developers[i].firstname}</button>
      </div>
    </section>)

    







   
}
        
        return  <div className="app">
      <Navbar classname="bg-white" bg="light"
        sticky="top" expand="lg" collapseOnSelect>
          <Container>
        <Navbar.Brand>
        <img src={cod} width="150" height="100" />{' '}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="#blog">HOW IT WORKS</Nav.Link>
           
            <NavDropdown title="WHO WE HELP" >
              <NavDropdown.Item id="nav-dropdown" href="#products/tea">Business owners</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown"href="#products/coffee">Agencies</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown"href="#products/chocolate">Freelancers</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#link"><h5 className="orangepink">DEVELOPERS</h5></Nav.Link>
            
            <Nav.Link href="#contact-us">WHY</Nav.Link>
            <Nav.Link href="#contact-us">PRICING</Nav.Link>
            <NavDropdown title="PARTNERS" >
              <NavDropdown.Item id="nav-dropdown" href="#products/tea">Partner Programs</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown"href="#products/coffee">Afiliate Programs</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown"href="#products/chocolate">Partner Directory</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown"href="#products/chocolate">Partner Login</NavDropdown.Item>
            </NavDropdown>
            
            
          </Nav>
          <Nav>
          <button class="loginbtn" type="submit">LOGIN</button>
            <button class="startproject" type="submit">START A PROJECT</button>
    </Nav>
        </Navbar.Collapse>
</Container>
      </Navbar>
      <div class="firstpara">
      <section class="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div class="firstparatext">
              <h1>{webdescrip.headdescrip}</h1>
              <p class="lead my-4">
                {webdescrip.bodydescrip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="text-dark p-5">
      <input
        type="text"
        
        placeholder="Search"
        width="30"
      />
      
    </section>
    <div>
      <p class="text-dark p-5">Showing 506 results</p>
    </div>
    <div>{rows}</div>
    <div>


<div class="onetwothree">
        <a class="darkgreen" href="#" >
          1 2 … 50 51 NEXT
        </a>
      </div>

      <div class="orangepinkbg">
      <section class="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div class="firstparatext">
              <h1>Join the network of world’s best WordPress developers.</h1>
              <button class="profilebtn" type="submit">
                APPLY AS AN EXPERT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>



    <div class="darkgreenbg">
      <section class="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="row">
            <div class="col-3 lighttext">
              <div>
                <h1>codeable</h1>
                <h2>Build with heart</h2>

                <p>
                  When you absolutely, positively need the highest quality
                  WordPress development work.
                </p>
                <p> 
                   
                    <a href=""><svg 
                    class="orangepink"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="rgb(255, 178, 153)" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg></a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="rgb(255, 178, 153)"fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                     
                </p>
              </div>
            </div>
            <div class="col lighttext">
              <div>
                <h1>Solutions</h1>
                <h2>___________</h2>

                <p>
                    Businesses</p>
                    <p>Agencies</p>
                    <p>Freelancers</p>
                
              </div>
            </div>

            <div class="col lighttext">
                <div>
                  <h1>Resourses</h1>
                  <h2>___________</h2>
  
                  
                  <p>How it works</p>
                  <p>Help Center</p>
                      <p>Blog</p>
                  
                </div>
              </div>
              <div class="col lighttext">
                <div>
                  <h1>Developers</h1>
                  <h2>___________</h2>
  
                  
                  <p>WordPress developers</p>
                  <p>WooCommerce developers</p>
                  
                  
                </div>
              </div>
              <div class="col lighttext">
                <div>
                  <h1>Company</h1>
                  <h2>___________</h2>
  
                  
                  <p>Our Story</p>
                  <p>Our Team</p>
                  
                  
                </div>
              </div>
              <div class=" lighttext">
                <div>
                  <p>2021 © Codeable <svg
                    class="orangepink"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    color="rgb(255, 178, 153)"
                    fill="currentColor"
                    class="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg> Terms of Service <svg
                  class="orangepink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  color="rgb(255, 178, 153)"
                  fill="currentColor"
                  class="bi bi-dot"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg> Privacy Policy

                    </p>
                  
                  
                  
                </div>
              </div>
          </div>
          </div>
          </section>  
        </div>
      
    </div>
        </div>  
        }
    }

    export default Page;