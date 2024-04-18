import {Link, Route, Routes} from 'react-router-dom';
import styled from "styled-components";


const Button = styled.button`
 background-color:  transparent;
 color: #F4F5F6 ;
 padding: 10px 24px;
 margin:20px;
 border-radius: 0px;
 border-color: #F4F5F6;
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

export default function Cta (props) {
    return (
      <div>
        <Link to='/work'>
            <Button type="button">{props.name}</Button>
        </Link>

        <Routes>
            <Route path="/Work"/>
        </Routes>
      </div>
    );
  };
  
