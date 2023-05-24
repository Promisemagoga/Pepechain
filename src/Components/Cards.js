function Cards(props) {
    return (
        <div className="card--column">
            <div className="cards">
                <i className="fa fa-signal" aria-hidden="true"></i>
                <img src={props.img} />
                <div className="card--info">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default Cards