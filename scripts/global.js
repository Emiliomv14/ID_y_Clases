document.querySelector(".close-window").addEventListener("click", function()
{
    console.log("click");
    document.querySelector(".window").classList.remove("open");
    //document.querySelector("window").classList.add("open");
})