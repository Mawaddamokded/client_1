
import Axios from "axios";
import React, { useEffect, useState} from 'react'
import { Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
export default function DocSubscribe() {
  const [numReg, setNumReg] = useState("");
  const [prenomReg, setPrenomReg] = useState("");
  const [loginReg, setLoginReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nomReg, setNomReg] = useState("");
  const [adresseReg, setAdresseReg] = useState("");
  const [twitterReg, setTwitterReg] = useState("");
  const [facebookReg, setFacebookReg] = useState("");
  const [googleReg, setGoogleReg] = useState("");
  const [villeReg, setVilleReg] = useState([]);
  const [specReg, setSpecReg] = useState([]);
  const [genreReg, setGenreReg] = useState("");
  const [descriptionReg, setDescriptionReg] = useState("");
  const [photoReg, setPhotoReg] = useState();
  const [cvReg, setCvReg] = useState();
  const [recipientID, setRecipientID] = useState(1);
  const [villeID, setVilleID] = useState(1);
  const [progress, setProgess] = useState(0); // progess bar  
/*   const el1 = useRef(); */


  Axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    setProgess(0)
    const photoReg = e.target.files[0]; // accessing file
    console.log(photoReg)
    setPhotoReg(photoReg); // storing file
}
const handleChange1 = (e) => {
  const cvReg = e.target.files[0]; // accessing file
  console.log(cvReg);
  setCvReg(cvReg); // storing file
}

  const docUploadHandler = () => {

  const formData = new FormData(); 
    formData.append('num_tel', numReg);
    formData.append('nom_doc', nomReg);
    formData.append('prenom_doc', prenomReg);
    formData.append('login', loginReg);
    formData.append('password', passwordReg);
    formData.append('adresse_cabinet', adresseReg);
    formData.append('twitter_link', twitterReg);
    formData.append('facebook_link', facebookReg);
    formData.append('google_link', googleReg);
    formData.append('genre', genreReg);
    formData.append('id_ville', villeID);
    formData.append('id_spec', recipientID);
    formData.append('description', descriptionReg);   
    formData.append('photoReg', photoReg);
    formData.append('cvReg', cvReg);
    Axios.post("/cabinet/docteur/createdoctor",formData, {
     
       onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
        ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        setProgess(progress);
    }, 
    }).then(function (response) {
      console.log(response);
      console.log(loginReg)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const { /* register, */handleSubmit/* , formState: { errors }, */ } = useForm();



  useEffect(() => {
    const getSpec = async () => {
      const res = await Axios('/cabinet/docteur/spec');
 //     console.log(res.data);
      setSpecReg(res.data);}
      getSpec();
  const getVille = async () => {
    const res = await Axios('/cabinet/docteur/ville');
  //  console.log(res.data);
    setVilleReg(res.data);}
    getVille();
 

}, [] 
  );
/*   const { register } = useForm(); */

  return (
    <div className="boxdetail detail ">
  <form onSubmit={handleSubmit(docUploadHandler)} >
      <Row>
        <Col>
        <input className="input1"/*  {...register('nom', { required: true })}  */  name="nom" type="text" onChange={(e) => { setNomReg(e.target.value); }} placeholder="Nom" /></Col>
        <Col>
        <input className="input1"  /* {...register('prenom', { required: true })}  */ name="prenom" type="text" onChange={(e) => { setPrenomReg(e.target.value); }} placeholder="Prenom" /></Col>
      </Row>
      <Row>
        <Col>
        <select name="genre"  /* {...register('genre', { required: true })}  */  className="input1" type="text" onChange={(e) => { setGenreReg(e.target.value); }} placeholder="Genre" >
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            </select></Col>
      
      </Row>
      <input name="email" /*  {...register('email', { required: true })} */  className="input1" type="text"  onChange={(e) => { setLoginReg(e.target.value); }} placeholder="Email" />
 


      <input name="password" /* {...register('password', { required: true })}  */   className="input1" type="password" onChange={(e) => { setPasswordReg(e.target.value); }} placeholder="Mot de passe" />


      <input className="input1"/*  {...register('num', { required: true })}  */  name="num" type="number" onChange={(e) => { setNumReg(e.target.value); }} placeholder="Numéro telephone" />
      <input className="input1" /* {...register('adre', { required: true })} */  name="adre" type="text" onChange={(e) => { setAdresseReg(e.target.value); }} placeholder="Addresse cabinet" />
      <input className="input1" /* {...register('twitt', { required: true })} */  name="twitt" type="text" onChange={(e) => { setTwitterReg(e.target.value); }} placeholder="Twitter" />
      <input className="input1" /* {...register('fb', { required: true })}  */  name="fb" type="text" onChange={(e) => { setFacebookReg(e.target.value); }} placeholder="Facebook" />
      <input className="input1" /* {...register('goog', { required: true })} */  name="goog" type="text" onChange={(e) => { setGoogleReg(e.target.value); }} placeholder="Google" />    


 
    <select  type="number"  /* {...register('ville', { required: true })} */  onChange={e => setVilleID(Number(e.target.value))} className="input1" name="Ville" >
         { villeReg.map((ville,i) => (
            <option  key={i} value={ville.id_ville} >{ville.nom_ville}</option>  
           ))} 
      </select> 





    <select type="number" /* {...register('spec', { required: true })}  */ onChange={e => setRecipientID(Number(e.target.value))} className="input1" name="Spécialité" >
         {(specReg).map((spec,i) => (
       <option key={i} value={spec.id_spec} > {spec.nom_spec}   </option>  ))}  
      </select> 
      <input  /* {...register('photoReg', { required: true })}  */ className="input1" type="file" name='photoReg' onChange={handleChange} placeholder="photo" />
      <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
      <input className="input1" /* {...register('cvReg', { required: true })}  */ type="file" name='cvReg' onChange={handleChange1} placeholder="photo" />
      <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
      <input className="input1" /* {...register('desc', { required: true })} */ name='desc' type="text" onChange={(e) => { setDescriptionReg(e.target.value); }} placeholder="Description" />
    {/* 
      <button className="button1"    onClick={docUploadHandler}  >S'inscrire</button>
   */}
    <input  className="button1"  type="submit" />
    </form>
    </div>
  )
}
