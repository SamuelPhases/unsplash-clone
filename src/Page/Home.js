import React from 'react'
import './Home.css'
import './script'
import { Colcade } from 'colcade'       
import InfiniteScroll  from 'react-infinite-scroll-component'
import { FaArrowDown }  from  'react-icons/fa'
import { FaPlus }  from  'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'




// gridBlock.addEventListener('click',()=>{console.log('ok')})

function Home({ imagesList }) {
        

    return (
        <div className='home'>
            <header className='headerHome'>
                <div className="content">
                    <h1>Unsplash  
                        <span>
                            Clone
                        </span> 
                        </h1>
                    <h4>The internet’s source of
                    <span>
                        freely-usable images.    
                    </span>
                    </h4>
                    <h4>
                        Powered by creators everywhere.
                    </h4>
                    <form action="">
                        <button type="submit">Search</button>
                        <input type="search" name="" id="" placeholder='Search free high-resolution photos' />
                    </form>
                    <div className="tab">
                        <p>Trending:</p>
                        <ul>
                            <li>flower, </li>
                            <li>wallpapers, </li>
                            <li>backgrounds, </li>
                            <li>happy, </li>
                            <li>love</li>
                        </ul>
                    </div>
                </div>
            </header>
                <div className="grid"  data-colcade="columns: .grid-col, items: .grid-item" >
                    <div className="grid-col grid-col--1"></div>
                    <div className="grid-col grid-col--2"></div>
                    <div className="grid-col grid-col--3"></div>
                    <div className="grid-col grid-col--4"></div>
                    {console.log(imagesList)}
                    {imagesList.map(image => (
                        <div className="grid-item" key={image.id}>
                            <div className="content content-c">
                                <div className='icon-box'>
                                    <FaPlus />
                                </div>
                                <div className='icon-box'>
                                    <FaHeart/>
                                </div>
                            </div>
                            <div className="content-d content">
                                <div className='details'>
                                    <FaRegUserCircle />
                                    <h3>
                                        {image.user.name}
                                    </h3>
                                </div>
                                <div className='icon-box'>
                                    <FaArrowDown />
                                </div>
                            </div>
                            <img src={image.urls.full} alt={image.alt_description} />
                        </div>
                    )
                    ) }
                </div>
        </div>
    )
}

export default Home
