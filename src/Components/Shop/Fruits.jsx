import React from 'react';
import ProductCard from '../Card/ProductCard';


function Fruits() {
  const Details = [
    {
      id: 1,
      limit:12,
      title: "Oranges",
      Image: 'https://cdn.pixabay.com/photo/2023/12/08/10/56/mandarins-8437425_1280.jpg',
      DiscountedPercent: "10%",
      Price: '₹50',
      Quantity: "1kg",
      RealPrice: "₹60"
    },
    {
      id: 2,
      limit:5,
      title: "Banana",
      Image: 'https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg',
      DiscountedPercent: "Great Offer",
      Price: '₹50',
      Quantity: "12pc",
      RealPrice: "₹65"
    },
    {
      id: 3,
      limit:8,
      title: "Watermelon",
      Image: 'https://cdn.pixabay.com/photo/2016/11/21/15/46/watermelon-1846051_960_720.jpg',
      DiscountedPercent: "30%",
      Price: '₹45',
      Quantity: "1.5kg - 2kg",
      RealPrice: "₹50"
    },
    {
      id: 4,
      limit:15,
      title: "Alphanso Mango",
      Image: 'https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111_1280.jpg',
      DiscountedPercent: "27%",
      Price: '₹60',
      Quantity: "1kg",
      RealPrice: "₹70"
    },
    {
      id: 5,
      limit:12,
      title: "Oranges",
      Image: 'https://cdn.pixabay.com/photo/2023/12/08/10/56/mandarins-8437425_1280.jpg',
      DiscountedPercent: "10%",
      Price: '₹50',
      Quantity: "1kg",
      RealPrice: "₹60"
    },
    {
      id: 6,
      limit:5,
      title: "Banana",
      Image: 'https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg',
      DiscountedPercent: "Great Offer",
      Price: '₹50',
      Quantity: "12pc",
      RealPrice: "₹65"
    },
    {
      id: 7,
      limit:8,
      title: "Watermelon",
      Image: 'https://cdn.pixabay.com/photo/2016/11/21/15/46/watermelon-1846051_960_720.jpg',
      DiscountedPercent: "30%",
      Price: '₹45',
      Quantity: "1.5kg - 2kg",
      RealPrice: "₹50"
    },
    {
      id: 8,
      limit:15,
      title: "Alphanso Mango",
      Image: 'https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111_1280.jpg',
      DiscountedPercent: "27%",
      Price: '₹60',
      Quantity: "1kg",
      RealPrice: "₹70"
    }
  ];

  return (
    <div className="flex justify-center">
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5 overflow-auto mt-10 mb-5">
        {Details.map((detail) => (
          <ProductCard 
            key={detail.id}
            limit={detail.limit}
            Title={detail.title}
            Image={detail.Image}
            DiscountedPercent={detail.DiscountedPercent}
            Price={detail.Price}
            RealPrice={detail.RealPrice}
            Quantity={detail.Quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Fruits;
