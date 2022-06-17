import React, { useState } from "react";
import './Order.scss'
import product from "../Food Product";
import { add_product } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
const Order = () => {
    const [state, setState] = useState(0)
    const [stateIntroDish, setStateIntroDish] = useState(0)
    const [NumberProduct, setNumberProduct] = useState(1)
    const dispatch = useDispatch()
    const CheckDiscount = (discount, cost) => {
        if (discount === 0) {
            return (
                <div className="food-item-cost">
                    <h4>£{cost}</h4>
                </div>
            )
        }
        else {
            const real_price = cost - cost * (discount / 100)
            return (
                <div className="food-item-cost">
                    <h4 style={{ opacity: '0.5', textDecoration: 'line-through' }}>£{cost}</h4>
                    <h5>£{real_price}</h5>
                </div>
            )
        }
    }

    const CheckIntroDiscount = (discount) => {
        if (discount != 0) {
            return (
                <div className="intro-discount">Giảm giá!</div>
            )
        }
    }
    const handleAddProduct = () => {
        const newProduct = {
            id: product[state].id,
            name: product[state].name,
            pathExtra: product[state].pathExtra,
            cost: (product[state].cost - product[state].cost * (product[state].discount / 100)),
            amount: Number(NumberProduct)
        }
        const action = add_product(newProduct)
        dispatch(action)
        toast.success("Sucscess")
    }
    return (
        <div className="order" id="load-dish">
            <div className="order-slide">
                <h1>Product Details</h1>
            </div>
            <div className="signature-dish">
                <div className="signature-dish-container">
                    <div className="signature-dish-image">
                        <img src={product[state].pathMain}></img>
                        {CheckIntroDiscount(product[state].discount)}
                    </div>
                    <div className="signature-dish-order">
                        <h1>{product[state].name}</h1>
                        <h4>{CheckDiscount(product[state].discount, product[state].cost)}</h4>
                        <p>Thing lesser replenish evening called void a sea blessed meat fourth called moveth place behold night own night third in they’re abundant and don’t you’re the upon fruit. Divided open divided appear also saw may fill. whales seed creepeth. Open lessegether he also morning land i saw. Man</p>
                        <form>
                            <input type='number' placeholder="Số lượng" min={1} defaultValue={1} onChange={(Event) => {
                                setNumberProduct(Event.target.value)
                            }}></input>
                            <div className="onsubmit" onClick={handleAddProduct}>Thêm vào giỏ hàng</div>
                        </form>
                    </div>
                </div>
                <div className="intro-dish">
                    <div className="describe" style={{
                        backgroundColor: stateIntroDish === 0 ? '#fff' : '#f9f9f9',
                        borderBottom: stateIntroDish === 0 ? 'none' : '1px solid #ececec'
                    }} onClick={() => setStateIntroDish(0)}>Describe</div>
                    <div className="evaluate" style={{
                        backgroundColor: stateIntroDish === 1 ? '#fff' : '#f9f9f9',
                        borderBottom: stateIntroDish === 1 ? 'none' : '1px solid #ececec'
                    }} onClick={() => setStateIntroDish(1)}>Evaluate</div>
                    <div className="outline"></div>
                </div>
                <div className="intro-describe" style={{ display: stateIntroDish === 0 ? 'inherit' : 'none' }}>
                    <h3>Describe</h3>
                    <p>Thing lesser replenish evening called void a sea blessed meat fourth called moveth place behold night own night third in they’re abundant and don’t you’re the upon fruit. Divided open divided appear also saw may fill. whales seed creepeth. Open lessegether he also morning land i saw. Man</p>
                </div>
                <div className="intro-evaluate" style={{ display: stateIntroDish === 1 ? 'inherit' : 'none' }}>
                    <h3>Evaluate</h3>
                    <p>There are no reviews yet.</p>
                    <span>
                        <h4>Be the first to review “Bread Bun”<br />
                            Your email will not be publicly displayed. Required fields are marked with</h4>
                    </span>
                    <form>
                        <label>Name</label>
                        <input type='text' />
                        <label>Email</label>
                        <input type='text' />
                        <label>Nhận xét của bạn *</label>
                        <textarea />
                        <button>SEND</button>
                    </form>
                </div>
            </div>
            <div className="similar-product">
                <h2>Similar product</h2>
                <div className="similar-product-container">
                    {product.map((item) => {
                        if (state < 4) {
                            if (item.id - 1 >= 4) {
                                return (
                                    <a onClick={() => setState(item.id - 1)} href='#load-dish'>
                                        <div key={item.id} className='food-product-item'>
                                            <div className="food-item-image">
                                                <img src={item.pathExtra}></img>
                                                {CheckIntroDiscount(item.discount)}
                                            </div>
                                            <div className="food-item-intro">
                                                <h3>{item.name}</h3>
                                                {CheckDiscount(item.discount, item.cost)}
                                            </div>
                                        </div>
                                    </a>
                                )
                            }
                        }
                        else {
                            if (item.id - 1 < 4) {
                                return (
                                    <a onClick={() => { setState(item.id - 1) }} href='#load-dish'>
                                        <div key={item.id} className='food-product-item' >
                                            <div className="food-item-image">
                                                <img src={item.pathExtra}></img>
                                                {CheckIntroDiscount(item.discount)}
                                            </div>
                                            <div className="food-item-intro">
                                                <h3>{item.name}</h3>
                                                {CheckDiscount(item.discount, item.cost)}
                                            </div>
                                        </div>
                                    </a>
                                )
                            }
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Order