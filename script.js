// NAV scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll",function(){nav.classList.toggle("scrolled",window.scrollY>10)},{passive:true});

// Hamburger
const hb = document.getElementById("hamburger");
const nl = document.getElementById("navLinks");
hb.addEventListener("click",function(){
  const o = hb.classList.toggle("open");
  nl.classList.toggle("open",o);
  hb.setAttribute("aria-expanded",o);
});
nl.querySelectorAll("a").forEach(function(a){
  a.addEventListener("click",function(){hb.classList.remove("open");nl.classList.remove("open");hb.setAttribute("aria-expanded","false");});
});

// Scroll reveal
const revEls = document.querySelectorAll(".reveal");
const revObs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("up");revObs.unobserve(e.target);}});
},{threshold:0.08});
revEls.forEach(function(el){revObs.observe(el);});


// FAQ
document.querySelectorAll(".faq-q").forEach(function(btn){
  btn.addEventListener("click",function(){
    const item=btn.closest(".faq-item"), isOpen=item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(function(i){i.classList.remove("open");i.querySelector(".faq-q").setAttribute("aria-expanded","false");});
    if(!isOpen){item.classList.add("open");btn.setAttribute("aria-expanded","true");}
  });
});


// WhatsApp form submission
const contactForm = document.getElementById('contactFormEl');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');
    successEl.style.display = 'none';
    errorEl.style.display = 'none';

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const project = document.getElementById('project').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if(!fname || !email || !message) {
      errorEl.textContent = '❌ Please fill in all required fields before sending.';
      errorEl.style.display = 'block';
      errorEl.focus();
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      errorEl.textContent = '❌ Please enter a valid email address.';
      errorEl.style.display = 'block';
      errorEl.focus();
      return;
    }

    const name = lname ? fname + ' ' + lname : fname;
    let text = '👋 Hi Jinal, I found your portfolio and I\'d like to discuss a project.\n\n';
    text += '*Name:* ' + name + '\n';
    text += '*Email:* ' + email + '\n';
    if(project) text += '*Project Type:* ' + project + '\n';
    text += '*Message:*\n' + message;

    const waURL = 'https://wa.me/917208509408?text=' + encodeURIComponent(text);
    successEl.style.display = 'block';
    successEl.focus();
    // Open inside the user gesture so popup blockers don't interfere; fall back to same tab.
    const win = window.open(waURL, '_blank', 'noopener,noreferrer');
    if(!win) { window.location.href = waURL; }
    contactForm.reset();
  });
}

// Skills widget
function swTab(id, el) {
  document.querySelectorAll('.sw-panel').forEach(function(p){p.classList.add('sw-hidden')});
  document.querySelectorAll('.sw-tab').forEach(function(t){t.classList.remove('active');t.setAttribute('aria-selected','false')});
  document.getElementById('sw-' + id).classList.remove('sw-hidden');
  el.classList.add('active');
  el.setAttribute('aria-selected','true');
}


const scroll = document.getElementById("projScroll");
let autoTimer = null;
let resumeTimer = null;
let autoScrolling = false;

const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function nextCard() {
  const card = scroll.querySelector(".proj-card");
  if (!card) return;
  const gap = parseFloat(getComputedStyle(scroll).gap) || 20;
  const step = card.offsetWidth + gap;
  const maxScroll = scroll.scrollWidth - scroll.clientWidth;
  autoScrolling = true;
  if (scroll.scrollLeft >= maxScroll - 2) {
    scroll.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    scroll.scrollBy({ left: step, behavior: "smooth" });
  }
  setTimeout(() => { autoScrolling = false; }, 800);
}

function startAuto() {
  stopAuto();
  autoTimer = setInterval(() => {
    if (document.visibilityState === "hidden") return;
    nextCard();
  }, 3500);
}
function stopAuto() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
}
function pauseThenResume(delay) {
  stopAuto();
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(startAuto, delay);
}

// Autoplay only on hover-capable (desktop) devices — on mobile, users swipe freely
if (!isTouchDevice && !reducedMotion) {
  scroll.addEventListener("mouseenter", stopAuto);
  scroll.addEventListener("mouseleave", () => pauseThenResume(800));
  scroll.addEventListener("wheel", () => pauseThenResume(4000), { passive: true });
  // Pause if the user scrolls the carousel by any other means (e.g. trackpad, scrollbar)
  scroll.addEventListener("scroll", () => {
    if (!autoScrolling && autoTimer) pauseThenResume(4000);
  }, { passive: true });
  startAuto();
}
