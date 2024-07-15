import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        service: '',
        phone: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            service,
            phone,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (service === '') {
            error.service = "Please enter your service";
        }
        if (phone === '') {
            error.phone = "Please enter your phone number";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.phone === '' && error.service === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                service: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            service,
            phone,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={phone} onChange={this.changeHandler} type="text" name="phone" placeholder="Phone"/>
                            <p>{error.phone ? error.phone : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <select onChange={this.changeHandler} value={service} type="text" name="service" className="form-control">
                                <option>Service Select</option>
                                <option>Tires Replacement</option>
                                <option>Transmission</option>
                                <option>Diagnostic</option>
                                <option>Batteries</option>
                                <option>Breaks</option>
                            </select>
                            <p>{error.service ? error.service : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;