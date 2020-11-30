import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <NavLink exact to="/">1. About Us</NavLink>
                </li>
                <li>
                    <NavLink exact to="/work">2. Our Work</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">3. Contact Us</NavLink>
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
        text-decoration: underline white solid;
        font-weight: bold;
    }
`
export default Nav