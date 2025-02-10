import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Seo from "./SEO/Seo"

function FunctionalComponent(){
    
    //hooks

    const [username,setUsername] = useState("Mohamed")
    const [age,setAge] = useState(0)
    const [product,setProduct] = useState([])

    
    useEffect(()=>{
        console.log('componentDidMount');
        
    },[age])

    useEffect(()=>{
        if (product.length === 0) {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log('api');
                
                setProduct(json)
            })
        }
        console.log('product');
        
    },[product])

    const updateBtn = ()=>{
        setTimeout(() => {
            setUsername('Walid')
        }, 1000);
    }

    const updateBtnAge = ()=>{
        setTimeout(() => {
            setProduct([1])
        }, 1000);
    }

    return <>
    <Seo title={'functional component'} desc={'lorem test app'} keywords={'demo, react app'} />
        <h2>FunctionalComponent</h2>
        <h3>{username} - {age} - {product.length}</h3>
        <button onClick={updateBtn}>update</button>
        <button onClick={updateBtnAge}>updateAge</button>
    </>
}

export default FunctionalComponent