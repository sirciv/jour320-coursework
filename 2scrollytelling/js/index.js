const pageAnimations = gsap.timeline();

pageAnimations.from(".two", {yPercent: 100})
.from(".seven", {yPercent: 100})
.from(".three", {yPercent: 100})
.from(".four", {yPercent: 100})
.from(".five", {yPercent: 100})
.from(".six", {yPercent: 100})

ScrollTrigger.create({
	animation: pageAnimations,
	trigger: "article",
	start: "top top",
   end: "+=700%",
	scrub: true,
   pin:true,
});
