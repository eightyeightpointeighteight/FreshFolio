import {
   Link, 
   createBrowserRouter,
   RouterProvider,
} from 'react-router-dom';
import styled from "styled-components";


const Button = styled.button`
 background-color:  transparent;
 color: #F4F5F6 ;
 padding: 10px 24px;
 margin:20px;
 border-radius: 0px;

 border: 1px solid #F4F5F6;
 text-transform: uppercase;
 cursor: pointer;
 transition: ease background-color 250ms;
 &:hover {
    background-color: #F4F5F6;
    color: black;
    font-weight: 600;
   
    
 }
 
`

 const ButtonLink = ({to, children}) 
    return (
    <Link to={to}><Button>{children}</Button></Link>;
    )
 

   createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    
    
      
    );
