console.log("it's working....");

const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

//Update year
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

//Adding a Button to scroll to the top
const scrollBtn = document.getElementById('scroll');
window.onscroll = () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 600) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

//Implementing smooth scorilling behavior
const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      // scrollTo({
      //   top: sectionEl.offsetTop,
      //   behavior: 'smooth',
      // });
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (headerEl.classList.contains('nav-open'))
      headerEl.classList.remove('nav-open');
  });
});

//Sticky Navigation Bar
/*
const featuredSection = document.querySelector('.section-featured');
console.log(featuredSection.offsetTop);
window.onscroll = () => {
  if (window.scrollY >= featuredSection.offsetTop - 85) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }

  //Adding a Button to scroll to the top
  if (window.scrollY >= 600) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};*/

//Sticky Navigation Bar ObserverAPI

const heroSection = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  (entries) => {
    // if (!entries[0].isIntersecting) document.body.classList.add('sticky');
    // if (entries[0].isIntersecting) document.body.classList.remove('sticky');

    document.body.classList.toggle('sticky', !entries[0].isIntersecting);
  },
  {
    // Viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

observer.observe(heroSection);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

/***************************************************************** */
/************************** ObserverAPI*****************************/
/***************************************************************** */

// const ctaSection = document.querySelector('.section-cta');

// const obs = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       if (entry.isIntersecting) ctaSection.style.backgroundColor = 'red';
//       if (!entry.isIntersecting) ctaSection.style.backgroundColor = '#fff';
//     });
//   },
//   {
// interface IntersectionObserverInit {
//   root?: Element | Document | null;
//   rootMargin?: string;
//   threshold?: number | number[];
// }
//     root: null,
//     threshold: 0.5,
//     rootMargin: '80px',
//   }
// );

// obs.observe(ctaSection);

// interface IntersectionObserverEntryInit {
//   boundingClientRect: DOMRectInit;
//   intersectionRatio: number;
//   intersectionRect: DOMRectInit;
//   isIntersecting: boolean;
//   rootBounds: DOMRectInit | null;
//   target: Element;
//   time: DOMHighResTimeStamp;
// }

// Each entry describes an intersection change for one observed
// target element:
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
/***************************************************************** */
/***************************************************************** */
