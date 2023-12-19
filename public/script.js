console.log("hello")

getRandomQoute();

async function getRandomQoute(){

    const response = await fetch('/randomqoute');
    const data = await response.json();
    console.log(data);
    document.getElementById("joke").textContent =  data.setup;
    document.getElementById("punchline").textContent =  data.delivery;
}
function toggleElement() {
    var element = document.getElementById("joke");
    if (element.style.display === "none" || element.style.visibility === "hidden") {
      element.style.display = "block"; // or element.style.visibility = "visible";
    } else {
      element.style.display = "none"; // or element.style.visibility = "hidden";
    }
  }
