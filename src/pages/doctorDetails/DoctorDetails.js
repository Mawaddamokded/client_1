import React from "react";
import {  Row, Col } from "reactstrap";
import Appointment from "./Appointment";
import SectionHeading from "../../components/header/SectionHeading";
function DetailsDoc({ docteur, match }) {

  const doct = docteur.find(
    (el) => el.id_docteur.toString() === match.params.id_docteur
  );
  let phot=`/${doct.photo}`
  return (
    <div className="card">
       <SectionHeading
          classes="sec-title center "
          title="Docteur"
        />
      <div className="boxdetail detail  ">
        <Row>
          <Col>
            {" "}
            <div className="socialm d-flex  justify-content-around">
              <li>
                <a href={doct.google_link}>
                  <i className="fas fa-envelope-open"></i>
                </a>
              </li>
              <li>
                <a href={doct.facebook_link}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={doct.twitter_link}>
                  {" "}
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </div>
          </Col>
          <Col>
            <div className="avatar-flip">
              <img src={phot} height="160" width="160" alt="" />
              <img src={doct.photo} height="160" width="160" alt="" />
            </div>
          </Col>
          <Col>
            {" "}
            <div className="socialm d-flex justify-content-around">
              <li>
                <a href="#tcd-app">
                  <i className="fa fa-calendar"></i>
                </a>
              </li>
              <li>
                <a href={doct.message}>
                  <i className="fa fa-comment"></i>
                </a>
              </li>
            </div>
          </Col>
        </Row>
        <h2>
          Dr.{doct.nom_doc} {doct.prenom_doc}
        </h2>
        <h4>{doct.nom_spec}</h4>
        <p>{doct.description}</p>
        <p>
          <i className="far fa-building" aria-hidden="true"></i>{" "}
          {doct.adresse_cabinet}
        </p>
      </div>

     <Appointment/>
    </div>
  );
}

export default DetailsDoc;
