import React from "react";
import Slider from "react-slick";
import "./index.css";
import {Card, Col, Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {SET_FILM_SHOWING, SET_FILM_COMING_SOON, SET_FILM_FILTER} from "../../redux/Users/type/QuanLyPhimType";
import {NavLink} from "react-router-dom";
import {FilmState} from "../../redux/Users/reducers/QuanLyPhimReducer";

const {Meta} = Card;

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const FilmList = (props) => {
  const dispath = useDispatch();
  const {filmState} = useSelector(state => state.QuanLyPhimReducer);

  const renderFilm = () => {
    console.log(props.arrFilm);
    const length = props.arrFilm.length;
    const size = (length % 2 === 1) ? (length - 1) : length;

    return props.arrFilm.slice(0, (size > 12) ? 12 : size).map((film, index) => {
      return (
        <Col className='styleCol px-4 py-3' key={index}>
          <Card className='styleCard'
                style={{
                  width: '100%',
                  height: '350px',
                }}
                cover={<img style={{height: '280px'}} className='img-fluid'
                            alt="example" src=
                              {film.hinhAnh}/>}>

            <Meta title={film.tenPhim}/>
            <NavLink to={`/detail/${film.maPhim}`}>
              <button className="btn btn-danger btnDatve">Đặt Vé</button>
            </NavLink>
          </Card>
        </Col>
      )
    })
  }

  const buttonActiveClass = (payload) => {
    return payload ? 'classActiveFilm' : 'noneActiveFilm';
  }

  // const onChangeFilmState = () => {

  // }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{marginTop: "60px"}}>
      <div style={{height: "30px"}} id="lichchieu"></div>
      <div className="mt-5">
        <Select
          options={[
            {
              label: 'Đang chiếu',
              value: FilmState.DANG_CHIEU
            },
            {
              label: 'Sắp chiếu',
              value: FilmState.SAP_CHIEU
            }
          ]}
        />
        {/* <button className={`${buttonActiveClass(filmState === FilmState.DANG_CHIEU)} `} style={{*/}
        {/*  padding: "10px",*/}
        {/*  marginRight: "10px",*/}
        {/*  borderRadius: "5px",*/}
        {/*  backgroundColor: "#FF0000",*/}
        {/*  color: "#fff",*/}
        {/*  fontWeight: "700"*/}
        {/*}} onClick={() => {*/}
        {/*  const action = {*/}
        {/*    type: SET_FILM_FILTER,*/}
        {/*    payload: FilmState.DANG_CHIEU,*/}
        {/*  }*/}
        {/*  dispath(action)*/}
        {/*}}>*/}
        {/*  PHIM ĐANG CHIẾU*/}
        {/*</button>*/}
        {/*<button className={`${buttonActiveClass(filmState === FilmState.SAP_CHIEU)}`} style={{*/}
        {/*  padding: "10px",*/}
        {/*  borderRadius: "5px",*/}
        {/*  backgroundColor: "#fff",*/}
        {/*  color: "#FF0000",*/}
        {/*  fontWeight: "700"*/}
        {/*}} onClick={() => {*/}
        {/*  const action = {*/}
        {/*    type: SET_FILM_FILTER,*/}
        {/*    payload: FilmState.SAP_CHIEU,*/}
        {/*  }*/}
        {/*  dispath(action)*/}
        {/*}}>PHIM SẮP CHIẾU*/}
        {/*</button> */}
      </div>
      <Slider className="slider" {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  );
}

export default FilmList