import InputMask from 'react-input-mask';
import check from '../../img/check.svg';
import React, { useEffect, useState } from 'react';

import { arr, obj } from '../../utils/utils';

export default function NumberZone({ promoFinal }) {

  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState(false)

  const handleSetValue = (num) => {
    if (phone.length <= 9) {
      setPhone(`${(phone + num).replace(/^0+/, '')}`);
    }
  }

  const handleSetValueKey = (event) => {
    event.preventDefault();
    if (obj[event.key]) {
      handleSetValue(event.nativeEvent.key);
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleDelValue = () => {
    if (phone !== '') {
      const deletedNumber = phone.slice(0, phone.length - 1);
      setPhone(deletedNumber);
    }
  }

  const handleDelValueKey = (e) => {
    if (e.key === "Backspace" && phone !== '') {
      const deletedNumber = phone.slice(0, phone.length - 1);
      setPhone(deletedNumber);
    }
  }

  const handleChecked = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    phone.length >= 10 && checked ? setBtnDisabled(false) : setBtnDisabled(true);
  }, [checked, phone.length])

  const [start, setStart] = useState(5);

  const handleKeyControl = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowLeft":
        setStart(start <= 1 ? start + 10 : start - 1);
        setError(false);
        break;
      case "ArrowRight":
        setStart(start >= 11 ? start - 10 : start + 1);
        setError(false);
        break;
      case "ArrowUp":
        setStart(start - 3);
        setError(false);
        break;
      case "ArrowDown":
        setStart(start == 9 ? start + 2 : start + 3);
        setStart(start == 10 ? start - 8 : start + 3);
        setError(false);
        break;
      case "Enter":
        setPhone(start == 10 ? phone.slice(0, phone.length - 1) : `${(phone + start).replace(/^0+/, '')}`);
        setError(false);
        break;
      case "Backspace":
        const deletedNumber = phone.slice(0, phone.length - 1);
        setError(false);
        setPhone(deletedNumber);
        break;
    }
  }

  return (
    <div className="promo__form">
      <h3 className="promo__header">Введите ваш номер мобильного&nbsp;телефона</h3>
      <InputMask
        onKeyPress={handleSetValueKey}
        className="promo__input"
        mask="+7 (999) 999-99-99"
        alwaysShowMask={true}
        value={phone}
        onKeyDown={handleDelValueKey}
        autoFocus={true}
        onKeyUp={handleKeyControl}
      />
      <p className="promo__subheader">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <div className="numbers">
        {
          arr.map((i) => {
            return (
              <div
                key={i}
                onClick={() => handleSetValue(i)}
                className={i === start ? "number number__active" : "number"}>{i}
              </div>
            )
          })
        }
        <div className={10 === start ? "del del__active" : "del"} onClick={handleDelValue}>Стереть</div>
        <div className={11 === start ? "number number__active" : "number"} onClick={() => handleSetValue(0)}>0</div>
      </div>

      {
        error ? <div className="concert"><p className="concert__description_error">Можно вводить только цифры!</p></div> : <div className="concert">
          <div
            className="concert__square"
            onClick={handleChecked}
          >
            {
              checked ? <img alt={check} className="concert__img" src={check} /> : ''
            }
          </div>
          <p className="concert__description">Согласие на обработку персональных&nbsp;данных</p>
        </div>
      }



      <button disabled={btnDisabled} onClick={promoFinal} className={btnDisabled ? "promo__btn" : "promo__btn_enable"}>Подтвердить номер</button>
    </div>
  )
}