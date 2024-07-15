import React, { Component } from 'react'


class HeroContactFrom extends Component {


    state = {
        name: '',
        email: '',
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
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === ''  &&  error.notes === '') {
            this.setState({
                name: '',
                email: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            error } = this.state;

        return(
            <div className="hx-hero-contact">
                <div className="hx-contact-form">
                    <h2>Request  a Quote</h2>
                    <p>Just provide some basic information about the service you need .</p>
                    <form onSubmit={this.subimtHandler} className="form">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-field">
                                    <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                                    <p>{error.name ? error.name : ''}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-field">
                                    <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                                    <p>{error.email ? error.email : ''}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-field">
                                    <textarea className="form-control" name="message" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-submit">
                                    <button type="submit" className="theme-btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
export default  HeroContactFrom;