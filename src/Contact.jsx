import React, { useState } from 'react';


const Contact = () => {
  const[data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });
  const InputEvent=(event)=>{
   const {name,value}=event.target;
   setData((preVal)=>{
     return{
       ...preVal,
       [name]:value,
     }
   })
  };
  const formSubmit=(e)=>{
      e.preventDefault();
      alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My Email Id is ${data.email}. Here is what I want to say ${data.msg}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name address</label>
                <input
                  type="text"
                  class="form-control"
                 value={data.fullname} 
                 name="fullname"
                 onChange={InputEvent}
                 placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input
                  type="number"
                  class="form-control"
                 value={data.phone} 
                 name="phone"
                 onChange={InputEvent}
                 placeholder="mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                 value={data.email} 
                 name="email"
                 onChange={InputEvent}
                 placeholder="email" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea 
                class="form-control" 
                rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}>

                </textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
}

export default Contact;

