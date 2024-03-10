import styled from "styled-components"


const Products = () => {
  return (
    <Section>
    <div className="heading">
    <h1>Our Products</h1>
    </div>

    
    
    

    <div className="items">

    <div className="image">
    <img src="/public/lipstick.png"></img>
    <h6>Lipstick</h6>
    </div>

    <div className="image">
    <img src="/public/cream.webp"></img>
    <h6>Cream</h6>
    </div>

    <div className="image">
    <img src="/public/serum.jpg"></img>
    <h6>Serum</h6>
    </div>

    <div className="image">
    <img src="/public/lotion.webp"></img>
    <h6>Lotion</h6>
    </div>
    
    
    </div>
    
    
    
  
    
    
    </Section>
  )
}

export default Products

const Section=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
background-color:  #fcecd5;
padding-bottom: 80px;


.kanit-extralight {
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.heading{
    text-align: center;
    margin-top: 20px;
    //background-color: #b185b1;//
}

.heading h1{
    font-weight: 700;
    color: #002C54;
    text-transform: uppercase;
    font-family: verdana;
    font-size: 3em;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
}
.items{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
    background: #c8ecfa;
    //background:url('/background.jpg') ;//
}

.image img{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    z-index: 100;
}

h6{
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
}
`;