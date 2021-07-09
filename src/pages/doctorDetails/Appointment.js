import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionHeading from "../../components/header/SectionHeading";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr-CA";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Appointment = () => {
  const [temps, setTemps] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dayReg, setDayReg] = useState([]);
  const [dateState, setDateState] = useState(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [num, setNum] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [genre, setGenre] = useState("");
  const [adresse, setAdresse] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState(""); 
  let schema = yup.object().shape({
    //    Day: yup.date().required(),
    Temps: yup.number().typeError("* Choisir temps de rendez-vous"),
    Login: yup.string().typeError("* Ecrire votre adresse e-mail"),
    Password: yup
      .string()
      .required(
        "* Ecrire votre mot de passe"
      ) /* typeError("* Ecrire votre mot de passe"), */,
    Telephone: yup.number().typeError("* Ecrire votre numero de telephone"),
    Nom: yup
      .string()
      .required("* Ecrire votre nom") /* typeError("* Ecrire votre nom"), */,
    Prenom: yup
      .string()
      .required(
        "* Ecrire votre prenom"
      ),
  //  Birthday: yup.date().typeError("* Insérer votre date de naissance"),
/*     Genre: yup
      .string()
      .required("* Cocher votre genre") /* typeError("Cocher votre genre"), */ 
    Adresse: yup
      .string()
      .required(
        "* Ecrire votre adresse"
      ) /* typeError("* Ecrire votre adresse"), */,
  });
  const { register,handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema),  });

  let birth = `${year}-${month}-${day}`;
  console.log(birth);
  const history = useHistory();
  const onSubmit = (error) => {
    axios
      .post("/cabinet/docteur/rdv", {
        nom_p: nom,
        prenom_p: prenom,
        num_tel: num,
        login: login,
        date_naissance: birth,
        sexe: genre,
        adresse: adresse,
        password: password,
        jour: dateState,
        id_temps: temps,
      })
      .then((response) => {
        console.log(response);
        console.log(error);
        console.error();
      })
      .then(history.push("/modif"));
  };
  
  const dateSubmit = async (date) => {
    const res = await axios.get(
      `/cabinet/docteur/rdvdispo?&jour=${moment(date).format("YYYY-MM-DD")}`
    );
    setDayReg(res.data);
    console.log("temps", temps);
  };
  console.log("day", dateState);
  console.log("temps", temps);
  const isWeekday = (date) => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  console.log(genre);
  return (
    <div>
      <Container>
        <SectionHeading
          classes="sec-title center mb-40"
          title="Réserver votre rendez-vous"
        />
        <div id="tcd-app" className="boxdetail detail">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" detail">
              <label>Selectionner votre rendez vous en 2 étapes: </label>
              <Row>
                <Col>
               {/*   <label>Jour</label> */}
                  <DatePicker
                    onChange={(date) =>
                      setDateState(moment(date).format("YYYY-MM-DD")) +
                      dateSubmit(date)
                    }
                    locale={fr}
                    className="form-control"
                    minDate={new Date()}
                   /*  selected={setDateState} */
                    dateFormat="dd/MM/yyyy"
                    placeholderText="date de rendez-vous"
                    filterDate={isWeekday}
                    type="number"
                  />
                  <p>{errors.Day?.message}</p>
                </Col>
                <Col>
                  <select
                    type="number"
                    onChange={(e) => {
                      setTemps(Number(e.target.value));
                    }}
                    className="form-control"
                    name="temps"
                    placeholder="vous devez choisir le jour de rendez-vous"
                  >
                    <option value="">Heure de rendez-vous</option>
                    {dayReg.map((temps_consultation, i) => (
                      <option key={i} value={temps_consultation.id_temps}>
                        {temps_consultation.temps}
                      </option>
                    ))}
                  </select>
                  <p>{errors.Temps?.message}</p>
                </Col>
              </Row>
            </div>
            <label>Nom:</label>
            <input
              {...register("Nom")}
              className="input1"
              onChange={(e) => {
                setNom(e.target.value);
              }}
              placeholder="Nom"
            ></input>
            <p>{errors.Nom?.message}</p>
            <label>Prenom:</label>
            <input
              {...register("Prenom")}
              className="input1"
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              placeholder="Prenom"
            ></input>
            <p>{errors.Prenom?.message}</p>
            <label>Genre:</label>

            <div
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            >
              <Row>
                <Col>
                  {" "}
                  <input type="radio" value="Homme" name="gender" /> Homme
                </Col>
                <Col>
                  <input type="radio" value="Femme" name="gender" /> Femme
                </Col>
              </Row>
            </div>
            <label>Adresse E-mail:</label>
            <input
              {...register("Login")}
              type="text"
              className="input1"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
              placeholder="Adresse email"
            ></input>
            <p>{errors.Login?.message}</p>
            <label>Mot de passe:</label>
            <input
              {...register("Password")}
              className="input1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Mot de passe"
            ></input>
            <p>{errors.Password?.message}</p>
            <label>Numéro de telephone:</label>
            <input
              {...register("Telephone")}
              className="input1"
              onChange={(e) => {
                setNum(e.target.value);
              }}
              placeholder="Numéro de telephone"
            ></input>
            <p>{errors.Telephone?.message}</p>
            <label>Date de naissance:</label>
            <Row>
              <Col xs="6" sm="4">
                {" "}
                <select
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                  className="input1"
                  name="month"
                >
                  <option value="">Mois</option>
                  <option value="01">Janvier</option>
                  <option value="02">Fevrier</option>
                  <option value="03">Mars</option>
                  <option value="04">Avril</option>
                  <option value="05">Mai</option>
                  <option value="06">Juin</option>
                  <option value="07">Juillet</option>
                  <option value="08">Aoutt</option>
                  <option value="09">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Decembre</option>
                </select>
              </Col>
              <Col xs="6" sm="4">
                <select
                  className="input1"
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                  name="day"
                >
                  <option value="">Jour</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </Col>
              <Col sm="4">
                {" "}
                <select
                  className="input1"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  name="year"
                >
                  <option value="">Anneé</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                </select>
              </Col>
            </Row>

            {/*      <Row>

        <Col xs="6"> <input type="radio" value="Homme" name="gender" /> Homme</Col>
        <Col xs="6"><input type="radio" value="Femme" name="gender" /> Femme</Col>
      </Row> */}

            {/*  <input {...register("Genre")} className="input1" onChange={(e) => { setGenre(e.target.value); }} placeholder="Genre"></input> */}
            <la>Adresse:</la>
            <input
              {...register("Adresse")}
              className="input1"
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
              placeholder="Adresse"
            ></input>
            <p>{errors.Adresse?.message}</p>
            <input className="button1" type="submit" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
