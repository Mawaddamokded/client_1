import React, { useEffect, useState } from "react";
import Inscription from "./connect/Inscription";
import Home from "./home/Home";
import DocSubscribe from "./DocSubscribe/DocSubscribe";
import DoctorDetails from "./doctorDetails/DoctorDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Spinner } from "reactstrap";
import Header from "../components/header/Header";
import Services from "../components/services/Services";

const Routers = () => {
  const [docteur, setDocteur] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`cabinet/docteur/`)
      .then((res) => {
        setDocteur(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="dark" className="spinner"/>;
  }
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/docteur/:id_docteur" render={(props) => <DoctorDetails {...props} docteur={docteur} />}  /> 

        <Route path="/inscrit/docteur" component={DocSubscribe} />
        <Services />
      </Router>
    </div>
  );
};

export default Routers;
