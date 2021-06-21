import { Container, Row, Col } from 'reactstrap';

import SingleTestimonial from './single';

import quoteImage from '../../assets/images/arrows/quote.png';

function Testimonial() {
	return(
	    <div id="tcd-testimonial" className="tcd-testimonial">
	        <Container>
	            <div className="testimonial-area testi-watermark-text">
	                <Row className="testi-slider">
	    	            <Col>
							<SingleTestimonial 
								imgClass="quote"
								quote={quoteImage}
								name="Ibrahim Riaz" 
								description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
								ipsum..."
							/>
	    	            </Col> 
	                </Row>
	            </div>
	        </Container> 
	    </div>
	)
}

export default Testimonial