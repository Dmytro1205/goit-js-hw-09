!function(){var e=document.body,t=document.querySelector("[data-stop]"),d=document.querySelector("[data-start]"),n=null;t.disabled=!0,d.addEventListener("click",(function(a){n=setInterval((function(){e.style.backgroundColor=getRandomHexColor()}),1e3),d.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(e){clearInterval(n),d.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.bc4469dd.js.map
