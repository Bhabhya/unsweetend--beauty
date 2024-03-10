import Slider from 'react-slick';
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
      };

  return (
    <Section>
    

    <Slider {...settings}>
      <div className='item'>
        <img src='/public/beauty.jpg' className='w-100'></img>
      </div>
      <div className='item'>
        <img src='/public/image.webp' className='w-100'></img>
      </div>
      
    </Slider>


    </Section>
  )
}

export default Sliders

const Section=styled.div`
margin-top: 0px;

.item img{
    height:400px;
    overflow: hidden;
    //border-radius: 20px;//
}

`;