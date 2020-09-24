import React, {FunctionComponent} from 'react'
import { ICardCustom } from './ICardCustom.interfaces'
import style from './cardCustom.css'

const CardCustom: FunctionComponent<ICardCustom> = ({title, subtitle, image, link,colorTitle, colorSubtitle, colorBtn}) => {
  return (
    <div>
      <div className={style.cardContainer}>
        <div className={style.Col1}>
          <img src={image} alt=""/>
        </div>
        <div className={style.Col2}>
          <h1 style={{color:`${colorTitle}`}} className={style.cardH1}>{title}</h1>
          <h2 style={{color:`${colorSubtitle}`}} className={style.cardH2}>{subtitle}</h2>
          <button style={{color:`${colorBtn}`}} onClick={()=>{console.log(link)}}>Ver Mais</button>
        </div>
      </div>
    </div>
  )
}

export default CardCustom
