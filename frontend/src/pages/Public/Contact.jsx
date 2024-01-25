import React, {useState} from 'react';

const Contact = () => {

    const [message, setMessage ] = useState({})

    const onChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(message)

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="sujet">Sujet</label>
                    <input type="text" name="sujet" id="sujet" onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="message"></label>
                    <textarea name="message" id="message" cols="30" rows="10" onChange={onChange}></textarea>
                </div>
                <div className="group">
                    <button>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;