import "./PaymentCard.css"
import PaymentImg from "./../PaymentCard/boy-cloth-img.webp"
import { useState } from "react";
import IncreaseQuantity from "./../plus.png"
import DecreaseQuantity from "./../minus.png"
import PaymentBackgroundImg from "./background-img-2-removebg-.png"
import CreaditCard from "./credit-card.png"
import Cash from "./cashless-payment.png"
import Phonepay from "./payment-method.png"


function PaymentCard(){
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>hello</h1>
            <img src={PaymentBackgroundImg} className="paymentcard-back-img" />
            <div className="payment-main-div">
                <div>
                    <img src={PaymentImg} className="payment-img" />
                    <p className="title"> Kashvi Drishya Dresses</p>
                </div>
                <h3 className="heading-select-quantity"> Select Quantity</h3>

                <div className="incre-decre-div">
                    <div className="button-container">
                        <img src={IncreaseQuantity} className="incre-decre-logo" onClick={() => { setCount(count + 1) }}>
                        </img>

                        <h2>{count}</h2>

                        <img src={DecreaseQuantity} className="incre-decre-logo" onClick={() => {
                            setCount(count - 1)
                        }}>

                        </img>

                        {/* <button className="button" onClick={() => {
                        setCount(0)
                    }}> Reset</button> */}
                    </div>

                    <div className="payment-method-div">
                        <img src={CreaditCard} className="payment-logo"/>
                        <img src={Cash} className="payment-logo"/>
                        <img src={Phonepay} className="payment-logo"/>
                    </div>
 
                </div>
                <p className="price">Price: Rs.400/-</p>
                    <div>
                        <button type="button" className="buy-now-btn"> Buy Now</button>
                    </div>


            </div>



        </>
    )

               
    
}

export default PaymentCard