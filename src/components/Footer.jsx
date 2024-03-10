import styled from 'styled-components'
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShopIcon from '@mui/icons-material/Shop';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Footer = () => {
    
    const handleclick1=()=>{
        const instagram_url='https://www.instagram.com/unsweetened.beauty/'
        window.open(instagram_url, '_blank');
    }

    const handleclick2=()=>{
        const youtube_url='https://www.youtube.com/@unsweetenedbeauty'
        window.open(youtube_url, '_blank');
    }

    const handleclick3=()=>{
        const linkedin_url='https://www.linkedin.com/company/unsweetened-beauty'
        window.open(linkedin_url, '_blank');
    }

    const handleclick4=()=>{
        const googleplaystore_url='https://play.google.com/store/apps/details?id=com.unsweetenedbeauty&hl=en_US&pli=1'
        window.open(googleplaystore_url, '_blank');
    }

  return (
    <Section>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-3 part-1'>
    <div className='heading'>
    <div className='top'>
    <img src='/public/logo.jpg'></img>
    <h2>UNSWEETEND BEAUTY</h2>
    </div>

    <h5>SKINCARE COMMUNITY</h5>
    <p>Unbaised recommendations for your unique beauty needs</p>
    </div>

    <div className='image'>
    <img src='/public/footer.jpg'></img>
    </div>

    <br/>

    <div className='btn'>
    <Button onClick={handleclick1}><InstagramIcon></InstagramIcon>Instagram</Button>
    <Button onClick={handleclick2}><YouTubeIcon></YouTubeIcon>You Tube</Button>
    <Button onClick={handleclick3}><LinkedInIcon></LinkedInIcon>Linked In</Button>
    <Button onClick={handleclick4}><ShopIcon></ShopIcon>Google Play</Button>
    
    </div>

    <div>
    
    
    </div>
    </div>

    <div className='col-md-3 part-2'>
    <div className='icon'>
    <EmailOutlinedIcon style={{color:'white',fontSize:'45px'}}></EmailOutlinedIcon>
    <h6>ask@unsweetendbeauty.com</h6>
    </div>
    
    <br/>

    <div className='icon'>
    <LocationOnOutlinedIcon style={{color:'white',fontSize:'40px'}}></LocationOnOutlinedIcon>
    <h6>Hyderabad, Telangana 500034</h6>
    
    </div>
    
    </div>

    <div className='col-md-3 part-3'>
    <div className='list'>
    <ul>
    
    <li>About</li>
    <li>Products</li>
    <li>Blogs</li>
    <li>Contact</li>
    
    </ul>
    
    </div>
    
    
    </div>
    
    
    </div> 
    
    </div>
    
    <div className='section'>
    <h3>Terms & Conditions</h3>
    <h3>Privacy Policy</h3>
    <div className='name'>
    <h7>2024,UnsweetendBeauty</h7>
    </div>
    
    </div>
    </Section>

  )
}

export default Footer

const Section=styled.div`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

background-color: #3c457b;
padding-top: 40px;
margin-top: 50px;



.part-1{
    margin-left: 100px;
    
}

.heading h2{
    color: #f8f05c;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
}

.heading h5{
    color: whitesmoke;
    font-size: 20px;
}

.heading p{
    color: #fff;
}

.top{
    display: flex;
}

.top img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
}

.btn{
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: none;
    outline: none;
}

Button{
    border: 1px solid yellow;
    border-radius: 24px;
    box-shadow: 1px 1px 1px 2px yellow;
    color: white;
    font-size: 18px;
    gap: 15px;
}

.part-2{
    margin-left: 150px;
}

.icon{
    display: flex;
    gap: 10px;
}

.icon h6{
    color: #fff;
    padding-top: 10px;
    font-size: 18px;
}

.list ul{
    margin-left: 100px;
}

.list ul li{
    list-style: none;
    color: #fff;
    padding-bottom: 30px;
    font-size: 25px;
}

.section{
    background-color: #d84b6b;
    margin-top: 50px;
    padding-left: 30px;
    display: flex;
    gap: 25px;
    text-decoration: underline;
    padding-bottom: 10px;
    color: whitesmoke;
}

.name h7{
    margin-left: 550px;
}

`;