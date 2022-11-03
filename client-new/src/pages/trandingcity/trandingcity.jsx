import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './trandingcity.scss'

const Trandingcity = () => {
    return (
        <>
<div className="text-center pe-5 ps-5 m-5">
    <div className='heading'>

    <h2 className='fw-bold'>Choose what is TRENDING in your City</h2>
    </div>
    <p className='text-muted'>Choose the best ways to deliver relevant messages to the relevant audience.</p>
</div>
<Carousel  className="text-center pe-5 ps-5 pb-0">
    <Carousel.Item className=" data " interval={1500}>
        <img
            className=" d-block w-100 "
            src="https://jcdecaux.odoads.com/media/jcdecaux/media/images/new1568265826_84160.jpg"
            alt="Smart Bus Shelter - Nehru Place, Delhi"
        />
        <Carousel.Caption className=" opacity-75">
        <div className='bg-success p-2 rounded-5'>
            <h3 className="text-dark fw-bold">Smart Bus Shelter - Nehru Place, Delhi</h3>
            </div>
        </Carousel.Caption>
    </Carousel.Item>
     <Carousel.Item className='data' interval={1500}>
        <img
            className=" d-block w-100"
            src="https://surendera_advertiesrs.odoads.com/media/surendera_advertiesrs/media/images/new1568270534_73906.jpg"
            alt="Unipole - Delhi Rohtak Road, Rohtak"
        />

        <Carousel.Caption className=" opacity-75">
        <div className='bg-success p-2 rounded-5'>
            <h3 className="text-dark fw-bold">Unipole - Delhi Rohtak Road, Rohtak</h3>
            </div>
        </Carousel.Caption>
        
    </Carousel.Item>
    <Carousel.Item className='data'  interval={1500}>
        <img
            className=" d-block w-100"
            src="https://pioneer_publicity.odoads.com/media/pioneer_publicity/media/images/new1568265665_67156.jpg"
            alt="Unipole - Anand Vihar, Delhi"
        />

        <Carousel.Caption className=" opacity-75">
        <div className='bg-success p-2 rounded-5'>
            <h3 className="text-dark fw-bold">Unipole - Anand Vihar, Delhi</h3>
            </div>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='data' interval={1500}>
        <img
            className=" d-block w-100"
            src="https://naks.odoads.com/media/naks/media/images/U11.jpg"
            alt="Unipole - Site No-U11"
        />
        <Carousel.Caption className=" opacity-75">
           <div className='bg-success p-2 rounded-5'>
           <h3 className="text-black fw-bold">Unipole - Site No-U11</h3>
           </div>
        </Carousel.Caption>
    </Carousel.Item> 
</Carousel>

        </>
    )
}

export default Trandingcity
