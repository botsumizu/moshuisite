var ele1 = document.getElementById("hua");
var ele2 = document.getElementById("niao");
var ele3 = document.getElementById("feng");
var ele4 = document.getElementById("yue");
function show_eles()
{
    if (ele1.style.display == "none")
    {
        ele1.style.display = "flex";
        ele2.style.display = "flex";
        ele3.style.display = "flex";
        ele4.style.display = "flex";
        ele1.style.animation = "show_ele .5s ease forwards";
        ele2.style.animation = "show_ele .5s ease forwards";
        ele3.style.animation = "show_ele .5s ease forwards";
        ele4.style.animation = "show_ele .5s ease forwards";
    }
    else
    {
        ele1.style.display = "none";
        ele2.style.display = "none";
        ele3.style.display = "none";
        ele4.style.display = "none";
    }
}
function show_hua()
{
    ele2.style.animation = "hide_btn .5s ease forwards";
    ele3.style.animation = "hide_btn .5s ease forwards";
    ele4.style.animation = "hide_btn .5s ease forwards";
}
function hide_hua()
{
    ele2.style.animation = "show_btn .5s ease forwards";
    ele3.style.animation = "show_btn .5s ease forwards";
    ele4.style.animation = "show_btn .5s ease forwards";
}
function show_niao()
{
    ele1.style.animation = "hide_btn .5s ease forwards";
    ele3.style.animation = "hide_btn .5s ease forwards";
    ele4.style.animation = "hide_btn .5s ease forwards";
}
function hide_niao()
{
    ele1.style.animation = "show_btn .5s ease forwards";
    ele3.style.animation = "show_btn .5s ease forwards";
    ele4.style.animation = "show_btn .5s ease forwards";
}
function show_feng()
{
    ele1.style.animation = "hide_btn .5s ease forwards";
    ele2.style.animation = "hide_btn .5s ease forwards";
    ele4.style.animation = "hide_btn .5s ease forwards";
}
function hide_feng()
{
    ele1.style.animation = "show_btn .5s ease forwards";
    ele2.style.animation = "show_btn .5s ease forwards";
    ele4.style.animation = "show_btn .5s ease forwards";
}
function show_yue()
{
    ele1.style.animation = "hide_btn .5s ease forwards";
    ele3.style.animation = "hide_btn .5s ease forwards";
    ele2.style.animation = "hide_btn .5s ease forwards";
}
function hide_yue()
{
    ele1.style.animation = "show_btn .5s ease forwards";
    ele3.style.animation = "show_btn .5s ease forwards";
    ele2.style.animation = "show_btn .5s ease forwards";
}
function to_menu()
{
    window.location.href = "menu/menu.html";
}
function to_tools()
{
    window.location.href = "tools/tools.html";
}
document.getElementById("hua").onclick = function(){to_menu()};
document.getElementById("niao").onclick = function(){to_tools()};
document.getElementById("card").onclick = function(){show_eles()};
document.getElementById("hua").onmouseover = function(){show_hua()};
document.getElementById("hua").onmouseout = function(){hide_hua()};
document.getElementById("niao").onmouseover = function(){show_niao()};
document.getElementById("niao").onmouseout = function(){hide_niao()};
document.getElementById("feng").onmouseover = function(){show_feng()};
document.getElementById("feng").onmouseout = function(){hide_feng()};
document.getElementById("yue").onmouseover = function(){show_yue()};
document.getElementById("yue").onmouseout = function(){hide_yue()};