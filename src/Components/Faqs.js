function Faqs(){

    return(
        <div className="faqs--card">
            <div className="faqsHeading">
                <h1>FAQS</h1>
            </div>
           
            <div className="faqs">
            <hr/>
              <div className="faqs--left">
                <h1>I sold an pepechain, where's my BNB?</h1>
                <p>Pepechain and BNB are both cryptocurrencies, so it's possible that you sold Pepechain
                    for BNB on a cryptocurrency exchange. If that's the case case, you should check your account
                    on the exchange to see if the BNB has been deposited.was a delay in the transaction or an issue
                    with the exchange. You may need to contact their customer support team for assistance.
                </p>
              </div>
              <div className="faqs--right">
              <button onClick={() => console.log("Click")}>Hide<i className="fa fa-angle-up" aria-hidden="true"></i></button>
              </div>
            </div>
            <hr/>
            <div className="faqs">
              <div className="faqs--left">
                <h1>How can I fist my pepechain collection on the market</h1>
                {/* <p>Pepechain and BNB are both cryptocurrencies, so it's possible that you sold Pepechain
                    for BNB on a cryptocurrency exchange. If that's the case case, you should check your account
                    on the exchange to see if the BNB has been deposited.was a delay in the transaction or an issue
                    with the exchange. You may need to contact their customer support team for assistance.
                </p> */}
              </div>
              <div className="faqs--right">
              <button className="">Details<i className="fa fa-angle-down" aria-hidden="true"></i></button>
              {/* <details>
                <p>Pepechain and BNB are both cryptocurrencies, so it's possible that you sold Pepechain
                    for BNB on a cryptocurrency exchange. If that's the case case, you should check your account
                    on the exchange to see if the BNB has been deposited.was a delay in the transaction or an issue
                    with the exchange. You may need to contact their customer support team for assistance.
                </p>
                </details> */}
              </div>
            </div>
            <hr/>
            <div className="faqs">
              <div className="faqs--left">
                <h1>What are the fees?</h1>
                {/* <p>Pepechain and BNB are both cryptocurrencies, so it's possible that you sold Pepechain
                    for BNB on a cryptocurrency exchange. If that's the case case, you should check your account
                    on the exchange to see if the BNB has been deposited.was a delay in the transaction or an issue
                    with the exchange. You may need to contact their customer support team for assistance.
                </p> */}
              </div>
              <div className="faqs--right">
              <button className="">Details<i className="fa fa-angle-down" aria-hidden="true"></i></button>
              </div>
            </div>
            {/* <div className="faq-background">

            </div> */}
        </div>
    )
}

export default Faqs