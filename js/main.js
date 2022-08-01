$('#hamburger').click(function() {
    $('.hamburger').toggleClass('open');
    $('.menu').toggleClass('open');
   count++;
   console.log(count);
   if(count > 1){
    $('.ham').removeClass('stayopen');
    count = 0;

   }else{
    $('.ham').addClass('stayopen');
   }
});
let count = 0;

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

