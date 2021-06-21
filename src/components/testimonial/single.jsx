function SingleTestimonial(props) {
	return(
		<div className="testi-item">
            <div className="testi-img">
                <img 
                    className="quote" 
                    src={props.quote} 
                    alt="Testimonial Image"
                />
            </div>
            <div className="testi-info">
                <h5 className="testi-title">{props.name}</h5>
                <div className="testi-content">
                    <p className="desc">{props.description}</p>
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial