import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import CarouselItem from '../components/CarouselItem'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const App = () => {
    const API = 'http://localhost:3000/initialState'
    const initialState = useInitialState(API)
    return(
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tedencias">
                <Carousel>
                    {initialState.trends.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Videos">
                <Carousel>
                    {initialState.originals.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App