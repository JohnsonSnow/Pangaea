import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";

const Cart = props => {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();

    return (
        <>
            <div
                style={{
                borderLeft: "1px solid #ddd",
                display: props.mode ? "initial" : "none",
                position: "fixed",
                right: 0,
                top: 0,
                height: "100vh",
                padding: "2rem",
                backgroundColor: "#f8f9fa",
                maxWidth: 400,
                width: "100%",
                zIndex: 1,
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <i class="fa fa-arrow-circle-left" onClick={() => props.setMode(false)}></i>

                <h6>Your Cart</h6>
                </div>
                {
                    items.map((item) =>(
                        <div class="row" style={{ backgroundColor: "white", marginBottom: "10px", padding: "10px "}}>
                          <div class="col-md-12">
                          <p class="pull-left">{item.title}</p><i class="fa fa-close pull-right" onClick={() => removeItem(item.id)}></i>
                          </div>
                            <div class="col-md-4">
                                <button class="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} > - </button>
                                { item.quantity }
                                <button class="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                            </div>
                            <div class="col-md-4">
                                {item.price * item.quantity}
                            </div>
                            <div class="col-md-4">
                                <img src={item.image_url} width="30px" height="30px"/>
                            </div>
                        </div>
                      
                      
                    ))
                }
                {/* {count > 0 &&
                cart.map(([sku, quantity]) => (
                    <CartItem key={sku.id} sku={sku} quantity={quantity} />
                ))}
                {count === 0 && <span>No items in cart.</span>}
                {count > 0 && <Checkout />} */}
            </div>
        </>
        
    )
}

export default Cart;