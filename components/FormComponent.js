import React, {useState} from 'react';
import axios from "axios";

function FormComponent(props) {
    const [isOpen, setIsOpen] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        // const message = `<pre>Name: <b>${e.target.name.value}</b></pre>Email: <b>${e.target.email.value}</b>Phone:<b>${e.target.phone.value}</b>Description:<b>${e.target.commit.value}</b>`;
        const message = encodeURI(`❗️ NEW APPLICATION\n-----------------------------------\n\nName: *${e.target.name.value}*\nEmail: *${e.target.email.value}*\nPhone: *${e.target.phone.value}*\nDescription: *${e.target.commit.value}*`);

        const token = "750388483:AAE9yeU3fKI8QpxaKoem4kjwAoBn4iKCNAo";
        const chat_id = -879399852;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=markdown`;

        axios.get(url)
            .then(res => {
                if (res.data?.ok){
                    setIsOpen(true);
                }
                e.target.reset();
            })
    }
    return (
        <>
            <div className="form-component">
                <h1 className={'font-montserrat-extra-bold'}>Contact us</h1>
                <div className="form">
                    <p className={'font-poppins-regular'}>
                        Expect efficient and reliable service as we complete your project in just 2-3 weeks. Trust us to
                        operate seamlessly and deliver exceptional results.
                    </p>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label className={'font-montserrat-extra-bold'} htmlFor="name">Your Name</label>
                            <input
                                name={'name'}
                                id={'name'}
                                type="text" required className="font-poppins-regular"/>
                        </div>
                        <div className="email-and-number">
                            <div className="group">
                                <label className={'font-montserrat-extra-bold'} htmlFor="email">Your email</label>
                                <input
                                    name={'email'}
                                    id={'email'}
                                    type="email" required className="font-poppins-regular"/>
                            </div>
                            <div className="group">
                                <label className={'font-montserrat-extra-bold'} htmlFor="name">Phone number</label>
                                <input
                                    name={'phone'}
                                    id={'phone'}
                                    type="tel" required className="font-poppins-regular"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className={'font-montserrat-extra-bold'} htmlFor="commit">Please describe your
                                project</label>
                            <textarea name="commit" id="commit" cols="30" rows="5" required className="font-poppins-regular"/>
                        </div>
                        <button className={'font-montserrat-extra-bold'} type={'submit'}>Send</button>
                    </form>
                </div>

            </div>
            <div className={`form-submit ${isOpen ? 'active' : ''}`}>
                <div className="form-submit-content">
                    <img src="/assets/icons/check.svg" alt="check"/>
                    <p>Order received! We'll be in touch soon. In the meantime, sit tight and imagine us working tirelessly on your project. #DedicatedToYourSuccess</p>
                    <button type="button" className="font-montserrat-bold" onClick={() => setIsOpen(false)}>Go Back</button>
                </div>
            </div>
        </>
    );
}

export default FormComponent;