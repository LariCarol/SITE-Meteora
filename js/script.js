/* PAGE HOME:NAVIBAR */
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Remove a classe 'selected' e 'active' de todos os links
      navLinks.forEach(link => link.classList.remove('selected', 'active'));

      // Adiciona a classe 'selected' e 'active' ao link clicado
      this.classList.add('selected', 'active');

      // Permite o redirecionamento padrão após um pequeno atraso
      setTimeout(() => {
        window.location.href = this.href;
      }, 200); // atraso de 200ms para o efeito visual ser aplicado
    });
  });
});

/* PAGE HOME - PRODUITS QUI CARTONNENT - CARDS */

document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'scale(1)';
        });
    });
});

// (PAGE Produits)
//Filtre et Animations des Produits
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const filterItems = document.querySelectorAll('.filter-item');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          filterItemsByCategory(filter);
      });
  });

  searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = searchInput.value.toLowerCase().trim();
      filterItemsBySearch(query);
  });

  function filterItemsByCategory(filter) {
      if (filter === 'all') {
          filterItems.forEach(item => {
              item.style.display = 'block';
              item.classList.add('visible');
          });
      } else {
          filterItems.forEach(item => {
              if (item.classList.contains(filter)) {
                  item.style.display = 'block';
                  item.classList.add('visible');
              } else {
                  item.style.display = 'none';
                  item.classList.remove('visible');
              }
          });
      }
  }

  function filterItemsBySearch(query) {
      if (query === '') {
          filterItemsByCategory('all');
      } else {
          filterItems.forEach(item => {
              const itemText = item.querySelector('.card-text').textContent.toLowerCase();
              if (itemText.includes(query)) {
                  item.style.display = 'block';
                  item.classList.add('visible');
              } else {
                  item.style.display = 'none';
                  item.classList.remove('visible');
              }
          });
      }
  }
});

$(document).ready(function(){
  $('#slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

  