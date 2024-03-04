
import { Tabs, TabList, TabPanels, Tab, TabPanel, textDecoration } from '@chakra-ui/react'
import React, { useState } from 'react';
import { ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons'







function Home() {
  const slides = [

    {
      image:
        'https://images.bewakoof.com/uploads/grid/app/Boyfriend-Tshirt-Women-1x1-banner--2--1709483581.jpg'
    },
    {
      image:
        'https://images.bewakoof.com/uploads/grid/app/SummerPalooza-1x1-SPACE-men-1708928166.jpg'
    },
    {
      image:
        'https://images.bewakoof.com/uploads/grid/app/Avatar-1x1-ReRun-common-ezgif-com-optimize-1709308422.gif'
    },
    {
      image:
        'https://images.bewakoof.com/uploads/grid/app/Classic-Fit-Tshirt-Common-1x1-banner-1709289795.jpg'
    },
    
    
      

  ]
  
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
    const SD = [

      {
        imge:
          'https://images.bewakoof.com/uploads/grid/app/FEB-1x1-SummerVests--1--1709217894.jpg'
      },
      {
        imge:
          'https://images.bewakoof.com/uploads/grid/app/Dresses-RM-1X1-Banner--3--1709548625.jpg'
      },
      {
        imge:
          'https://images.bewakoof.com/uploads/grid/app/Shorts-HC-banner-1x1--2--1709217892.jpg'
      },
      {
        imge:
          'https://images.bewakoof.com/uploads/grid/app/HC-BANNERS---1X1-RM---CROP-TOP--1--1709217894.png'
      },
    ]
    const [cunt, setCunt] = useState(0);
        const len = SD.length;
      
        const nextsum = () => {
          setCunt(cunt === len - 1 ? 0 : cunt + 1);
        };
      
        const prevSum = () => {
          setCunt(cunt === 0 ? len- 1 : cunt - 1);
        };
      
        if (!Array.isArray(SD) || SD.len <= 0) {
          return null;
        }
        <section className='SD'>
        <button className='left' onClick={prevSum}>
        <ArrowLeftIcon></ArrowLeftIcon>
        </button>

        {SD.slice(current, current + 3).map((SD, index) => (
          <div className='SD' key={index}>
            <img src={SD.imge} alt={`SD-${index}`} className='img' />
          </div>
        ))}

        <button className='right' onClick={nextSlide}>
        <ArrowRightIcon></ArrowRightIcon>
        </button>
      </section>
         
      
      
        
  
  return ( <>
  <div>
  <Tabs>
  <TabList gap={"30px"}>
    <Tab>Live Now</Tab>
    <Tab>Mens</Tab>
    <Tab>Womens</Tab>
    <Tab>Accessories</Tab>
    <Tab>Shop Now</Tab>
    <Tab>Heavy Duty</Tab>
    <Tab>Bewakoof Air</Tab>
    <Tab>Official Merch</Tab>
    <Tab>Plus size</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>
</p>
    </TabPanel>
    <TabPanel>
      <p></p>
    </TabPanel>
    <TabPanel>
      <p>
</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
<div></div>
    </div>
    <section className='slide'>
        <button className='left-arrow' onClick={prevSlide}>
        <ArrowLeftIcon></ArrowLeftIcon>
        </button>

        {slides.slice(current, current + 3).map((slide, index) => (
          <div className='slide' key={index}>
            <img src={slide.image} alt={`slide-${index}`} className='image' />
          </div>
        ))}

        <button className='right-arrow' onClick={nextSlide}>
        <ArrowRightIcon></ArrowRightIcon>
        </button>
      </section>
      <div style={{display:"flex",width:"100%",justifyContent:"center",gap:"10px", marginTop:"30px"}}>
        
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg'></img>
      </div>
      <div style={{marginTop:"20px"}}>
        <img src='https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif'></img>
      </div>
      <div style={{fontSize:"1em",textAlign:"center",}}>
        <p >Trending categories</p>
        <div className='grid'>
            <div><img src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg'></img> </div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg" alt="" /></div>
      </div>
      <div className='grid2'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp" alt="" /></div>
     </div>
     <div className='grid3 '>
      <div><img src="https://images.bewakoof.com/uploads/grid/app/gif-2--2--1709216937.gif" alt="" /></div>
      <div><img src="https://images.bewakoof.com/uploads/grid/app/Cargo-Joggers-Common-Desktop-midsize-banner-1709548211.jpg" alt="" /></div>
     </div>
     <div className='grid4'>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/DESKTOP-mid-size-SuperLooseTees--2--1709216936.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER-AVATAR--1--1709548421.png" alt="" /></div>
     </div>
     <div style={{marginTop:"20px", fontSize:"1em",textAlign:"center"}}>
     <p>CATEGORIES TO BAG</p>
     
     <div className='grid5'>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Shirts-men--1706511997.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-1707280972.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-women-1706514429.jpg" alt="" /></div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1706509182.jpg" alt="" /></div>
     </div>
     </div>
     <div><img src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-7-1708583279.jpg" alt="" /></div>
     </div>
     <div style={{display:"flex",width:"100%",justifyContent:"center",gap:"30px", marginTop:"30px",flexDirection:"column",alignItems:"center",alignContent:"center"}}>
      <div style={{justifyContent:"center"}}><p>TOP ACCESSORIES</p></div>
       <div style={{display:"flex",flexDirection:"row"}}>
      <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Mobile-covers-1705054649.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Sliders-1705043484.jpg'></img>
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Backpacks-1705043482.jpg'></img>
        
        <img style={{width:"125px",height:"175px"}} src='https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Caps-1705043483.jpg'></img>
        </div>
      </div>
     

  


     

  

  </>
  )
}

export default Home