// rafce pour obtenir de import a Footer
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = (props) => {
  console.log(props)
const {t} = useTranslation()

  return (
    <footer className='container-fluid'>
			<nav className=""><a href="">Informations</a> - <a href="">{t("CV.mention")}</a> - <a href="">Contact</a></nav>
			<p className="">© {t("CV.conception")} Nathan Guedj. {t("CV.droit")}</p>
      {/* {props.name} */}
		</footer>
  )
}

export default Footer