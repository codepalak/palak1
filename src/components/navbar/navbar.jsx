
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import React, { useState } from 'react';


function Navbar() {
   
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
    <div><img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'/></div>
    <div>
    
  <Popover gap="10px">
  <PopoverTrigger >
    <Button>mens</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>TOP WEAR</PopoverHeader>
    <PopoverBody>Printed T-Shirts </PopoverBody>
    <PopoverBody>Oversized T-shirts </PopoverBody>
    <PopoverBody>Classic Fit T-shirts </PopoverBody>
    <PopoverBody>Plain T-Shirt</PopoverBody>
    <PopoverBody>Half Sleeve T-Shirts </PopoverBody>
    <PopoverBody>Polo T-Shirts</PopoverBody>
    <PopoverBody>Full Sleeve T-Shirts</PopoverBody>
    <PopoverHeader>Bottom wear</PopoverHeader>
    <PopoverBody>Joogers</PopoverBody>
    <PopoverBody>Jeans</PopoverBody>
    <PopoverBody>Pajams</PopoverBody>
    <PopoverBody>cargo</PopoverBody>
    <PopoverBody>Trousers</PopoverBody>
    <PopoverHeader>Winter wear</PopoverHeader>
    <PopoverBody>Jackets</PopoverBody>
    <PopoverBody>Sweatshirt, Hoddies</PopoverBody>
    <PopoverBody>Sweater</PopoverBody>
    <PopoverBody>Full- sleeves T shirt</PopoverBody>
    <PopoverHeader>Foot wear</PopoverHeader>
    <PopoverBody>Casual Shoes</PopoverBody>
    <PopoverBody>Formal Shoes</PopoverBody>
    <PopoverBody>Slippers</PopoverBody>
    <PopoverBody>Slidder</PopoverBody>
    <PopoverBody> </PopoverBody>
    
    
    
    
  </PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger>
    <Button>Womens</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Top wear</PopoverHeader>
    <PopoverBody>Printed T-shirt</PopoverBody>
    <PopoverBody> Boyfriend T-shirt</PopoverBody>
    <PopoverBody> Oversized T-shirt</PopoverBody>
    <PopoverBody> Kurta Sets</PopoverBody>
    <PopoverBody>Cord- Sets</PopoverBody>
    <PopoverBody>Half-Seelves T shirt</PopoverBody>
    <PopoverBody>Fashion Top </PopoverBody>
    <PopoverBody> T-shirt combo</PopoverBody>


    <PopoverHeader>Bottomwear</PopoverHeader>
    <PopoverBody>Prachute Jeans</PopoverBody>
    <PopoverBody>Jeans</PopoverBody>
    <PopoverBody>Pajma,Trousers</PopoverBody>
    <PopoverBody>Cord Set</PopoverBody>
    <PopoverBody>Cargo Pants</PopoverBody>
    <PopoverBody>ALl Bootomwear</PopoverBody>



    <PopoverHeader>winter wear</PopoverHeader>
    <PopoverBody>Jackets</PopoverBody>
    <PopoverBody>Sweater</PopoverBody>
    <PopoverBody>Joggers</PopoverBody> 
    <PopoverBody>Plus Size</PopoverBody>
    <PopoverBody>Sweat shirt, Hoodies</PopoverBody>





    <PopoverHeader>Accesories</PopoverHeader>
    <PopoverBody>Slider</PopoverBody>
    <PopoverBody>Cap</PopoverBody>
    <PopoverBody>Sling Bag</PopoverBody>
    <PopoverBody>Bag Pack</PopoverBody>
    <PopoverBody>Jwellery</PopoverBody>
    <PopoverBody>Watch</PopoverBody>
    

    
    





    <PopoverHeader>Foot wear</PopoverHeader>
    <PopoverBody>Casual Heels,</PopoverBody>
    <PopoverBody>Shoes</PopoverBody>
    
  </PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger>
    <Button>Mobile covers</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Apple</PopoverHeader>
    <PopoverBody> I-phon15 pro max</PopoverBody>
    <PopoverBody>T-phone 15</PopoverBody>
    <PopoverBody> I-Phone 14</PopoverBody>
    <PopoverBody> I-Phone 13</PopoverBody>
    <PopoverHeader>Samsung</PopoverHeader>
    <PopoverBody>z fold 4 india </PopoverBody>
    <PopoverBody>Galaxy S-24</PopoverBody>
    <PopoverBody>Galaxy S-23 FE</PopoverBody>
    <PopoverBody> Galaxy A54 5G</PopoverBody>
    <PopoverHeader>Vivo</PopoverHeader>
    <PopoverBody>Vivo v3 </PopoverBody>
    <PopoverBody>Vivo V5</PopoverBody>
    <PopoverBody>Vivo V5S </PopoverBody>
    <PopoverBody>Vivo 7+</PopoverBody>
    <PopoverHeader>RealMe</PopoverHeader>
    <PopoverBody>Realme 10S</PopoverBody>
    <PopoverBody>Realme 8 5g</PopoverBody>
    <PopoverBody> Realme 10 pro</PopoverBody>
    <PopoverBody> </PopoverBody>
    

  </PopoverContent>
</Popover>


    </div>
    <div>
    <Input placeholder='search' />
    </div>
    <div><button>login</button></div>
    <div><button><img style={{width:"50px",height:"50px"}} src="https://tse1.mm.bing.net/th?id=OIP.jWERlnhZTAeFYwFVImxfywHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="cart" /></button></div>
    </div>
    <div>
      
    </div>
   
    

</>

  )
}


export default Navbar