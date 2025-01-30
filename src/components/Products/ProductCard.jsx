import React, { Component } from 'react'

export default class ProductCard extends Component {

    
    render() {
        
        const {title,description,price,image} = this.props.item;
        const {clickEvent} = this.props;
        return <>
            <div className="col-md-4">
                <div>
                    <div className="card p-3">
                        <div className='overflow-hidden' style={{height:"200px"}}>
                            <img src={image} alt={title} className='w-100' loading='lazy' />
                        </div>
                        <h2 className='text-truncate'>{title}</h2>
                        <p>{description.slice(0,50)}...</p>
                        <h3 className='text-secondary'>${price}</h3>
                        <div>
                            <button onClick={clickEvent} className='btn btn-danger'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
