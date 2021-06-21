function SingleService(props) {
	return(
		<div className={props.className}>
            <div className="services-icon">
                <img 
                    src={props.img} 
                    alt="Service Icon"
                />
            </div>
            <div className="services-text">
                <h4 className="title"><a href={props.Link}>{props.title}</a></h4>
                <p className="desc">{props.description}</p>
            </div>
        </div>
	)
}

export default SingleService