import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import { motion } from 'framer-motion'

const Nav = () => {
// const Nav = ({ location }) => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <NavLink exact to="/">About Us</NavLink>
                    {/* <Line transition={{duration:.5}} initial={{width: '0%'}} animate={{width: location.pathname === '/' ? '50%' : '0%'}}></Line> */}
                </li>
                <li>
                    <NavLink exact to="/work">Our Work</NavLink>
                    {/* <Line transition={{duration:.5}} initial={{width: '0%'}} animate={{width: location.pathname === '/work' ? '50%' : '0%'}}></Line> */}
                </li>
                <li>
                    <NavLink exact to="/contact">Contact Us</NavLink>
                    {/* <Line transition={{duration:.5}} initial={{width: '0%'}} animate={{width: location.pathname === '/contact' ? '50%' : '0%'}}></Line> */}
                </li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: .5rem;
        #logo{
            display: inline-block;
            padding: 2rem 1rem 1rem;
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li{
                padding: 0;
            }
        }
        .active::before {
            width: 115%;
        }
    }
    .active{
        /* text-decoration: underline white solid; */
        font-weight: bold;
    }
    .active::before {
        content: '';
        position: absolute;
        border-color: #23d997;
        border-style: solid;
        border-width: 0 0.2rem 0.2rem 0;
        width: 6.5rem;
        height: 100%;
        bottom: -0.2rem;
        right: -0.55rem;
        margin-top: -1em;
        border-radius: 0 0 10px 0;
        transform: rotate(4deg);
        -webkit-transform: rotate(4deg);
        transition: all 0.4s linear;
    }
    .active:hover::before {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        width: 0;
        border-color: #D96ED4;
    }
`
// const Line = styled(motion.div)`
// 	height: 0.3rem;
// 	background: #23d997;
// 	width: 0%;
// 	position: absolute;
// 	bottom: -80%;
// 	left: 60%;
// `;
export default Nav