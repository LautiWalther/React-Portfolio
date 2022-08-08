import Hero from "../components/Hero";
import link_public from "../components/public";

import M from "materialize-css";
import { useState } from "react";

const styles = {
    error: {
        fontSize: '1.2em',
        padding: '10px',
        width: '100%',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        fontWeight: 'bold',
        boxShadow: '1px 2px 9px #000000',
    },
    hidden: {
        display: 'none',
    }
}

const Contact = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({});

    const sendMessage = () => {
        setLoading(true);
        var form = new FormData();
        form.append('name', data.name);
        form.append('email', data.email);
        form.append('phone', data.phone);
        form.append('subject', data.subject);
        form.append('message', data.message);
        const response = fetch('http://localhost/portfolio-backend/message/send.php', {
            method: 'POST',
            body: form
        }).then(response => response.json()).then(response => {
            setStatus(response);
            setLoading(false);
        })
    }

    return (
        <>
            <Hero image={ link_public('/contacto-bg.jpg') } title='Contact' subtitle='Send me a message!' />
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className={'center white-text text-bold flow-text ' + (status.success ? 'green' : 'red')} style={status.success || status.error ? styles.error : styles.hidden}>
                        { status.success }
                        { status.error }
                    </div>
                </div>
                <div className="col s6 offset-s3">
                    <div className="col s6">
                        <div className="input-field">
                            <i className="material-icons prefix">person</i>
                            <input required id="name" type="text" className="validate" onChange={e => setData({...data,
                                name: e.target.value
                            })} />
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <i className="material-icons prefix">alternate_email</i>
                            <input required id="email" type="email" className="validate" onChange={e => setData({...data,
                                email: e.target.value
                            })} />
                            <label for="email">Mail</label>
                        </div>
                    </div>
                </div>
                <div className="col s6 offset-s3">
                    <div className="col s6">
                        <div className="input-field">
                            <i className="material-icons prefix">phone</i>
                            <input required id="phone" type="tel" className="validate" onChange={e => setData({...data,
                                phone: e.target.value
                            })} />
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <i className="material-icons prefix">subject</i>
                            <input required id="subject" type="text" className="validate" onChange={e => setData({...data,
                                subject: e.target.value
                            })} />
                            <label for="subject">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="col s6 offset-s3">
                    <div className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="message" className="materialize-textarea" onChange={e => setData({...data,
                                message: e.target.value
                            })} required></textarea>
                            <label for="message">Message</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 center">
                    <a className={"btn teal waves-effect waves-green btn-large " + (loading ? 'disabled' : '')} onClick={ sendMessage }>Send</a>
                </div>
            </div>
        </>
    )
}

export default Contact;