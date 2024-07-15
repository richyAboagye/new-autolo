import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import tm1 from '../../images/team/pp3.jpg'
import tm2 from '../../images/team/pp2.jpg'
import tm3 from '../../images/team/pp1.jpg'

const TeamSection = (props) => {

    const Team = [
        {
            TmImg:tm1,
            title:'Calvy Wilson',
        },
        {
            TmImg:tm2,
            title:'Jemy Walton',
        },
        {
            TmImg:tm3,
            title:'Nicolas Johnson',
        },
    ]


    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <div className="team-area clear-fix">
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title-1 text-center">
                        <span>Meet Our Expertise</span>
                        <h2>Our Awesome Team</h2>
                    </div>
                </div>
                <div className="row">
                    {Team.map((team, titem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={titem}>
                            <div className="teams teams--two">
                                <img src={team.TmImg} className="img-responsive" alt="Team"/>
                                <span className="teams--two__rect"></span>
                                <span className="teams--two__tri"></span>
                                <p><Link onClick={ClickHandler} to="/team">{team.title}</Link></p>
                                <ul className="teams__list">
                                    <li><Link onClick={ClickHandler} to="/team"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/team"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/team"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/team"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection;