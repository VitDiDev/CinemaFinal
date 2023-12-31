import React from 'react'
import { useSelector } from 'react-redux';
import _ from "lodash";
import "./index.css";
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Footer(props) {
  const { arrSystemsCinema } = useSelector((state) => state.QuanLyRapReducer);

  const arrSystems = _.map(arrSystemsCinema, (heThongRap) => _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"]))

  return (
    <footer className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-4">
            <img style={{width:250}} src="https://inthienha.com/wp-content/uploads/CGV-Cinemas.png" alt="" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <h4 className='text-white'>ĐỐI TÁC</h4>
                <div className='row'>
                  {arrSystems.map((htr, index) => {
                    return <div className='col-6' key={index}>
                      <img style={{ width: 50 }} src={htr.logo} alt="" />
                    </div>
                  })}
                </div>
              </div>
              <div className="col-6" id='ungdung'>
                <h4 className='text-white'>MOBILE APP</h4>
                <span className='icon mr-4'>
                  <AppleOutlined />
                </span>
                <span className='icon'>
                  <FacebookOutlined />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className='hr' />
        <div className='text-white text-center' >
          <h3 className='text-white'>CÔNG TY CỔ PHẦN CGV</h3>
        </div>
      </div>
    </footer>
  )
}