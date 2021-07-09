import { Container, Row, Col } from 'reactstrap';
// Assets
import callLogo from '../../assets/images/arrows/phone.svg';
import { Link } from 'react-router-dom'
function Header() {
	return(
	    <header id="tcd-header" className="tcd-header-1">
	        <div className="menu-bar menu-sticky">
	            <Container>
				<Row>
						<Col lg="1">
						<div className="logo">

							<Link to="/">
									<span>EMedical</span>
								</Link>
							</div>
							<button 
								className="mobile-menu-icon" 
								aria-label="Main Menu"
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</Col>
						<Col lg="11">
							<div className="mainmenu">
								<ul id="onepage-menu" className="nav-menu onepage-menu">
									<li><Link to="/" href="#tcd-banner">Home</Link></li>


									<li><a href="#tcd-services">Services</a></li>

									<li><a href="#tcd-team">Team</a></li>

									<li><Link to="/Inscription/patient" >Connecter</Link></li>

									<li><a href="#tcd-footer">Contact</a></li>
								</ul>
							 	<div className="contact-menu hidden-md">
									<span className="icon">
										<img 
											src={callLogo}
											alt="Phone Icon"
										/> 
									</span>
									<Link to={`/inscrit/docteur`} className="contact-number">
										<span>Espace </span>
										<span>Docteur</span>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
	            </Container>
	        </div>
	    </header>
	)
}

export default Header