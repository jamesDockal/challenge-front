import React from "react";
import { cart } from "../products.json";
import "../styles/carditem.css";

export default function CardItems() {
  return (
    <div className="shopping-items">
      <div className="cards-container">
        {cart.item.map((item) => (
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
        ))}
      </div>
      <div className="finalize-buy">
        <span className="total-price">Total do pedido: </span>
        <strong className="price">R$ 9999</strong>
      </div>
      <button className="card-button">FINALIZAR COMPRA</button>
    </div>
  );
}
