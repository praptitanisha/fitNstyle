/*Easy selector helper function
* help select dom elements quicker
*/

const select =(el, all = false) => {
el = el.trim();
if (all) {
return [...document.querySelectorAll(el)];
} else {
return document.querySelector(el);
}
};


/**
* Easy event listener function
* make it easier to add events listner
*/
const on = (type, el, listener, all = false) => {
let selectEl = select(el, all);
if (selectEl) {
if (all) {
selectEl.forEach(e => e.addEventListener(type, listener));
} else {
selectEl.addEventListener(type, listener);
}
}
};
// here, we need setup the isotope
/**
 * portfolio isotope and filter 
 */
window.addEventListener('load', () => {
 let portfolioContainer = select('.product-container');
        if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
    itemSelector: '.product-item',
    layoutMode: 'fitRows',
    percentPosition: true,
    fitRows: {
    gutter: 15,
    },
    });
}});
//filter buttons
document.addEventListener('DOMContentLoaded', function() {
  // grab YOUR container
  var grid = document.querySelector('.product-container');

  // init Isotope on it, pointing at YOUR item class
  var iso = new Isotope(grid, {
    itemSelector: '.product-item',
    layoutMode: 'fitRows'
  });

  // hook up your filter buttons (unchanged)
  var filterButtons = document.querySelectorAll('.filters li');
  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filterValue = btn.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
      document.querySelector('.filters .filter-active').classList.remove('filter-active');
      btn.classList.add('filter-active');
    });
  });
});
