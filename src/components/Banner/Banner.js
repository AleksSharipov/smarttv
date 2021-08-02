import React from 'react';
import qr from '../../img/qr.png';

export default function Banner({ handleClickBtn }) {

  return (
    <div className="banner">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/dbvi_S3fy2M?autoplay=1&amp;controls=0&amp;start=1062&amp;end=1113&amp;fs=0&amp;iv_load_policy=3&amp;mute=1&amp;loop=1&amp;playlist=dbvi_S3fy2M"
        title="YouTube video player"
        frameBorder="0"
        mute="1"
        allowFullScreen />

      <div className="banner__qr">
        <h2 className="banner__header">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!ПОДАРИТЕ&nbsp;ЕМУ&nbsp;СОБАКУ!</h2>
        <img alt="qr code" className="banner__img" src={qr} />
        <p className="banner__description">Сканируйте QR-код или нажмите ОК</p>
        <button onClick={handleClickBtn} className="banner__btn">ОК</button>
      </div>
    </div>
  )

}