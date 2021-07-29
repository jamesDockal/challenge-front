import React, { useState } from "react";
import { cart } from "../products.json";
import "../styles/carditem.css";

export default function CardItems() {
  function calculateTotalPrice() {
    let totalPrice = 0;
    cart.item.map((item) => {
      totalPrice += item.bestPrice;
    });

    const formattedPrice = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(totalPrice / 100);

    return formattedPrice;
  }

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  return (
    <div className="shopping-items">
      <div className="triangulo" />
      <div className="cards-container">
        {cart.item.map((item) => {
          return (
            <div className="item-card" key={item.productId}>
              <img src={item.image} alt="" />
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="quantity-price">
                  <span className="item-quantity">Qtd: {item.quantity}</span>
                  <span className="item-price">{item.bestPriceFormated}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="finalize-buy">
        <span className="total-price">Total do pedido: </span>
        <strong className="price">{totalPrice}</strong>
      </div>
      <button className="card-button">FINALIZAR COMPRA</button>
    </div>
  );
}
