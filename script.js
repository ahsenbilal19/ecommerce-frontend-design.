document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const categorySelect = document.getElementById("category-select");
  

  if (searchForm && categorySelect) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const selectedCategory = categorySelect.value;

      // Redirect logic
      if (selectedCategory === "mobile-accessory") {
        window.location.href = "mobile-accessory.html";
      } else if (selectedCategory === "electronics") {
        window.location.href = "electronics.html";
      } else if (selectedCategory === "smartphone") {
        window.location.href = "smartphone.html";
      } else if (selectedCategory === "modern-tech") {
        window.location.href = "modern-tech.html";
      } else {
        alert("This category doesn't have a page yet.");
      }
    });
  }
});

// Toggle dropdowns
document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    parent.classList.toggle('active');
  });
});

// Sample filtering logic (you should expand based on product attributes)
const filters = {
  brand: [],
  feature: [],
  condition: [],
  rating: [],
};

function filterProducts() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const brand = card.dataset.brand;
    const feature = card.dataset.feature;
    const condition = card.dataset.condition;
    const rating = card.dataset.rating;

    const brandMatch = filters.brand.length === 0 || filters.brand.includes(brand);
    const featureMatch = filters.feature.length === 0 || filters.feature.includes(feature);
    const conditionMatch = filters.condition.length === 0 || filters.condition.includes(condition);
    const ratingMatch = filters.rating.length === 0 || filters.rating.includes(rating);

    if (brandMatch && featureMatch && conditionMatch && ratingMatch) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Checkbox change listeners
['brand', 'feature', 'condition', 'rating'].forEach(type => {
  document.querySelectorAll(`.${type}-filter`).forEach(input => {
    input.addEventListener('change', () => {
      filters[type] = Array.from(document.querySelectorAll(`.${type}-filter:checked`))
                           .map(cb => cb.value);
      filterProducts();
    });
  });
});
