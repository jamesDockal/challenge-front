import React from "react";
import { cart } from "../products.json";

export default function CardItems() {
  return (
    <div className="cards-container">
      {cart.item.map((item) => (
        <div className="item-card" key={item.productId}>
          <img src={item.image} alt="" />
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">Qtd: {item.quantity}</span>
          <span className="item-price">{item.bestPriceFormated}</span>
        </div>
      ))}
      <strong className="total-price">Total do pedido: R$ 9999</strong>
      <button className="card-button">FINALIZAR COMPRA</button>
    </div>
  );
}
