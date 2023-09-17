const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const footer = document.createElement("p");
footer.textContent = `© Kevin Ferry Jr. ${currentYear}`;
document.querySelector("footer").appendChild(footer);
console.log(footer);