import React, { Component, PropTypes } from 'react';

export default class HeaderNav extends Component {
    render () {
        return (
            <nav className="headerNav">
                <ul className="links">
                    <li className="active"><a href="#">Agent Activity</a></li>
                </ul>
            </nav>
        )
    }
}
