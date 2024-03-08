import React from 'react';
import { useSelector , useDispatch} from "react-redux"
import { addToCart } from '../features/cartSlice';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  
    const items = useSelector((state)=>state.allCart.items)

    const dispatch = useDispatch();

  return (
    <div class="m-2">
     <MDBContainer>
     <MDBRow className='mb-3'>

      {items.map((item) =>(
          <MDBCol key={item.id} size='md'>  
          <MDBCard>
            <MDBCardImage src={item.img} position='top' alt='...' height="220px"/>
            <MDBCardBody>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardText>{item.price}</MDBCardText>
              <MDBBtn onClick={()=> dispatch(addToCart(item))}>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
      ))}  

    
    </MDBRow>
    </MDBContainer>
    </div>
  );
}