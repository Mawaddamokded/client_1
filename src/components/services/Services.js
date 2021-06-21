import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../header/SectionHeading';
import SingleService from './singleService';

import servicesIcon1 from '../../assets/images/services/1.svg';
import servicesIcon2 from '../../assets/images/services/2.svg';
import servicesIcon3 from '../../assets/images/services/3.svg';
import servicesRightShape from '../../assets/images/services/services-right-shape.png';


function Services() {
	return(
	    <div id="tcd-services" className="tcd-services">
	        <Container>
				<SectionHeading
					classes="sec-title center mb-40"
					title="Our Specialist"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation..."
				/>
	            <Row>
					<Col lg="9" md="12">
						<SingleService 
							className="single-services mb-70 sm-mb-50"
							img={servicesIcon1}
							Link="#"
							title="Medical Investigation" 
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
						/>
						
						<SingleService 
							className="single-services left-gap mb-70 sm-mb-50"
							img={servicesIcon2}
							Link="#"
							title="Admission" 
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
						/>

						<SingleService 
							className="single-services"
							img={servicesIcon3}
							Link="#"
							title="Dedicated Lounge" 
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
						/>
	                </Col>
	            </Row>
	        </Container>
			<div className="shape-img hidden-md">
				<img 
					src={servicesRightShape} 
					alt="Services Shape Image"
				/>
			</div>
	    </div>
	)
}

export default Services