import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18n/config';
import flagEnglish from '../../assets/img/flags/flagEnglish.png'
import drapeauFr from '../../assets/img/flags/drapeauFr.png'
import { NavDropdown } from 'react-bootstrap';
import { getDarkMode } from "../../redux/slices/darkmode.slice"
import { useSelector } from 'react-redux';

const DropI18N = () => {

    const GETDARKMODE = useSelector(getDarkMode)
  // const [isAuth, setIsAuth] = useState(false);

    useTranslation();
    const {t} = useTranslation()

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (

        
        <NavDropdown title={t("Lien.Langue")} className={` text-${GETDARKMODE=== true ? "light":"dark"} `}>
            <NavDropdown.Item  >              
                <div>
                    <img onClick={() => {
                    handleClick('fr') }}
                 width="36px" style={{ marginRight: '5px' }} src={drapeauFr} alt="logo France" ></img>
                    <span onClick={() => {
                    handleClick('fr') }}
                  >Français</span>                
                 </div>
            </NavDropdown.Item>
            <NavDropdown.Item >
                <div>
                    <img onClick={() => {
                    handleClick('en') }}
                 width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre"></ img>
                    <span onClick={() => {
                    handleClick('en') }}
                 >English</span>
                 </div>
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropI18N