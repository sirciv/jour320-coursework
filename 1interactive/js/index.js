/* I. Article Content */

let star1history = "The first star represents the establishment of Fort Dearborn on the Chicago River. The fort was later destroyed during the War of 1812.<br><br> The six points represent the various territories the city has belonged to: France in 1693, Great Britain in 1763, Virginia in 1778; the Northwest Territory, 1789; Indiana Territory, 1802; and Illinois (territory, 1809, and state, since 1818)"
let star2history = "The second star represents the Great Chicago Fire of 1871. The fire razed nearly the entire city and killed hundreds. In the wake of the fire, the British government donated money to help establish Chicago's first public library.<br><br>Its six points represent the virtues of religion, education, aesthetics, justice, beneficence, and civic pride. "
let star3history = "The third star represents the World's Columbian Exposition of 1893. Built to commemorate the 400 year anniversary of Christopher Columbus' arrival to the Americas, the Exposition is a significant milestone in America's industrial and technological history, with some of the buildings of the \"White City\" still standing today.<br><br>Its six points symbolize transportation, labor, commerce, finance, populousness, and salubrity (health)."
let star4history = "This star represents the Century of Progress Exposition (1933–34), the second of Chicago's world fairs and the one that is oftentimes less remembered in history. The fair commemorated Chicago's hundred year anniversary and was meant to portray a \"utopia, or perfect world, founded on democracy and manufacturing.\"<br><br>Its points refer to: Chicago's status as the United States' second largest city at the time of the stars addition (Chicago became third largest in a 1990 census when passed by Los Angeles); Chicago's Latin motto, Urbs in horto (\"City in a garden\"); Chicago's \"I Will\" motto; the Great Central Marketplace; Wonder City; and Convention City"
let riverHistory1 = "The top blue bar represents Lake Michigan and the North Branch of the Chicago River."
let riverHistory2 = "The bottom blue bar represents the South Branch of the river and the \"Great Canal\", over the Chicago Portage. Much of Chicago's orginal growth was thanks to the canal, which connected the vital waterways of the Great Lakes and the Mississippi River."
let whitebars = "The white sections of the flag represent the South, West, and North sides of the city, the East side being, of course, underwater."

/* II. Flag Selectors */

document.getElementById("star1").addEventListener("click", function() {
  changeContent(star1history);
});

document.getElementById("star2").addEventListener("click", function() {
  changeContent(star2history);
});

document.getElementById("star3").addEventListener("click", function() {
  changeContent(star3history);
});

document.getElementById("star4").addEventListener("click", function() {
  changeContent(star4history);
});

document.getElementById("bluebar1").addEventListener("click", function() {
  changeContent(riverHistory1);
});

document.getElementById("bluebar2").addEventListener("click", function() {
  changeContent(riverHistory2);
});

document.getElementById("whitebars").addEventListener("click", function() {
  changeContent(whitebars);
});

/* III. Text Changing Functions */

const changeContent = (id) => {
  document.querySelector('.text').innerHTML = id;
};