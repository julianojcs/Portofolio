import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { lineAnim } from '../animation'

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <NavLink exact to="/">About Us</NavLink>
                </li>
                <li>
                    <NavLink exact to="/work">Our Work</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">Contact Us</NavLink>
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
        height: 1.6rem;
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
export default Nav