import React , { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Appointment from "./Appointment"
import SectionHeading from '../../components/header/SectionHeading';
function DetailsDoc({ docteur, match }) {
   const [temps_consultation  ] = useState(""); 
  /*   axios.get("/cabinet/docteur/temps").then((res) => {
      console.log(res);
      this.setState({ temps_consultation: res.data });
    });
    let tempslist =
    tempslist.length > 0 &&
    tempslist.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.temps}
          </option>
        );
      }, this);  */
    axios.defaults.withCredentials = true;

     const timelist = (error) => {
      axios.get("/cabinet/docteur/temps").then((res) => {
        console.log(res);
        this.setState({ temps_consultation: res.data });
      }).then((response) => {
        console.log(response);
        console.error();
      });
    }; 
  const doct = docteur.find(
    (el) => el.id_docteur.toString() === match.params.id_docteur
  );
  console.log("doct");
 
  return (

    <div className="card">
      <div className="boxdetail detail  ">

       
          <Row>
            <Col> <div className="socialm d-flex  justify-content-around">
              <li><a href={doct.google_link}><i className="fas fa-envelope-open"></i></a></li>
              <li><a href={doct.facebook_link}><i className="fab fa-facebook-f"></i></a></li>
              <li><a href={doct.twitter_link}> <i className="fab fa-twitter"></i></a></li>
            </div></Col>
            <Col>
              <div class="avatar-flip">
                <img src={doct.photo} height="150" width="150" alt="" />
                <img src={doct.photo} height="150" width="150" alt="" />
              </div>
              </Col>
            <Col>    <div className="socialm d-flex justify-content-around">
              <li><a href="#tcd-app"><i className="fa fa-calendar"></i></a></li>
              <li><a href={doct.message}><i className="fa fa-comment"></i></a></li>
            </div></Col>
       
          </Row>
        <h2>
          Dr.{doct.nom_doc} {doct.prenom_doc}
        </h2>
        <h4>{doct.nom_spec}</h4>
        <p>{doct.description}</p>
        <p><i class="far fa-building" aria-hidden="true"></i>  {doct.adresse_cabinet}</p>
      </div>


      <Container>
        
      <SectionHeading
					classes="sec-title center mb-40"
					title="Réserver votre rendez-vous"
				/>
        <div id="tcd-app" className="boxdetail detail">
       
          <Appointment />
          <div>
            <Row >
 {temps_consultation.temps} 
              
              <Col><input value="08:20" type="button" className="time" /></Col>
              <Col><input value="08:40" type="button" className="time" /></Col>
              <Col><input value="09:00" type="button" className="time" /></Col>
              <Col><input value="09:20" type="button" className="time" /></Col>
              <Col><input value="09:40" type="button" className="time" /></Col>


            </Row>
            <Row>
              <Col><input value="10:00" type="button" className="time" /></Col>
              <Col><input value="10:20" type="button" className="time" /></Col>
              <Col><input value="10:40" type="button" className="time" /></Col>
              <Col><input value="11:00" type="button" className="time" /></Col>
              <Col><input value="11:20" type="button" className="time" /></Col>
              <Col><input value="11:40" type="button" className="time" /></Col>


            </Row>
            <Row>
              <Col><input value="12:00" type="button" className="time" /></Col>
              <Col><input value="12:20" type="button" className="time" /></Col>
              <Col><input value="12:40" type="button" className="time" /></Col>
              <Col><input value="13:00" type="button" className="time" /></Col>
              <Col><input value="13:20" type="button" className="time" /></Col>
              <Col><input value="13:40" type="button" className="time" /></Col>


            </Row>
            <Row>
              <Col><input value="14:00" type="button" className="time" /></Col>
              <Col><input value="14:20" type="button" className="time" /></Col>
              <Col><input value="14:40" type="button" className="time" /></Col>
              <Col><input value="15:00" type="button" className="time" /></Col>
              <Col><input value="15:20" type="button" className="time" /></Col>
              <Col><input value="16:40" type="button" className="time" /></Col>


            </Row>
            <Row>

              <Col><input value="17:00" type="button" className="time" /></Col>
              <Col><input value="17:20" type="button" className="time" /></Col>
              <Col><input value="17:40" type="button" className="time" /></Col>

              <Col></Col><Col></Col><Col></Col>
            </Row>
          </div>
        </div>
      </Container>

    </div>
  );
}

export default DetailsDoc;
