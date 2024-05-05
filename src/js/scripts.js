const buttonId =  document.getElementById("bt");
const textId =  document.getElementById("txt");
const navbarId =  document.getElementById("navbar");


buttonId.addEventListener("click", () => {
    win.style.display = "block";
  });
  textId.addEventListener("click", () => {
    txt.value = "";
  });

let onOff = 0;

  navbarId.addEventListener("click", () => {
    if(onOff == 0){
      barRow.style.display = "block";
      onOff = 1;
    }else{
      barRow.style.display = "none";
      onOff = 0;
    }

    
  });
