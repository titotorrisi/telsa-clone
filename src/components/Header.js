import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';



const Header = (props) => {
    return (
        <Container>
             <a>
                 <img src="/images/logo.svg"/>
             </a>

            {/*Menu*/}
            <Menu>
                    <a href="#"> Model S </a>
                    <a href="#"> Model 3 </a>
                    <a href="#"> Model X </a>
                    <a href="#"> Model Y </a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>

            <CustomMenu>
                <a href="">
                    <MenuIcon/>
                </a>
            </CustomMenu>

        </Container>
    )
}

export default Header;

const Container = styled.div`
      min-height: 60px;
      position:fixed;
      display: flex;
      align-items: center; /* vertical alignment */
      justify-content:space-between;
      padding : 0 20px;
      top:0;
      left : 0;
      right : 0;
`

const Menu = styled.div`
   display:flex;
  align-items:center;
  flex:1;
  justify-content:center;
  
  a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px; 
    flex-wrap : nowrap;
  }
  
  @media (max-width:768px){
    display:none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    text-transform:uppercase;
    font-weight:600;
    margin-right:10px;
   cursor:pointer;
  }
  
`

const CustomMenu = styled.div`
  
`
