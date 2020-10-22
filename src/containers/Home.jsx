import React from 'react'
import Search from '../components/Search'
import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import CarouselItem from '../components/CarouselItem'
import Carousel from '../components/Carousel'
import Header from '../components/Header'

const Home = ({myList,trends,originals}) => {

    return(
        <>
            <Header />
            <Search />
            {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem key={item.id} {...item} isList/>
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tedencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Videos">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

        </>
    )
}

const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home)