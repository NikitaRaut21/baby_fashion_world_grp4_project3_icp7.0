import "./PaymentCard.css"
import PaymentImg from "./../../Assets/BreakFast.jpg"
import { useState } from "react";
import IncreaseQuantity from "./../plus.png"
import DecreaseQuantity from "./../minus.png"
import PaymentBackgroundImg from "./background-img-2.jpg"
import CreaditCard from "./credit-card.png"
import Cash from "./cashless-payment.png"
import Phonepay from "./payment-method.png"


function PaymentCard(){
    const [count, setCount] = useState(0)
    return (
        <>
            <img src={PaymentBackgroundImg} className="paymentcard-back-img" />
            <div className="payment-main-div">
                <div>
                    <img src={PaymentImg} className="payment-img" />
                    <p className="title"> Kashvi Drishya tops</p>
                </div>
                <h3 className="heading-select-quantity"> Select Quantity</h3>
               
    
}

export default PaymentCard