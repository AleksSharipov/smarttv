import React, { useState } from 'react';


import qr from '../../img/qr.png';
import Finaly from '../Finaly/Finaly';
import NumberZone from '../NumberZone/NumberZone';

export default function Promo({ handleClickBtn }) {
  const [promoFinal, setPromoFinal] = useState(false);

  const handleFinaly = () => {
    return setPromoFinal(true);
  }

  return (
    <div className="promo">
      {
        !promoFinal ?
          <NumberZone promoFinal={handleFinaly} />
          :
          <Finaly />
      }
      <div className="promo__confirm"></div>
      <div className="promo__info">
        <span onClick={handleClickBtn} className="close"></span>
        <div className="promo__description">
          <p className="promo__qr">Сканируйте QR-код ДЛЯ&nbsp;ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
          <img alt="qr code" className="promo__img" src={qr} />
        </div>

      </div>
    </div >
  )
}