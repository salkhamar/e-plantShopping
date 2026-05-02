import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();

  // Shows either product listing page or shopping cart page
  const [showCart, setShowCart] = useState(false);

  // Tracks plants already added so their buttons become disabled
  const [addedToCart, setAddedToCart] = useState({});

  // Read cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity shown in cart icon
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Keeps Add to Cart buttons in sync with the Redux cart.
// If an item is deleted from the cart, its button becomes active again.
useEffect(() => {
  const addedItems = {};

  cartItems.forEach((item) => {
    addedItems[item.name] = true;
  });

  setAddedToCart(addedItems);
}, [cartItems]);

  // Plant data grouped by category
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the air and removes toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to care for and effective at removing toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies the air and has healing properties for skin.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Citrusy scent, relieves stress and promotes sleep.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description:
            'Hyacinth is a beautiful flowering plant known for its fragrance.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        {
          name: 'Oregano',
          image:
            'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
          description:
            'Contains compounds that can help deter certain insects.',
          cost: '$10',
        },
        {
          name: 'Marigold',
          image:
            'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
          description: 'Natural insect repellent that adds color to gardens.',
          cost: '$8',
        },
        {
          name: 'Geraniums',
          image:
            'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
          description:
            'Known for insect-repelling properties and pleasant scent.',
          cost: '$20',
        },
        {
          name: 'Basil',
          image:
            'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
          description: 'Repels flies and mosquitoes, also used in cooking.',
          cost: '$9',
        },
        {
          name: 'Citronella',
          image:
            'https://cdn.pixabay.com/photo/2017/07/19/15/23/flower-2519641_1280.jpg',
          description: 'Popular plant used to help repel mosquitoes.',
          cost: '$16',
        },
        {
          name: 'Catnip',
          image:
            'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
          description: 'Repels mosquitoes and attracts cats.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Chamomile',
          image:
            'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Soothes anxiety and promotes sleep.',
          cost: '$15',
        },
        {
          name: 'Echinacea',
          image:
            'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Boosts immune system and helps fight colds.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image:
            'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Relieves digestive issues and headaches.',
          cost: '$13',
        },
        {
          name: 'Sage',
          image:
            'https://cdn.pixabay.com/photo/2017/06/02/18/24/sage-2364397_1280.jpg',
          description: 'A useful herb often used for wellness and cooking.',
          cost: '$11',
        },
        {
          name: 'Thyme',
          image:
            'https://cdn.pixabay.com/photo/2018/06/12/20/17/thyme-3471697_1280.jpg',
          description: 'A medicinal herb with a fresh, earthy aroma.',
          cost: '$12',
        },
        {
          name: 'Calendula',
          image:
            'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'Heals wounds and soothes skin irritations.',
          cost: '$12',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image:
            'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
          description: 'Thrives in low light and requires minimal watering.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image:
            'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Tolerates neglect and grows in many conditions.',
          cost: '$10',
        },
        {
          name: 'Cast Iron Plant',
          image:
            'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Hardy plant that tolerates low light and neglect.',
          cost: '$20',
        },
        {
          name: 'Succulents',
          image:
            'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Drought-tolerant plants with unique shapes.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image:
            'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Requires minimal care and adds color indoors.',
          cost: '$22',
        },
        {
          name: 'Cactus',
          image:
            'https://cdn.pixabay.com/photo/2017/05/12/14/21/cactus-2306839_1280.jpg',
          description: 'Very low maintenance and perfect for sunny spaces.',
          cost: '$12',
        },
      ],
    },
  ];

  // Adds selected plant to Redux cart and disables its button
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  // Goes back to landing page
  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  // Shows cart page
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  // Shows product listing page
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  // Passed to CartItem so Continue Shopping returns to products
  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar required on Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery Logo"
            />

            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3>Paradise Nursery</h3>
                <i>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div className="nav-links">
          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>

          <a href="#" onClick={handleCartClick} className="cart-link">
            🛒
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <main className="product-page">
          {plantsArray.map((section) => (
            <section key={section.category} className="plant-section">
              <h2>{section.category}</h2>

              <div className="product-grid">
                {section.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>

                    <p className="plant-description">{plant.description}</p>

                    <p className="plant-cost">{plant.cost}</p>

                    <button
                      className={
                        addedToCart[plant.name]
                          ? 'added-button'
                          : 'add-cart-button'
                      }
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name]
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;