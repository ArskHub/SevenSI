import { courseCardData, servicesData, allCourseCardData, msWordCourseData } from "./data/card.js";

// Function to create course card
const courseCard = (course) => {
  return `
    <div class="course-card card bg-light rounded-3 shadow overflow-hidden text-center border-0 mb-4">
      <img src="${course.image}" class="course-image" alt="Course Image" />
      <div class="card-body course-content p-3">
        <h5 class="card-title mb-3 fw-bold">${course.title}</h5>
        <div class="card-text">
          <p class="mb-3">${course.instructor}</p>
          <p class="course-description mb-3">${course.description}</p>
        </div>
        <div class="rating-price d-flex justify-content-between align-items-center mb-3">
          <div class="rating text-warning">
            <span>${course.rating}</span>
            <span class="stars">★★★★★</span>
          </div>
          <div class="price fw-bold text-success">
            <span>${course.price}</span>
          </div>
        </div>
        <div class="d-grid col-6 mx-auto">
          <button class="btn btn-primary py-2 text-white mt-3 add-to-cart">Buy Now</button>
        </div>
      </div>
    </div>
  `;
};

// Function to generate cards
const generateCard = (data, card, container) => {
  data.forEach((value) => {
    container.insertAdjacentHTML("beforeend", card(value));
  });
};

// Initialize containers
const cardContainer = document.querySelector('.courses-container');
if (cardContainer) {
  generateCard(courseCardData, courseCard, cardContainer);
}

// Cart functionality
// Cart functionality
const cart = [];
const cartIcon = document.createElement('div');
cartIcon.id = 'cart-icon';
cartIcon.style.position = 'fixed';
cartIcon.style.bottom = '100px';
cartIcon.style.right = '25px';
cartIcon.style.backgroundColor = '#1e3a8a';
cartIcon.style.color = '#fff';
cartIcon.style.borderRadius = '50%';
cartIcon.style.width = '60px';
cartIcon.style.height = '60px';
cartIcon.style.display = 'flex';
cartIcon.style.alignItems = 'center';
cartIcon.style.justifyContent = 'center';
cartIcon.style.cursor = 'pointer';
cartIcon.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

// Icon and Counter
cartIcon.innerHTML = `
  <i class="fas fa-shopping-cart" style="font-size: 24px;"></i>
  <span id="cart-count" style="
    position: absolute;

    color: white;
    font-size: 14px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  ">Cart</span>
`;

document.body.appendChild(cartIcon);




const cartSidebar = document.createElement('div');
cartSidebar.id = 'cart-sidebar';
cartSidebar.style.position = 'fixed';
cartSidebar.style.top = '0';
cartSidebar.style.right = '-300px';
cartSidebar.style.width = '300px';
cartSidebar.style.height = '100%';
cartSidebar.style.backgroundColor = '#fff';
cartSidebar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
cartSidebar.style.transition = 'right 0.3s ease';
cartSidebar.style.overflowY = 'auto';
cartSidebar.innerHTML = `
  <div style="padding: 20px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center;">
    <h4>Your Cart</h4>
    <button id="close-cart" style="background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>
  </div>
  <div id="cart-items" style="padding: 20px;"></div>
`;
document.body.appendChild(cartSidebar);

const updateCart = () => {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.style.display = 'flex';
      cartItem.style.justifyContent = 'space-between';
      cartItem.style.alignItems = 'center';
      cartItem.style.marginBottom = '10px';
      cartItem.innerHTML = `
        <div>
          <h5>${item.title}</h5>
          <p>${item.price}</p>
        </div>
        <button class="remove-item" data-index="${index}" style="background: none; border: none; color: red; cursor: pointer;">&times;</button>
      `;
      cartItems.appendChild(cartItem);
    });
  }
};

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    alert('Course added to cart');
    const card = e.target.closest('.course-card');
    const course = {
      title: card.querySelector('.card-title').textContent,
      price: card.querySelector('.price').textContent,
    };
    cart.push(course);
    updateCart();
  }
  if (e.target.id === 'cart-icon') {
    cartSidebar.style.right = '0';
  }
  if (e.target.id === 'close-cart' || e.target.classList.contains('remove-item')) {
    if (e.target.classList.contains('remove-item')) {
      const index = e.target.getAttribute('data-index');
      cart.splice(index, 1);
      updateCart();
    } else {
      cartSidebar.style.right = '-300px';
    }
  }
});
