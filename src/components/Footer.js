import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="footer">
            <>
                <div className="footerMenu">
                    <NavLink to="/" className={({ isActive }) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        Projects
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        About
                    </NavLink>
                    {/* <NavLink to="/contact" className={({ isActive }) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        Contact
                    </NavLink> */}
                </div>
                <div className="footerLogo">
                    <a href="https://github.com/yoyochen68"><img src="../img/gitHub.png" className="sitelogo" alt="logo" /></a>
                    <a href="https://www.linkedin.com/in/yanyan-chen-yoyo/"><img src="../img/linkedIn.png" className="sitelogo" alt="logo" /></a>
                    <a href="mailto:yoyochen2019@yahoo.ca?Subject=I%20want%20to%20connect"><img src="../img/email.png" className="sitelogo" alt="logo" /></a>
                    
                </div>
            </>
            <p className="footerText">Designed and built by Yoyo Chen © 2023</p>

        </footer>
    );
}
