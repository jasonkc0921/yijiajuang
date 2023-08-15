import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../data'
// import CartButtons from './CartButtons'
// import { useProductsContext } from '../context/products_context'
// import { useUserContext } from '../context/user_context'

const Navbar_new = () => {
  return (
    <NavContainer>
      <section className='nav-container'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} className='logo' alt="yijiajuang" />
          </Link>
          <button type='button' className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link)=>{
            const {id, text, url} = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}

        </ul>

      </div>
      </section>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  // height: 3rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;

.nav-container {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  z-index:999;
}

  .nav-center {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 80%;
    margin: 0 auto;
    // max-width: var(--max-width);
    font-weight: 500;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50px;
      margin-left: 15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  .logo {
    justify-self: center;
    height: 45px;
  }

  @media (min-width: 560px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 1rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar_new