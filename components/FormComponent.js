import React from 'react';

function FormComponent(props) {
    return (
        <div className="form-component">
            <h1>Contact us</h1>
           <div className="form">
               <p>The whole operational part from our behalf is
                   colculated to be completed in 2-3 weeks.</p>
               <form>
                   <div className="form-group">
                       <label htmlFor="name">Your Name</label>
                       <input
                           name={'name'}
                           id={'name'}
                           type="text"/>
                   </div>
                       <div className="email-and-number">
                           <div className="group">
                               <label htmlFor="email">Your email</label>
                               <input
                                   name={'email'}
                                   id={'email'}
                                   type="email"/>
                           </div>
                           <div className="group">
                               <label htmlFor="name">Phone number</label>
                               <input
                                   name={'phone'}
                                   id={'phone'}
                                   type="tel"/>
                           </div>
                       </div>
                   <div className="form-group">
                       <label htmlFor="commit">Please describe your project</label>
                       <textarea name="commit" id="commit" cols="30" rows="5"/>
                   </div>
                   <button type={'submit'}>Send</button>
               </form>
           </div>
        </div>
    );
}

export default FormComponent;