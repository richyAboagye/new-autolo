import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ServicesSingle from '../../components/ServicesSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServiceDetailsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service Single'} pagesub={'Service'}/> 
            <ServicesSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServiceDetailsPage;
