function Header() {
    return (
        <header>
            <div className="header--firstPart">
                <h1><span>USHERING</span> THE</h1>
                <p>PePe Coin Bsc($PPC) token was born exclusively for the BNB smartchain blockchain inspired by
                    Pepe coin. The Inu's have had their day. it's time for the most recognizable meme in the
                    world to take his reign as king of the memes
                </p>
            </div>
            <h1 className="meme-economy">MEME ECONOMY TO THE NEXT</h1>
            <div className="header--secondPart">
                <img src="./pepe-smiling.jpeg" className="header--secondPart-img" />
                <div className="table-side">
                    <h1>LEVEL <span>PEPECHAIN</span></h1>
                    <img src="./table.jpeg" className="tableData" />
                </div>
            </div>
        </header>
    )
}

export default Header