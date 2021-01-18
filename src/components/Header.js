import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <nav className="headerRowOne">
                <a href="" className="logo">
                    <p>Unsplash</p>
                    <p>Clone</p>
                </a>
                <div className="search">
                    <form action="">
                        <button type="submit">Search</button>
                        <input type="search" name="" id=""  required/>
                    </form>
                </div>
                <div className="info">
                    <ul>
                        <li>brands</li>
                        <li>explore</li>
                        {/* <li></li> */}
                    </ul>
                    <button>Submit a photo</button>
                    <ul>
                        <li>Log in</li>
                        <li>Join free</li>
                    </ul>
                </div>
            </nav>
            <nav className="headerRowTwo">
                <ul>
                    <li className='active'>editorial</li>
                    <li>wallpapers</li>
                    <li>nature</li>
                    <li>people</li>
                    <li>architecture</li>
                    <li>current events</li>
                    <li>experimental</li>
                    <li>fashion</li>
                    <li>film</li>
                    <li>health & wellness</li>
                    <li>interiors</li>
                    <li>street photography</li>
                    <li>View all</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
