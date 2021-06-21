function SectionHeading(props) {
	return(
        <div className={props.classes}>
            <h2 className="title">{props.title}</h2>
            <p className="desc">{props.description}</p>
        </div>
	)
}

export default SectionHeading 