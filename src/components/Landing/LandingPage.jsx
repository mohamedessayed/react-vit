import React, { Component } from 'react'
import SystemCard from '../Parts/SystemCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ApiInstatnce from '../../API/ApiInstance';
import Seo from '../SEO/Seo';

export default class LandingPage extends Component {
    
    undo = [];
    constructor(){
        super()
        console.log('constractor');

        this.state = {
            username : "mohamed",
            address:{
             city:"Alexandria",
             street:"Port saied"
            },
            age:35,
            friends:[],
        }
    }

    updateUser= ()=>{
        this.setState({username:'Ali'})
    }

    undoChange = ()=>{
        let changes = this.undo.pop()

        this.setState(changes)
        
    }

    componentDidMount(){
        console.log('componentDidMount');

        ApiInstatnce.get('everything?q=keyword')
        .then((response)=>response.data)
        .then(({articles})=>{
            console.log(articles);
            
        })
    }


    componentDidUpdate(prevProps, PrevState){
        this.undo.push(PrevState);
        console.log(prevProps,PrevState,'componentDidUpdate');
    }
    
    render() {
        const {username} = this.state;
        const {street,city} = this.state.address;

        return <>
        <Seo title={'Home'} desc={'lorem test app'} keywords={'demo, react app'} />
            <div className="container">
                <div>
                    <h1>Hello, {username}</h1>
                    <p><FontAwesomeIcon icon={faHome} className='fa-lg' />: {street} - {city}</p>
                </div>
                <button onClick={this.updateUser}>click me</button>
                <button onClick={this.undoChange}>undo Change</button>
                <div className="my-3">
                    <div className="row gy-3">
                        
                        <SystemCard col={'col-md-3'} friendName={'walid'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>
                        <SystemCard col={'col-md-3'} friendName={'Ali'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>
                        <SystemCard col={'col-md-3'} friendName={'Samy'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>
                        <SystemCard col={'col-md-3'} friendName={'Samir'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>
                        <SystemCard col={'col-md-6'} friendName={'Ahmed'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>
                        <SystemCard col={'col-md-6'} friendName={'Mustafa'} desc={'Lorem ipsum dolor sit amet consectetur.'}/>

                    </div>
                </div>
            </div>
        </>
    }
}
