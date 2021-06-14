import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "./order.css"
function Order() {
    const [sent,setSent] = useState(false)
    const [inputName,setInputName] = useState("");
    const [inputNumber,setInputNumber] = useState("");
    const [inputEmail,setInputEmail] = useState("");
    const [inputAddress,setInputAddress] = useState("");
    const [inputMessage,setInputMessage] = useState("");

    // const orderPlaceHandler = ()=>{
    //     setName(inputName);
    //     setNumber(inputNumber);
    //     setEmail(inputEmail);
    //     setAddress(inputAddress);
    //     setMessage(inputMessage)
    // }
    

    const resetForm =() =>{
          setInputName('');
          setInputNumber('');
          setInputEmail('');
          setInputAddress('');
          setInputMessage('');

          setTimeout(()=>{
              setSent(false);
          },4000);
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_lun9eub', 'template_0dmwq8r', e.target, 'user_4XVlwN6qbJgztQpoRWXBG')
          .then((result) => {
            setSent(true);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
         resetForm();
      }

    return (
        <div className="order" id="Order">
            <h1 className="orderHeading">Place Your Order</h1>
            <form onSubmit={sendEmail} method="post" className="orderContainer">            
                <div className="column1">
                   <input type="text" className="form-control" value={inputName} placeholder="Enter Your Name" name="name" onChange={(e)=>setInputName(e.target.value)} required />
                </div>
                <div className="column2">
                   <input type="text" className="form-control" value={inputNumber} placeholder="Enter Your Phone Number" pattern="[6-9]{1}[0-9]{9}" name="phone" onChange={(e)=>setInputNumber(e.target.value)} required />
                </div>
                <div className="column3">
                    <input type="email" className="form-control" value={inputEmail} placeholder="Enter Your Email" name="email" onChange={(e)=>setInputEmail(e.target.value)}/>
                </div>
                <div className="column4">
                   <input type="text" className="form-control" value={inputAddress} placeholder="Enter Your Address" name="address" required onChange={(e)=>setInputAddress(e.target.value)}/>
                </div>
                <div className="column5">
                    <textarea className="form-control" value={inputMessage} placeholder="Enter Your Order" name="message" onChange={(e)=>setInputMessage(e.target.value)} required /> 
                </div>
                <div className={sent?"orderSentSuccessfull":"orderSent"}>
                    <p>Order Is Placed Successfully</p>
                </div>
                <div className="column4">
                    <input type="submit" className="placeOrder" value={"Place Order "}></input>
                </div>
            </form>
        </div>
    )
}

export default Order
