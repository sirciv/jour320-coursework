const pageAnimations = gsap.timeline();

pageAnimations.from(".two", {yPercent: 100})
.from(".three", {yPercent: 100})
.from(".four", {yPercent: 100})
.from(".five", {yPercent: 100})

ScrollTrigger.create({
	animation: pageAnimations,
	trigger: "article",
	start: "top top",
   end: "+=500%",
	scrub: true,
   pin:true,
});
