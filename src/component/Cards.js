import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>CHECK out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src="img/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src="img/img-2.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <Carditem 
                        src="img/img-3.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src="img/img-4.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src="img/img-8.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
