import React from 'react';
//import Sidebar from '../components/sidebar/Sidebar';
//import Bag from '../components/Sidebag';
import { useLocation, Link } from 'react-router-dom';
import Rating from '../components/Rating'



const ItemDisplay = () => {
    
    const data = useLocation().state.product;
    console.log(data);

    return (
        <>
            {/* Joshua's section */}
               
                        <Link to={'/'}>Back</Link>


                       <div className='top-area'>
                       
                        <div className='img-area'>

                                <div className='img-gallery'>
                                    <img src={data.image} alt={data.name} />
                                    <img src={data.image} alt={data.name} />
                                    <img src={data.image} alt={data.name} />
                                </div>
                                <div className='main-img'>
                                    <img src={data.image} alt={data.name} />
                                </div>

                        </div>

                        <div className='text-content'>
                            <div className='header'>
                            {data.name} <br />
                            {data.smallDescription}
                            </div>

                            <Rating stars={data.rating}/> <br />
                            {data.price} <br />
                            {data.description} 
                            
                            <button> Add to Bag </button>

                        </div>

                        </div>
                    
                        <div className='bottom-area'>

                        <hr />

                            <div className='description'>
                                {data.fullDescription}
                            </div>

                        </div>

        </>
    );
};

export default ItemDisplay;