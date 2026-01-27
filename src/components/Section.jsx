import React, { useState } from 'react';
import EditableMedia from './EditableMedia';
import EditableText from './EditableText';
import { useCart } from './CartContext';

const Section = ({ data }) => {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Welkom bij de Webshop</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {(data.producten || []).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg w-64">
                <EditableMedia src={item.product_foto_url} className="w-full aspect-square object-cover mb-4 rounded-xl" />
                <h3 className="font-bold">{item.naam}</h3>
                <div className="text-accent font-bold">€{item.prijs}</div>
                <button onClick={() => addToCart({ id: index, title: item.naam, price: parseFloat(item.prijs) })} className="w-full py-2 mt-4 bg-accent text-white rounded-lg">Koop nu</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Section;