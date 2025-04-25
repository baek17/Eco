import React, { useState, useEffect } from 'react';
import data from './Data'; // 경로 다시

const getImagePath = (name) => `/images/${name.toLowerCase().replace(/\s+/g, '_')}.png`;

function Showcase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const updatedProducts = data.map((product) => ({
        ...product,
        image: product.image || getImagePath(product.name),
      }));
      setProducts(updatedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: '100%', borderRadius: '5px' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString()}원</p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
