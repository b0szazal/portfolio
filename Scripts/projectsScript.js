const project1Container = document.getElementById("project1")
const project1Toggler = document.getElementById("project1Toggler")
const project1Expand = document.getElementById("project1Expand")

project1Toggler.addEventListener("click", ()=>{
    if(project1Container.classList.contains("expandedProject")){
        project1Container.classList.replace("expandedProject", "collapsedProject");
        project1Expand.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='M480-360 280-560h400L480-360Z'/></svg>"
    }
    else{
        project1Container.classList.replace("collapsedProject", "expandedProject");
        project1Expand.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='m280-400 200-200 200 200H280Z'/></svg>"
    }
})