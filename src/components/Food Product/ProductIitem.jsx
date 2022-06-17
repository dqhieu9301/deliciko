import React from "react";
import { useDispatch } from "react-redux";
import { delete_product } from "../redux/actions/action";
import './ProductItem.scss'
const ProductItem = (props) => {
    const dispatch = useDispatch()
    const RemoveProduct = () => {
        const remove = delete_product(props.data)
        dispatch(remove)
    }
    return (
        <div className='product-item'>
            <img src={props.data.pathExtra}></img>
            <div className='item-intro'>
                <h4>{props.data.name}</h4>
                <h5>{props.data.amount} x £{props.data.cost}</h5>
            </div>
            <button onClick={RemoveProduct}>X</button>
        </div>
    )
}

export default ProductItem