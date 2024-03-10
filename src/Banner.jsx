import styled from "styled-components";

const Banner = () => {
  return (
<Section>

<div className="container-fluid">
<div className="banner">
<div className="info">
<div className="heading">
<h2>NEW</h2>
<h2>ARRIVAL</h2>
<p> Explore the allure of our latest beauty essentials</p>
</div>

<div className="image">
<img src="/public/new arrival.jpg"></img>

</div>
</div>


<div className="shop">
<span>SHOP NOW</span>
</div>

</div>

</div>


</Section>
  )
}

export default Banner

const Section=styled.div`

margin-top: 80px;
margin-bottom: 20px;
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');


  .banner {
    background: url('/bg.png');
    background-size: cover;
    height: 300px;
    position: relative;
    border-radius: 10px;
  }

  .info{
    display: flex;
    justify-content: space-between;
  }

  .image img{
    width: 350px;
    height: 300px;
    padding-right: 80px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-radius: 54px;
  }

  .heading{
    padding-left: 150px;
    padding-top: 80px;
    color: #b8a38b; 
  }

  .heading h2{
    font-size: 2.5rem;
    font-family: "Playfair Display", serif;
    font-weight: 600;
  }

  .heading p{
    font-size: 20px;
  }

.shop{
    position: absolute;
    bottom: 5%;
    left: 20%;
    font-size: 24px;
    //margin-top: 20px;//
    padding-left: 13px;
    padding-right: 10px;
    border: 1px solid black;
    background-color: #2d2f4a;
    color: white;
}
`;