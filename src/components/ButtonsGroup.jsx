import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import '../styles/ButtonsGroup.css';
const ButtonsGroup = () => {
  return (
    <section className="d-block">
    <section className="d-flex justify-content-center">
          <Button className="button col-2" >Sukkur</Button>
          <Button className="button col-2">Karachi</Button>
          <Button className="button  col-2">Lahore</Button>
          <Button className="button col-2">Hyderabad</Button>
    </section>
    <section className="d-flex justify-content-center">
          <Button className="button col-2" >Thatta</Button>
          <Button className="button col-2">Sahiwal</Button>
          <Button className="button  col-2">Gujrat</Button>
          <Button className="button col-2">Quetta</Button>
    </section>
    <section className="d-flex justify-content-center">
          <Button className="button col-2" >Sargodha</Button>
          <Button className="button col-2">Sahiwal</Button>
          <Button className="button  col-2">Islamabad</Button>
          <Button className="button col-2">Bahawalpur</Button>
    </section>
    <section className="d-flex justify-content-center">
          <Button className="button col-2" >Gujranwala</Button>
          <Button className="button col-2">Faisalabad</Button>
          <Button className="button  col-2">Murre</Button>
          <Button className="button col-2">Rawalpindi</Button>
    </section>
    <section className="d-flex justify-content-center">
          <Button className="button col-2" >Multan</Button>
          <Button className="button col-2">Quetta</Button>
          <Button className="button  col-2">Rahim Yar Khan</Button>
          <Button className="button col-2">Mehrabpur</Button>
    </section>
  </section>
  )
}
export default ButtonsGroup;