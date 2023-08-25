import React from 'react';
import {Card, Col} from "antd";
import {NavLink} from "react-router-dom";

const {Meta} = Card;

const RenderFilm = (arrFilm) => {
  const length = arrFilm.length;
  const size = (length % 2 === 1) ? (length - 1) : length;

  return arrFilm.slice(0, (size > 12) ? 12 : size).map((film, index) => {
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
};

export default RenderFilm;