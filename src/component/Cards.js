import React, { Component } from 'react'
import Carditem from './Carditem'
import './Cards.css'
import img5 from '../img/img-5.jpg'
import img6 from '../img/img-6.jpg'
import img4 from '../img/img-4.jpg'
import img8 from '../img/img-8.jpg'
import img9 from '../img/img-9.jpg'


export default class Cards extends Component {
    render() {
        return (
            <>
                 <div className="cards">
            <h1>CHECK out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src={img5}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src={img6}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <Carditem 
                        src={img9}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src={img8}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                        <Carditem 
                        src={img4}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Advanture"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
            </>
        )
    }
}



// import React, { Component } from 'react'
// import Carditem from './Carditem'
// import './Cards.css'
// import img3 from '../img/img/img-3.jpg'
// export default class Cards extends Component {
//     return (){
//         return(
//         <div className="cards">
//             <h1>CHECK out these EPIC Destinations!</h1>
//             <div className="cards__container">
//                 <div className="cards__wrapper">
//                     <ul className="cards__items">
//                         <Carditem 
//                         src="img/img-3.jpg"
//                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
//                         label="Advanture"
//                         path="/services"
//                         />
//                         <Carditem 
//                         src="img/img-3.jpg"
//                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
//                         label="Advanture"
//                         path="/services"
//                         />
//                     </ul>

//                     <ul className="cards__items">
//                         <Carditem 
//                         src="img/img-3.jpg"
//                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
//                         label="Advanture"
//                         path="/services"
//                         />
//                         <Carditem 
//                         src="img/img-4.jpg"
//                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
//                         label="Advanture"
//                         path="/services"
//                         />
//                         <Carditem 
//                         src="img/img-8.jpg"
//                         text="Explore the hidden waterfall deep inside the Amazon Jungle"
//                         label="Advanture"
//                         path="/services"
//                         />
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         )
// }
// }

