import { useState } from 'react';
import Banner from '../Banner/Banner';
import Promo from '../Promo/Promo';

function App() {

  const [promoPage, setPromoPage] = useState(false)

  const handleClickOk = () => {
    setPromoPage(!promoPage)
  }


  return (
    <div className="root">
      {promoPage ? <Promo handleClickBtn={handleClickOk} /> : <Banner nextPage={promoPage} handleClickBtn={handleClickOk} />}

    </div>
  );
}

export default App;
