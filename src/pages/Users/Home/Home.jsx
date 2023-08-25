import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import CarouselHome from '../../../Layout/Carousel/CarouselHome';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmListAction } from '../../../redux/Users/action/GetFilmListAction';
import FilmList from '../../../Layout/FilmList/FilmList';
import {getCinemaSystemListAction} from "../../../redux/Users/action/QuanLyRapAction"
import BackToTop from '../../../components/BackTop/BackToTop';

export default function Home(props) {

    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const { arrSystemsCinema } = useSelector((state) => state.QuanLyRapReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        const action = getFilmListAction();
        dispatch(action);

        dispatch(getCinemaSystemListAction())
    }, [])

    

    return (
        <div>
            <CarouselHome />
            <div className='container'>
                <FilmList  arrFilm={arrFilm} />
                <HomeMenu arrSystemsCinema={arrSystemsCinema}/>
            </div>
           <BackToTop/>
        </div>
    )
}
