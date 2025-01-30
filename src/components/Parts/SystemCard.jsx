import React, { Component } from 'react'

export default class SystemCard extends Component {
    render() {
        const {col,friendName,desc} = this.props;
        
        return <>
            <div className={col}>
                <div>
                    <div className="card p-3">
                        <h2>{friendName}</h2>
                        <p>{desc}</p>
                        <a href="mailto:mail@mail.com">mail me </a>
                    </div>
                </div>
            </div>
        </>
    }
}
