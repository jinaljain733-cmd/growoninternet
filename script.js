/* Grow on Internet — scripts. Author: Jinal Jain */
// NAV scroll shadow
const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>10),{passive:true});

// Hamburger
const hb=document.getElementById("hamburger"),nl=document.getElementById("navLinks");
hb.addEventListener("click",()=>{const o=hb.classList.toggle("open");nl.classList.toggle("open",o);hb.setAttribute("aria-expanded",o);});
nl.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{hb.classList.remove("open");nl.classList.remove("open");hb.setAttribute("aria-expanded","false");}));

// Scroll reveal
const revObs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("up");revObs.unobserve(e.target);}});},{threshold:0.08});
document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));

// FAQ
document.querySelectorAll(".faq-q").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item=btn.closest(".faq-item"),isOpen=item.classList.contains("open"),a=item.querySelector(".faq-a");
    document.querySelectorAll(".faq-item").forEach(i=>{i.classList.remove("open");i.querySelector(".faq-q").setAttribute("aria-expanded","false");i.querySelector(".faq-a").style.maxHeight=null;});
    if(!isOpen){item.classList.add("open");btn.setAttribute("aria-expanded","true");a.style.maxHeight=a.scrollHeight+"px";}
  });
});

// Contact form -> WhatsApp
const contactForm=document.getElementById('contactFormEl');
if(contactForm){contactForm.addEventListener('submit',function(e){
  e.preventDefault();
  const ok=document.getElementById('formSuccess'),err=document.getElementById('formError');
  ok.style.display='none';err.style.display='none';
  const fname=fnameVal(),email=document.getElementById('email').value.trim(),message=document.getElementById('message').value.trim();
  function fnameVal(){return document.getElementById('fname').value.trim();}
  const lname=document.getElementById('lname').value.trim(),project=document.getElementById('project').value.trim();
  if(!fname||!email||!message){err.textContent='❌ Please fill in all required fields before sending.';err.style.display='block';err.focus();return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err.textContent='❌ Please enter a valid email address.';err.style.display='block';err.focus();return;}
  const name=lname?fname+' '+lname:fname;
  let text='👋 Hi Jinal, I found Grow on Internet and I\'d like to discuss a project.\n\n*Name:* '+name+'\n*Email:* '+email+'\n';
  if(project)text+='*Project Type:* '+project+'\n';
  text+='*Message:*\n'+message;
  const waURL='https://wa.me/917208509408?text='+encodeURIComponent(text);
  ok.style.display='block';ok.focus();
  const win=window.open(waURL,'_blank','noopener,noreferrer');
  if(!win)window.location.href=waURL;
  contactForm.reset();
});}

// Reduced-motion preference (used by the projects autoplay below)
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Projects autoplay (desktop only)
const scroll=document.getElementById("projScroll");
let autoTimer=null,resumeTimer=null,autoScrolling=false;
const isTouch=window.matchMedia("(hover: none),(pointer: coarse)").matches;
function nextCard(){const card=scroll.querySelector(".proj-card");if(!card)return;const gap=parseFloat(getComputedStyle(scroll).gap)||20;const step=card.offsetWidth+gap;const max=scroll.scrollWidth-scroll.clientWidth;autoScrolling=true;if(scroll.scrollLeft>=max-2)scroll.scrollTo({left:0,behavior:"smooth"});else scroll.scrollBy({left:step,behavior:"smooth"});setTimeout(()=>autoScrolling=false,800);}
function startAuto(){stopAuto();autoTimer=setInterval(()=>{if(document.visibilityState==="hidden")return;nextCard();},3500);}
function stopAuto(){if(autoTimer){clearInterval(autoTimer);autoTimer=null;}}
function pauseThenResume(d){stopAuto();clearTimeout(resumeTimer);resumeTimer=setTimeout(startAuto,d);}
if(scroll&&!isTouch&&!reduce){scroll.addEventListener("mouseenter",stopAuto);scroll.addEventListener("mouseleave",()=>pauseThenResume(800));scroll.addEventListener("wheel",()=>pauseThenResume(4000),{passive:true});scroll.addEventListener("scroll",()=>{if(!autoScrolling&&autoTimer)pauseThenResume(4000);},{passive:true});startAuto();}