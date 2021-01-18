import React from 'react'
import './Single.css'

function Single() {
    return (
        <div className='single--container'>
            <div className="single--content">
                <div className="header--single">
                    <div className="header--detail">
                        <div className="detail">
                            <div className="dp"></div>
                            <div className="name">
                                <h4>Lorem Ips</h4>
                                <p>@Clcik</p>
                            </div>
                        </div>
                    </div>
                    <div className="header--like">
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon-btn">
                            <button>download</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>
                <div className="display--image">
                    <img src="" alt=""/>
                </div>
                <div className="locale">
                    <div className="locale-place">
                        <p>Place, UK</p>
                    </div>
                    <div className="btns">
                        <div className="icon">share</div>
                        <div className="icon">info</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single
