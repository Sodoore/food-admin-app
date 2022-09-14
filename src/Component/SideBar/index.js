import React from "react";
import css from "./style.module.css"
import Logo from "../../Assets/images/Logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
export const SideBar = () =>{

   return(
    <div className={css.SideBar}>
        <img src={Logo} alt="Logooo" />
        <p>ҮРГЭЛЖ ШИНЭЭРЭЭ</p>
        <FontAwesomeIcon style={{color: "white"}} icon="fa-thin fa-clipboard-list" />
    </div>
   )

}
