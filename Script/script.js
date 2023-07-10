const buttons = document.querySelectorAll("[data-carousel-button]");
const intervalDuration = 4000; // Set the duration (in milliseconds) for each slide

let autoSliderInterval; // Variable to store the interval ID

// Function to start the auto-slider
function startAutoSlider() {
  autoSliderInterval = setInterval(() => {
    triggerSlide("next"); // Trigger the slide to the next image
  }, intervalDuration);
}

// Function to stop the auto-slider
function stopAutoSlider() {
  clearInterval(autoSliderInterval);
}

// Function to trigger a slide based on the direction
function triggerSlide(direction) {
  const slides = document.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex;

  if (direction === "next") {
    newIndex = [...slides.children].indexOf(activeSlide) + 1;
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }
  } else if (direction === "prev") {
    newIndex = [...slides.children].indexOf(activeSlide) - 1;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
  }

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

// Event listeners for the carousel buttons
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    stopAutoSlider(); // Stop the auto-slider when a button is clicked
    const direction = button.dataset.carouselButton;
    triggerSlide(direction);
  });
});

// Start the auto-slider when the page loads
startAutoSlider();

//Slider Ends

//Product-Gallery- starts
var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("smallimg");
  smallimg[0].onclick = function(){
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function()
{
  productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function()
{
  productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function()
{
  productimg.src = smallimg[3].src;
}
});


//Product & Cart

let productsHTML = '';

//2. Generate Html
products.forEach((product) => {
  productsHTML += `
      <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
      ${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});
//Generate Html

document.querySelector('.js-products-grid')
 .innerHTML = productsHTML;  
 
 document.querySelectorAll('.js-add-to-cart')
   .forEach((button) => {
     button.addEventListener('click', () => {
   const productId =  button.dataset.productId;

   let macthingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          macthingItem = item;
        }
      })

      if (macthingItem) {
        macthingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }
      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
     });
   });

