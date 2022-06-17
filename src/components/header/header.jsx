import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../img/logo.png';
import '../../img/fontawesome-free-6.1.0-web/css/all.min.css';
import { useSelector } from 'react-redux'
import ProductItem from '../Food Product/ProductIitem';
const Header = () => {
    const [state, setState] = useState(false)
    const [stateCart, setStateCart] = useState(false)
    const data = useSelector(state => state.dish)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setState(true)
            }
            else {
                setState(false)
            }
        })
    }, [])

    const RenderProduct = (data) => {
        if (data.list.length === 0) {
            return (
                <h4>Chưa có sản phẩm nào trong giỏ hàng</h4>
            )
        }
        else {
            return (
                <div className='cart-product-main'>
                    {data.list.map((item) => {
                        return (
                            <ProductItem data={item} />
                        )
                    })}
                </div>
            )
        }
    }

    const totalCost = (data) => {
        let results = 0
        for (let i = 0; i < data.list.length; i++) results += data.list[i].cost * data.list[i].amount
        return results
    }
    return (
        <>
            <div className='header' id='header-up'>
                <div className='header-container'>
                    <a href='' className='container-logo'><img src={logo}></img></a>
                    <div className='nav-bar'>
                        <ul>
                            <li><a href='/home'>HOME</a></li>
                            <li><a href='/reservation'>RESERVATION</a></li>
                            <li><a href='/about'>ABOUT</a></li>
                            <li><a href='/order'>ORDER ONLINE</a></li>
                            <li><a href='/login'>LOGIN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cart-logo' onClick={() => setStateCart(!stateCart)}>
                <i class="fa-solid fa-cart-plus"></i>
                <div className='amout-products'>{data.list.length}</div>
            </div>
            <div className='scroll-up' style={{ display: state ? '' : 'none' }}>
                <a href='#header-up'><i class="fa-solid fa-angle-up"></i></a>
            </div>
            <div className='cart' style={{ transform: stateCart ? 'translateX(0)' : 'translateX(100%)' }}>
                <i class="fa-solid fa-xmark" onClick={() => setStateCart(!stateCart)}></i>
                <div className='cart-product-infor'>
                    {RenderProduct(data)}
                    <span>Tổng tiền : {totalCost(data)}</span>
                </div>
            </div>
        </>
    )
}

export default Header