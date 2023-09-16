import './Banner.sass'

import banner from './../../assets/images/Rectangle.jpg'
import Button from '../Button/Button'

const Banner = () => {
  return (
    <div className="banner__container">
      <img className="banner__img" src={banner} alt="Banner" />
      <div className="banner__text">
        <h2>Venha conhecer nossas promoções</h2>
        <h3>50% off nos produtos</h3>
        <Button text="Ver produto" />
      </div>
    </div>
  )
}

export default Banner
