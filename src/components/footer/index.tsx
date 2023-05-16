import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import css from "./footer.css"
import logo from "../../assets/logo.svg"

export function Footer() {
    const DATE = new Date();
    const YEAR = DATE.getFullYear();

    return (
        <footer className={css.footerContainer}>
            <Link className={css.links} to="/login">
                <img src={logo} className={css.logo} />
            </Link>
            
            <div className={css.linksContainer}>
                <h1 className={css.titleFooter}>Social Links</h1>
                <Link className={css.links} to="https://www.linkedin.com/in/gastonmzacarias/" target="_blank">
                    <h2 className={css.contactLinks}>Linkedin<FiLinkedin className={css.footerIcons} /></h2>
                </Link>

                <Link className={css.links} to="https://github.com/gmzacarias" target="_blank">
                    <h2 className={css.contactLinks}>Github<FiGithub className={css.footerIcons} /> </h2>
                </Link>

                <Link className={css.links} to="mailto:gastonmzacarias@gmail.com" target="_blank">
                    <h2 className={css.contactLinks}>Mail<FiMail className={css.footerIcons} /></h2>
                </Link>
            </div>
            <h3 className={css.copyright}>Copyright©{YEAR} Gaston Mauro Zacarias</h3>
        </footer>
    )
}