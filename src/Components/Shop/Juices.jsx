import React from 'react';
import ProductCard from '../Card/ProductCard';
import Tomato from '../../Public/Images/Tomato.jpg';
import Mint from '../../Public/Images/Mint.jpg';

function Juices() {
  const Details = [
    {
      id: '1',
      title: 'Orange Juice',
      image: 'https://cdn.pixabay.com/photo/2023/04/13/21/14/ai-generated-7923488_1280.jpg',
      discountedPercent: '22%',
      price: '₹110',
      realPrice: '₹140',
      quantity: '1 Ltr',
    },
    {
      id: '2',
      title: 'Tomato',
      image: Tomato,
      discountedPercent: 'Deal Of Day',
      price: '₹30',
      realPrice: '₹60',
      quantity: '1kg',
    },
    {
      id: '3',
      title: 'Mint',
      image: Mint,
      discountedPercent: '19%',
      price: '₹18',
      realPrice: '₹22',
      quantity: '200gm',
    },
    {
      id: '4',
      title: 'Mint',
      image: Mint,
      discountedPercent: '19%',
      price: '₹18',
      realPrice: '₹22',
      quantity: '200gm',
    },
    {
      id: '5',
      title: 'Mint',
      image: Mint,
      discountedPercent: '19%',
      price: '₹18',
      realPrice: '₹22',
      quantity: '200gm',
    },
    {
      id: '6',
      title: 'Mint',
      image: Mint,
      discountedPercent: '19%',
      price: '₹18',
      realPrice: '₹22',
      quantity: '200gm',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 mb-5" data-aos="fade-down-left">
        {Details.map((detail) => (
          <ProductCard 
            key={detail.id}
            Title={detail.title}
            Image={detail.image}
            DiscountedPercent={detail.discountedPercent}
            Price={detail.price}
            RealPrice={detail.realPrice}
            Quantity={detail.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Juices;
