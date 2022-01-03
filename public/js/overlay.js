const overlay = document.querySelectorAll('.content .overlay');
const postDes = document.querySelectorAll('.content .post-des ');

for (let i = 0; i < overlay.length; i++) {

  console.log(`${overlay[i].offsetHeight }:${postDes[i].offsetHeight}`)
  
}

