import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import EmailIcon from '@mui/icons-material/Email';
import '../styles/TopNav.css'

function TopNav(){


    const links =  ["/home", "/about-me", "/projects", "/experience"];
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');

    return(
        <div className="contact-buttons-div">
            <a href="mailto:faizanraso@outlook.com"><EmailIcon className="contact-button-top" style={{fill: "#1DA1F2"}}/></a>
            <a href="https://github.com/faizanraso"><GitHub className="contact-button-top" style={{fill: "#1DA1F2"}}/></a>
            <a href="https://www.linkedin.com/in/faizanraso/"><LinkedIn className="contact-button-top" style={{fill: "#1DA1F2"}}/></a>
            <a href="https://twitter.com/faizanraso"><Twitter className="contact-button-top" style={{fill: "#1DA1F2"}}/></a>
        </div>
    )
}

export default TopNav;