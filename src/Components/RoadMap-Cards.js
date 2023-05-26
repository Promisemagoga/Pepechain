function RoadMapCards(props) {
    return (
        <div className="roadmap-container">
            <hr />
            <div className="roadmap-info">
                <h2>{props.questionNo}</h2>
                <div className="roadmap-description">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div className="roadmap-details">
                    <div className="roadMap-details-row">
                        <div className="roadMap-details-column">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <h4>{props.info.no1}</h4>
                        </div>
                       <div className="roadMap-details-column">
                       <i className="fa fa-star" aria-hidden="true"></i>
                        <h4>{props.info.no2}</h4>
                       </div>
                       
                    </div>
                    <div className="roadMap-details-row">
                        <div className="roadMap-details-column">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <h4>{props.info.no3}</h4>
                        </div>
                        <div className="roadMap-details-column">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <h4>{props.info.no4}</h4>
                        </div>
                       
                    </div>

                </div>
            </div>
            <br />
        </div>
    )
}

export default RoadMapCards