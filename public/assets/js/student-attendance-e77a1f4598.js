const optionMenu=document.querySelector(".select-menu"),selectBtn=optionMenu.querySelector(".select-btn"),options=optionMenu.querySelectorAll(".option"),sBtn_text=optionMenu.querySelector(".sBtn-text");selectBtn.addEventListener("click",(()=>optionMenu.classList.toggle("active"))),options.forEach((e=>{e.addEventListener("click",(()=>{let t=e.querySelector(".option-text").innerText;sBtn_text.innerText=t,optionMenu.classList.remove("active")}))}));