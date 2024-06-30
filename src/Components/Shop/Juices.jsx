import React from 'react';
import ProductCard from '../Card/ProductCard';
import Mint from '../../Public/Images/Mint.jpg';
import HerbJuice from '../../Public/Images/CardJuices.jpg'
import CarrotJuice from '../../Public/Images/Juice.jpg'



function Juices() {
  const Details = [
    {
      id: '1',
      Uniqueid:'J1',
      limit:5,
      title: 'Orange Juice',
      image: 'https://cdn.pixabay.com/photo/2023/04/13/21/14/ai-generated-7923488_1280.jpg',
      discountedPercent: '22%',
      price: '₹110',
      realPrice: '₹140',
      quantity: '1 Ltr',
    },
    {
      id: '2',
      Uniqueid:'J2',
      limit:8,
      title: 'Herb Juice',
      image: HerbJuice,
      discountedPercent: 'Deal Of Day',
      price: '₹140',
      realPrice: '₹200',
      quantity: '1 Ltr',
    },
    {
      id: '3',
      Uniqueid:'J3',
      limit:10,
      title: 'Carrot Juice',
      image: CarrotJuice,
      discountedPercent: '29%',
      price: '₹108',
      realPrice: '₹142',
      quantity: '1 Ltr',
    },
    {
      id: '4',
      Uniqueid:'J4',
      limit:6,
      title: 'Lime Juice',
      image: 'https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg',
      discountedPercent: '25%',
      price: '₹110',
      realPrice: '₹142',
      quantity: '1 Ltr',
    },
    {
      id: '5',
      Uniqueid:'J5',
      limit:10,
      title: 'Mint',
      image: Mint,
      discountedPercent: '19%',
      price: '₹18',
      realPrice: '₹22',
      quantity: '200gm',
    },
    {
      id: '6',
      Uniqueid:'J6',
      limit:10,
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
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  place-items-center  gap-5   overflow-auto  mt-10 mb-5" >
        {Details.map((detail) => (
          <ProductCard 
            key={detail.id}
            id={detail.Uniqueid}
            limit={detail.limit}
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
