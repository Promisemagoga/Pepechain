function Faqs(){
  // let faqElements = document.querySelectorAll(".faqs-question");
  // for(let faqElement of faqElements){
  //    faqElement.addEventListener("click", (event) => {
  //     if(event.target.nextElementSibling.styles.maxHeight === 0){
  //       event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
  //    }else{
  //       event.target.nextElementSibling.style.maxHeight = "";
  //    }
  //    });
  // }

    return(
        <div className="faqs--card">
            <div className="faqsHeading">
                <h1>FAQS</h1>
            </div>
           
            <div className="faqs">
            <hr/>
              <div className="faqs--left">
                <div className="faqs-question">
                <h1>I sold an pepechain, where's my BNB?</h1>
                </div>
                <div className="faqs-answer" >
                <p>Pepechain and BNB are both cryptocurrencies, so it's possible that you sold Pepechain
                    for BNB on a cryptocurrency exchange. If that's the case case, you should check your account
                    on the exchange to see if the BNB has been deposited.was a delay in the transaction or an issue
                    with the exchange. You may need to contact their customer support team for assistance.
                </p>
                </div>
              </div>
              <div className="faqs--right">
              <button>Hide<i className="fa fa-angle-up" aria-hidden="true"></i></button>
              </div>
            </div>
            <hr/>
            <div className="faqs">
              <div className="faqs--left">
                <h1 className="faqs-question">How can I fist my pepechain collection on the market</h1>
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
        </div>
    )
}

export default Faqs