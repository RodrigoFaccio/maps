import React,{useState} from "react";
import Map from "./Map";
import { Container } from "./styles";
//-22.747366868989943, -45.74307889824462
export default function Location(){
  const [markersData, setMarkersData] = useState([
    {
      lat: -22.784484604676322,
      log:  -45.74552404099999,
      name:'Cachoeira'
    },
    {
      lat: -22.77967233927881,
      log:  -45.74321776537374,
      name:'Pousada'
    },
    {
      lat: -22.802172022823836, 
      log:  -45.748416432186744,
      name:'fabrica'
    },
    
     
  ])
   
 console.log(markersData)
  
    return (

      <Container>
        <Map point={markersData}/>
      </Container>

        
    );
}