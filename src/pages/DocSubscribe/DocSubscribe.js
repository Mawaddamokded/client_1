
import Axios from "axios";
import React, { useEffect, useState } from 'react'
import { Row, Col } from "reactstrap";
export default function DocSubscribe() {
/*   const [specialite] = useState({}); */
  const [numReg, setNumReg] = useState("");
  const [prenomReg, setPrenomReg] = useState("");
  const [loginReg, setLoginReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nomReg, setNomReg] = useState("");
  const [adresseReg, setAdresseReg] = useState("");
  const [twitterReg, setTwitterReg] = useState("");
  const [facebookReg, setFacebookReg] = useState("");
  const [googleReg, setGoogleReg] = useState("");
  const [villeReg, setVilleReg] = useState("");
  const [specReg, setSpecReg] = useState("");
  const [genreReg, setGenreReg] = useState("");
  const [descriptionReg, setDescriptionReg] = useState("");
  const [photoReg, setPhotoReg] = useState();
  const [cvReg, setCvReg] = useState([]);

  Axios.defaults.withCredentials = true;

  const docUploadHandler = (error) => {
    Axios.post("/cabinet/docteur/upload", {
      num_doc: numReg,
      nom_doc: nomReg,
      prenom_doc: prenomReg,
      login: loginReg,
      password: passwordReg,
      adresse_cabinet: adresseReg,
      twitter_link: twitterReg,
      facebook_link: facebookReg,
      google_link: googleReg,
      genre:genreReg,
      id_ville: villeReg,
      id_spec: specReg,
      description: descriptionReg,
      photo: photoReg,
      carte_visite: cvReg
    }).then((response) => {
      console.log(response);
      console.error();
    });
  }
/*   let specialiteList = specialite.length > 0 && specialite.map((item, i) => {
    return (
      <option key={i} value={item.id}> {item.nom_spec} </option>
    );
  }, this); */

  useEffect(() => {

    Axios
      .get("/cabinet/docteur/spec")
      .then((res) => {
        setSpecReg(res.data);
        console.log(res.data)
      })

      .catch((err) => console.log(err));
  }, []);

  /* 
    const { ville } = this.state;
    let villeList = ville.length > 0 && ville.map((item, i) => {
           return (
             <option key={i} value={item.id}>{item.nom_ville}</option>
              ) }, this); */

  return (
    <div className="boxdetail detail ">
      <Row>
        <Col>
        <input className="input1" type="text" onChange={(e) => { setNomReg(e.target.value); }} placeholder="Nom" /></Col>
        <Col>
        <input className="input1" type="text" onChange={(e) => { setPrenomReg(e.target.value); }} placeholder="Prenom" /></Col>
      </Row>
      <Row>
        <Col>
        <select className="input1" type="text" onChange={(e) => { setGenreReg(e.target.value); }} placeholder="Genre" >
            <option value>Homme</option>
            <option value>Femme</option>
            </select></Col>
 
      </Row>

     
      {/*             <select className="input1" type="text" onChange={(e) => { setGenreReg(e.target.value); }} placeholder="Genre" >
            <option value>Homme</option>
            <option value>Femme</option>
            </select> */}
      <input className="input1" type="email" onChange={(e) => { setLoginReg(e.target.value); }} placeholder="Email" />
      <input className="input1" type="password" onChange={(e) => { setPasswordReg(e.target.value); }} placeholder="Mot de passe" />
      <input className="input1" type="text" onChange={(e) => { setNumReg(e.target.value); }} placeholder="Numéro telephone" />
      <input className="input1" type="text" onChange={(e) => { setAdresseReg(e.target.value); }} placeholder="Addresse cabinet" />
      <input className="input1" type="text" onChange={(e) => { setTwitterReg(e.target.value); }} placeholder="Twitter" />
      <input className="input1" type="text" onChange={(e) => { setFacebookReg(e.target.value); }} placeholder="Facebook" />
      <input className="input1" type="text" onChange={(e) => { setGoogleReg(e.target.value); }} placeholder="Google" />
      <input className="input1" type="text" onChange={(e) => { setVilleReg(e.target.value); }} placeholder="Ville" />
    {/*   <select onChange={(e) => { setSpecReg(e.target.value); }} className="input1" name="Spécialité">
        <option value>Specialité</option> {specialiteList} </select> */}
      <input className="input1" type="file" onChange={(e) => { setPhotoReg(e.target.files); }} placeholder="photo" />
      <input className="input1" type="file" onChange={(e) => { setCvReg(e.target.files); }} placeholder="photo" />
      <input className="input1" type="text" onChange={(e) => { setDescriptionReg(e.target.value); }} placeholder="Description" />
      <button className="button1" onClick={docUploadHandler}>S'inscrire</button>
    </div>
  )
}
