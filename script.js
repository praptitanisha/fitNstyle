//toggle reset button
function toggleresetbtn() {
  const resetbtn = document.querySelector('.reset'); 
  resetbtn.classList.toggle('active');
}
// switch left, middle and right part of banner
 
    
    function switchbanner(name) {
        const banner = document.querySelector('#banner');
        if (!banner.classList.contains(name)) {
          banner.className = 'banner';
          banner.classList.add(name);
          //whenever the switch the banner,the button should toggle
        toggleresetbtn();
         
        }
        return;
      
      }
       //reset button
      function resetbanner(){
        const banner = document.querySelector('#banner');
       banner.className='banner';
       toggleresetbtn();
 
      }
      /***toogle .header-scrolled class to #header when page is scrolled */
      const selectHeader = document.querySelector('#header');
      const backtoTop = document.querySelector('.back-to-top');
      if(selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
          backtoTop.classList.add('active');
          } else {
            selectHeader.classList.remove('header-scrolled');
            backtoTop.classList.remove('active');
          }
        };
        window.addEventListener('load',headerScrolled);
        document.addEventListener('scroll',headerScrolled);
          
          }
        //Scroll back to top of the page
        function scrollToTop() {
          window.scrollTo(0,0);
        }
        function performSearch() {
          const query = document.getElementById("searchInput").value.toLowerCase();
          const results = document.getElementById("searchResults");
        
          const items = [
            { name: "women", id: "women" },
            { name: "men", id: "men" },
            { name: "special", id: "special" }
          ];
        
          const matched = items.filter(item => item.name.includes(query));
        
          if (matched.length) {
            results.innerHTML =
              "<ul>" +
              matched
                .map(i => `<li><a href="#" onclick="scrollToSection('${i.id}')">${i.name}</a></li>`)
                .join("") +
              "</ul>";
          } else {
            results.innerHTML = "<p>No results found</p>";
          }
        }
        
        function scrollToSection(id) {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeSearch();
          }
        }
 // Initialize Isotope
var grid = document.querySelector('.product-grid');
var iso = new Isotope(grid, {
  itemSelector: '.product-item',
  layoutMode: 'fitRows'
});

 
 