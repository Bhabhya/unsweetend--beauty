import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <Nav>
    <div className='container-fluid'>
    <div className='nav'>
    <div className='image'>
    <div className='pic'>
    <img src='/public/logo.jpg'></img>
    </div>
    <strong className='para'>Unsweetend Beauty</strong>

    </div>
    
    <div className='list'>
    <ul >
    <Link to='/' className='li'>Home</Link>
    <Link to='/serve' className='li'>What we serve</Link>
    <Link to='/benefits' className='li'>Our Benefits</Link>
    </ul>
    
    </div>

    <div className='search'>
    <SearchIcon className='searchicon'></SearchIcon>
    <input type='text' placeholder='search for products'></input>
    <Button className='btn'>Search</Button>
    
    </div>

    
<div className='icons'>
<ShoppingCartOutlinedIcon style={{ fontSize: '30px' }}></ShoppingCartOutlinedIcon>
<FavoriteBorderIcon style={{ fontSize: '30px' }}></FavoriteBorderIcon>
    
    </div>
    </div>
    
    </div>
    
      
    </Nav>
    
  )
}

export default Navbar


const Nav=styled.div`


background-color: #b185b1;
border: 1px solid rgba(0,0,0,0.1);
width: 100%;
padding-bottom: 12px;



.nav{
    //background-color: palegoldenrod;//
    display: flex;
    
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 20px;
    
}

.list{
    //background-color: gray;//
    margin-left: 30px;
    
}
.list ul{
    display: flex;
   align-items: center;
    justify-content:center;
    gap: 25px;
    padding-top: 5px;
}

.li{
    text-decoration: none;
    font-size: 18px;
    color: #000;
}

.li:hover{
    text-decoration: underline;
    cursor: pointer;
}


.image{
    display: flex;
    gap: 10px;
}
.image img{
    height: auto;
    width: 50px;
    padding-bottom: 20px;
   
}

.para{
    font-size: 25px;
}

.search{
    //background-color: green;//
    margin-left: 40px;
    display: flex;

}

.search input{
    //background-color: yellow;//
    width: 90%;
    height: 50px;
    padding-left: 25px;
    top: 100px;
    font-size: 20px;
    border-radius: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 20px;
   
}

.searchicon{
//background-color: white;//
position: absolute;
top: 30px;
}


Button{

    border: 1px solid black;
    height: 40px;
    color: whitesmoke;
    top: 3px;
    background-color: #3c457b;
}

Button:hover{
    background-color: #fbf36c;
    color: #000;
    border: 1px solid black;
}


.icons{
    //background-color: palegreen;//
    margin-left: 30px;
    display: flex;
    gap: 10px;
    outline: none;
    border: none;
    cursor: pointer;
}




.box{
    background-color: rgb(102, 51, 153);
    color: #fff;
}

`;