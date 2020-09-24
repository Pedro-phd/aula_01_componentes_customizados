import React, {FunctionComponent, useEffect,useMemo,useState} from 'react'
import { useRuntime } from 'vtex.render-runtime';
import { IWhoami } from './ICardCustom.interfaces'
import style from './Whoami.css'

const CardCustom: FunctionComponent<IWhoami> = () => {
  const [workspace, setWorkspace] = useState(true)
  const [mobile, setMobile] = useState(false)
  const runtime = useRuntime();

  useEffect(()=>{
    if(runtime.workspace === "master"){
      setWorkspace(false)
    }else{
      setWorkspace(true)
    }
    console.log(runtime)
  },[runtime])
  useMemo(()=>{
    runtime.deviceInfo.isMobile ? setMobile(true) : setMobile(false)
  },[runtime.deviceInfo.isMobile])
  return (
    <div className={style.whoamiContainer}>
      <h1 className={style.whoamiH1}>Conta: {runtime.account}</h1>
      <h1 className={style.whoamiH1}>workspace: {runtime.workspace}</h1>
      {workspace ? <h3 className={style.TextWork} >Você esta em uma workspace</h3> : <h3 className={style.style.TextNWork}>Cuidado! Você esta em produção.</h3> }
      {mobile ? <h3 className={style.whoamiH1} >Você esta no modo MOBILE</h3> : <h3 className={style.whoamiH1}>Você esta no modo DESKTOP</h3> }
    </div>
  )
}

export default CardCustom
