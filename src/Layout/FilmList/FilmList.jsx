import React from "react";
import Slider from "react-slick";
import {Select} from 'antd';
import {useDispatch} from "react-redux";

import {SET_FILM_FILTER} from "../../redux/Users/type/QuanLyPhimType";
import {FilmState} from "../../redux/Users/reducers/QuanLyPhimReducer";

import {SliderSetting} from "./configs/SliderSetting";
import {FilmStateOptions} from "./configs/FilmStateOptions";
import renderFilm from "./elements/renderFilm";

import "./index.css";

const FilmList = (props) => {
  const dispatch = useDispatch();

  const onChangeFilmState = (value) => {
    const action = {
      type: SET_FILM_FILTER,
      payload: value,
    };

    dispatch(action)
  }

  return (
    <div style={{marginTop: "60px"}}>
      <div style={{height: "30px"}} id="lichchieu"></div>
      <div className="mt-5">
        <Select
          defaultValue={FilmState.TAT_CA}
          options={FilmStateOptions}
          onChange={onChangeFilmState}
          style={{ width: 160 }}
        />
      </div>
      <Slider className="slider" {...SliderSetting}>
        {renderFilm(props.arrFilm)}
      </Slider>
    </div>
  );
}

export default FilmList