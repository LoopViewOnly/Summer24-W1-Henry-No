console.log("yo");
const imgbox = document.getElementById("images");
const streakbox = document.getElementById("streak");
streakbox.textContent = "Streak: 1";
const s = Number(localStorage.getItem("streak")) ?? 0;
streakbox.textContent = "streak: " + s;
//create image 1
const img1 = document.createElement("img");
img1.src = "https://thispersondoesnotexist.com/";
//create image 2
const id = Math.floor((Math.random() * 6 + 1) * 10000 )
const img2 = document.createElement("img");
img2.src = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;


img1.onclick = () => {
  alert("wrong");
  localStorage.setItem("streak",0 )
location.reload();
};
let x = 1;
img2.onclick = () => {
  alert("correct!");
  localStorage.setItem("streak", s + 1 )

location.reload();
};
if (Math.random() > 0.5) {
imgbox.append(img1);
imgbox.append(img2);
}
else{
imgbox.append(img2);
imgbox.append(img1);
}