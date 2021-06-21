import React, { Component } from "react";
import axios from "axios";

class DocSubscribe extends Component {
  constructor() {
    super();
    this.state = {
      specialite: [],
      ville: [],
      nom_doc: "",
      prenom_doc: "",
      adresse_cabinet: "",
      description: "",
      id_spec: "",
      num_tel: "",
      google_link: "",
      facebook_link: "",
      twitter_link: "",
      login: "",
      password: "",
      id_ville: "",
    };
    this.setNomDoc = this.setNomDoc.bind(this);
    this.setPrenomDoc = this.setPrenomDoc.bind(this);
    this.setEmailDoc = this.setEmailDoc.bind(this);
    this.setSpecDoc = this.setSpecDoc.bind(this);
    this.setVilleDoc = this.setVilleDoc.bind(this);
    this.setCabinetDoc = this.setCabinetDoc.bind(this);
    this.setNumDoc = this.setNumDoc.bind(this);
    this.setPasswordDoc = this.setPasswordDoc.bind(this);
    this.setDescriptionDoc = this.setDescriptionDoc.bind(this);
    this.setGoogDoc = this.setGoogDoc.bind(this);
    this.setFacebookDoc = this.setFacebookDoc.bind(this);
    this.setTwitterDoc = this.setTwitterDoc.bind(this);
    this.docUploadHandler = this.docUploadHandler.bind(this);
  }

  setNomDoc = (event) => {
    this.setState({ nom_doc: event.target.value });
  };
  setPrenomDoc = (event) => {
    this.setState({ prenom_doc: event.target.value });
  };
  setEmailDoc = (event) => {
    this.setState({ login: event.target.value });
  };
  setSpecDoc = (event) => {
    this.setState({ id_spec: event.target.value });
  };
  setVilleDoc = (event) => {
    this.setState({ id_ville: event.target.value });
  };
  setCabinetDoc = (event) => {
    this.setState({ adresse_cabinet: event.target.value });
  };
  setNumDoc = (event) => {
    this.setState({ num_tel: event.target.value });
  };
  setPasswordDoc = (event) => {
    this.setState({ password: event.target.value });
  };
  setDescriptionDoc = (event) => {
    this.setState({ description: event.target.value });
  };
  setGoogDoc = (event) => {
    this.setState({ google_link: event.target.value });
  };
  setFacebookDoc = (event) => {
    this.setState({ facebook_link: event.target.value });
  };
  setTwitterDoc = (event) => {
    this.setState({ twitter_link: event.target.value });
  };

  componentDidMount() {
    axios.get("/cabinet/docteur/spec").then((res) => {
      console.log(res);
      this.setState({ specialite: res.data });
    });
    axios.get("/cabinet/docteur/ville").then((res) => {
      console.log(res);
      this.setState({ ville: res.data });
    });
  }

  docUploadHandler() {
    console.log(this.state);
    axios.post(`http://localhost:3000/cabinet/docteur/upload`,this.state).then((res) =>{
      this.setState({ nom_doc: res.data });
      this.setState({ prenom_doc: res.data });
      this.setState({ adresse_cabinet: res.data });
      this.setState({ description: res.data });
      this.setState({ id_spec: res.data });
      this.setState({ num_tel: res.data });
      this.setState({ google_link: res.data });
      this.setState({ facebook_link: res.data });
      this.setState({ twitter_link: res.data });
      this.setState({ login: res.data });
      this.setState({ password: res.data });
      this.setState({ id_ville: res.data });
      console.log(res.data);
    })
  }

  render() {
    const { specialite } = this.state;
    const { ville } = this.state;
    let specialiteList =
      specialite.length > 0 &&
      specialite.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_spec}
          </option>
        );
      }, this);

    let villeList =
      ville.length > 0 &&
      ville.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.nom_ville}
          </option>
        );
      }, this);
    return (
      <div id="main-registration-container">
        <div id="register">
          <div className="container d-flex">
            <div className="col">
              <input
                placeholder="Nom"
                type="text"
                name="nom_doc"
                value={this.state.value}
                onChange={this.setNomDoc}
              />
            </div>

            <div className="col">
              <input
                placeholder="Prenom"
                type="text"
                name="nom_doc"
                value={this.state.value}
                onChange={this.setPrenomDoc}
              />
            </div>
          </div>
          <div className="container d-flex">
            <input
              placeholder="Email"
              type="text"
              name="emailid"
              value={this.state.value}
              onChange={this.setEmailDoc}
            />
          </div>

          <input
            value={this.state.value}
            onChange={this.setCabinetDoc}
            placeholder="Adresse de cabinet"
            type="text"
            name="Description"
          />
          <input
            placeholder="Numéro téléphone"
            type="text"
            name="mobileno"
            value={this.state.value}
            onChange={this.setNumDoc}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            value={this.state.value}
            onChange={this.setPasswordDoc}
          />
          <input
            placeholder="Description..."
            type="text"
            name="Description"
            onChange={this.setDescriptionDoc}
          />
          <input
            placeholder="Adresse google"
            type="text"
            name="link"
            onChange={this.setGoogDoc}
            value={this.state.value}
          />
          <input
            placeholder="Adresse facebook"
            value={this.state.value}
            type="text"
            name="link"
            onChange={this.setFacebookDoc}
          />
          <input
            placeholder="Adresse twitter"
            type="text"
            name="link"
            onChange={this.setTwitterDoc}
            value={this.state.value}
          />
          <div className="col">
            <select
              name="Spécialité"
              value={this.state.value}
              onChange={this.setSpecDoc}
              id="arround"
              className="form-control"
            >
              <option value>Spécialite</option>
              {specialiteList}
            </select>
          </div>
          <div className="col">
            <select
              onChange={this.setVilleDoc}
              name="Ville"
              id="arround"
              value={this.state.value}
              className="form-control"
            >
              <option value>Ville</option> {villeList}
            </select>
          </div>
          <button
            type="button"
            className="button1"
            onClick={this.docUploadHandler}
          >
            {" "}
            Upload
          </button>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default DocSubscribe;
