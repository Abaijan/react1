import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './thirdBock.css'

const ThirdBlock = () => {

    let url = 'http://localhost:3333/products'

    const [card, setCard] = useState([])

    useEffect(() => {
        async function getCard() {
            let resolve = await axios(url);
            setCard(resolve.data)
        }
        getCard()
    }, [])

    return (
        <section className='thirdBlock'>
            <div className="container">
                <div className="thirdBlock__products">
                    <div className="thirdBlock__products-title">
                        <h1 className="thirdBlock__products-tittle">Our Products</h1>
                    </div>
                    <div className="thirdBlock__products-inner">
                        {
                            card.map((item) => {
                                return (
                                    <div className='card'id='cards'>
                                        <img className='card-img' src={item.image} alt='' />
                                        <h1 className='card-title text'>{item.name}</h1>
                                        <p className='card-info text'>{item.information}</p>
                                        <p className='card-price'>{item.price}</p>
                                        <button className='products-sale'>{item.sale}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="thirdBlock__inner-botton">
                        <button className="thirdBlock__inner-btn">Show more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ThirdBlock