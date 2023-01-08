import React from 'react';

function FormComponent(props) {
    return (
        <div className="form-component">
            <h1 className={'font-montserrat-extra-bold'}>Contact us</h1>
            <div className="form">
                <p className={'font-poppins-regular'}>
                    Expect efficient and reliable service as we complete your project in just 2-3 weeks. Trust us to
                    operate seamlessly and deliver exceptional results.
                </p>
                <form>
                    <div className="form-group">
                        <label className={'font-montserrat-extra-bold'} htmlFor="name">Your Name</label>
                        <input
                            name={'name'}
                            id={'name'}
                            type="text"/>
                    </div>
                    <div className="email-and-number">
                        <div className="group">
                            <label className={'font-montserrat-extra-bold'} htmlFor="email">Your email</label>
                            <input
                                name={'email'}
                                id={'email'}
                                type="email"/>
                        </div>
                        <div className="group">
                            <label className={'font-montserrat-extra-bold'} htmlFor="name">Phone number</label>
                            <input
                                name={'phone'}
                                id={'phone'}
                                type="tel"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className={'font-montserrat-extra-bold'} htmlFor="commit">Please describe your
                            project</label>
                        <textarea name="commit" id="commit" cols="30" rows="5"/>
                    </div>
                    <button className={'font-montserrat-extra-bold'} type={'submit'}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default FormComponent;