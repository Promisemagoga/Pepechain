function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="aboutFirstRow">
                <div className="aboutSection">
                    <h1>About Us</h1>
                </div>
                   <div className="aboutSection-right">
                    <h1>The Layer 1 Blockchain Ecosystem Built for Memes</h1>
                    <p>Pepechain is reshaping how the meme economy is perceived.We create a conducive
                        environment for Web3 founders to build and launch innovative projects.
                    </p>
                   </div>
            </div>
            <div className="aboutSecondRow">
                <img src="./pepa-happy.jpeg" className="happy"/>
                <div className="middle">
                    <h1>The Layer 1 Blockchain Ecosystem Built for Memes</h1>
                    <p>Pepechain is reshaping how the meme economy is perceived.We create a conducive
                        environment for Web3 founders to build and launch innovative projects.
                    </p>
                   </div>
                   <img src="./pepa-sad.jpeg" className="sad"/>
            </div>
        </div>
    )
}

export default AboutUs