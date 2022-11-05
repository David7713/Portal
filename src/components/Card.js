import React from 'react'


const Card = () => {
    return (
    <div className='Card'>

  <div className='cardarea'  data-aos="fade-right"
  >
                <div className='card'>
                  <div className='frontcard'></div>
                  <div className='backcard'></div>
                </div>
  </div>

            <div className='cardarea2'   data-aos="fade-up">
                <div className='card2'>
                    <div className='frontcard2'></div>
                    <div className='backcard2'></div>
                </div>
   </div>

            <div className='cardarea3' data-aos="fade-left">
                <div className='card3'>
                    <div className='frontcard3'></div>
                    <div className='backcard3'></div>
                </div>
     </div>
            
    </div>
  )
}

export default Card
// const contentStyle = {
//     height: '700px',
//     color: '#fff',
//     // lineHeight: '160px',
//     textAlign: 'center',
//     // background: '#364d79',
    
//   };
{/* <Carousel autoplay >
    <div >
    <h3 className='miamiCarousel' style={contentStyle}>1</h3>
    </div>
    <div className='newyorkCarousel'>
      <h3 style={contentStyle}></h3>
    </div>
    <div className='miamiCarousel2'>
      <h3 style={contentStyle}></h3>
    </div>
    <div className='baltimoreCarousel'>
      <h3 style={contentStyle}></h3>
    </div>
  </Carousel> */}