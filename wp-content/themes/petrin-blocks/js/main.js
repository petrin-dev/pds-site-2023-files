(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var a11y = require('./src/a11y.js')
var animation = require('./src/animation.js')
var navigation = require('./src/navigation.js')
var bios = require('./src/bios.js')
var gallery = require('./src/gallery.js')
var faq = require('./src/faq.js')
var details = require('./src/details.js')
var mentSubnav = require('./src/mh-subnav.js')
var services = require('./src/services.js')
},{"./src/a11y.js":2,"./src/animation.js":3,"./src/bios.js":4,"./src/details.js":5,"./src/faq.js":6,"./src/gallery.js":7,"./src/mh-subnav.js":8,"./src/navigation.js":9,"./src/services.js":10}],2:[function(require,module,exports){
/* ACCESSIBILITY */

// Adding aria-label to logos linking to Homepage
let headerLogos = document.querySelectorAll('header a[href="/"]')
if (headerLogos) {
    headerLogos.forEach(function(each){
        each.ariaLabel = "Return to Homepage"
    })
}
let footerLogo = document.querySelector('footer a[href="/"]')
if (footerLogo) {
    footerLogo.ariaLabel = "Return to Homepage"
}

// Adding aria-label to images for Work Pages
let workClients = document.querySelectorAll('.work-client-item')
if (workClients) {
    workClients.forEach(function(each){
        let labelingText = each.querySelector('.label-link')
        let toBeLabeled = each.querySelector('.work-image a')
        toBeLabeled.ariaLabel = `Click to go to the ${labelingText.textContent} client page`
    })
}
},{}],3:[function(require,module,exports){
// Animation Handler -- checks if BODY children have been scrolled into view
function revealElements() {
    // Get all elements with the "has-animation" class
    const animatedElements = document.querySelectorAll(".has-animation");
  
    // Loop through each animated element
    for (let i = 0; i < animatedElements.length; i++) {
      const element = animatedElements[i];
  
      // Check if the element is partially in view
      const isPartiallyInView = isElementPartiallyInView(element);
      if (isPartiallyInView) {
        // If the element is partially in view, append the "has-been-revealed" class to it
        element.classList.add("has-been-revealed");
      }
    }
  }
  
  function isElementPartiallyInView(element) {
    // Get the element's bounding rect
    const boundingRect = element.getBoundingClientRect();
  
    // Check if the element is partially within the viewport
    return (
      boundingRect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      boundingRect.bottom >= 0
    );
  }
  
// Run these checks on scroll and on page load
window.addEventListener("scroll", revealElements);
revealElements();

// Wrap buttons in <span> to support animated state
const buttons = document.querySelectorAll('.wp-block-button a');
buttons.forEach(button => {
  const span = document.createElement('span');
  span.textContent = button.textContent;
  button.textContent = '';
  button.appendChild(span);
});
},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],6:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],7:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],8:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],9:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],10:[function(require,module,exports){
window.onscroll = function() { scrollCheck() }

function scrollCheck() {
    let distance = window.pageYOffset
    let workWeDoItems = document.querySelectorAll('.work-we-do-items > div')
    workWeDoItems.forEach(function(each, index){
        // console.log(each.style.top)
        // console.log(each)
    })
    // console.log(distance)
}

if (document.querySelector('.privacy-policy-toggle')) {
    let privacyToggle = document.querySelector('.privacy-policy-toggle strong')
    privacyToggle.addEventListener('click',function(click){
        let privacyPolicyExtended = document.querySelector('.privacy-policy-extended')
        privacyPolicyExtended.classList.toggle('active')
        if (privacyPolicyExtended.classList.contains('active')) {
            privacyToggle.textContent = 'Hide expanded Privacy Policy →'
        } else {
            privacyToggle.textContent = 'Read entire Privacy Policy →'
        }
    })
}

if (document.querySelector('.work-we-do-item')) {
    let serviceItems = document.querySelectorAll('.work-we-do-item')
    serviceItems.forEach(function(each){
        each.addEventListener('click',function(click){
            each.classList.toggle('active')
            let expandCollapse = each.querySelector('.expand-collapse')
            if (each.classList.contains('active')) {
                expandCollapse.textContent = '—'
            } else {
                expandCollapse.textContent = '＋'
            }
        })
    })
}

let gradient = document.createElement('div')
gradient.classList.add('gradient')
document.body.appendChild(gradient)

if (document.querySelector('.work-weve-done-items')) {
    let portfolioItems = document.querySelectorAll('.work-weve-done-items .wp-block-column')
    portfolioItems.forEach(function(each){
        each.addEventListener('click',function(click){
            each.classList.toggle('active')
        })
    })
}

if (document.querySelector('.blog-post-item')){
    let blogItems = document.querySelectorAll('.blog-post-item')
    blogItems.forEach(function(each){
        let link = each.querySelector('a')
        each.addEventListener('click',function(click){
            window.location.href = link.href
        })
    })
}
},{}]},{},[1]);
