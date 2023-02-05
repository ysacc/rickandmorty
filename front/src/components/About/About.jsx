import React from "react";
import "./About.module.css"
import styles  from "../About/About.module.css"

export default function About(){
    return(
        
        <div >
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.section}>
            
            <img src="https://contents.bebee.com/users/id/4CLQG63d4cd2f43c5a/_avatar-zKIx1-400.png" alt="img profile" class={styles.image}></img>
            <p class={styles.description}>
                I am a web developer with a passion for technology and creating useful and attractive applications. I have been working in web development for for a few years now,, specializing in HTML, CSS, and JavaScript. I love learning new skills and working on exciting projects.
            </p>
            </div>
            <div>
            <h3 className={styles.title}>Languages I use</h3>
            <div >
                <img className={styles.box} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/170627419/original/9962050ad1cdba04cbbb57867f317d035f404e7d/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.png" alt="technologies"/>
            </div>
            </div>
        </div>
    )
}