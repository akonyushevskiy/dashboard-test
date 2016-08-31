import React, { Component, PropTypes } from 'react';

export default class SidebarNav extends Component {
    render () {
        return (
            <nav className="sidebarNav">
                <a href="#" className="user">AF</a>
                <ul className="links">
                    <li className="active"><a href="#">
                        <svg role="img"><use xlinkHref="./images/sprite.symbol.svg#chat"/></svg>
                    </a></li>
                    <li><a href="#">
                        <svg role="img"><use xlinkHref="./images/sprite.symbol.svg#profile"/></svg>
                    </a></li>
                    <li><a href="#">
                        <svg role="img"><use xlinkHref="./images/sprite.symbol.svg#gear"/></svg>
                    </a></li>
                </ul>
            </nav>
        )
    }
}
