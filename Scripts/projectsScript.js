const projectContainers = [document.getElementById("project1"), document.getElementById("project2"), document.getElementById("project3")]
const projectTogglers = [document.getElementById("project1Toggler"), document.getElementById("project2Toggler"), document.getElementById("project3Toggler")]
const projectExpanders = [document.getElementById("project1Expand"), document.getElementById("project2Expand"), document.getElementById("project3Expand")]

for(let i=0; i<projectTogglers.length; i++){
    projectTogglers[i].addEventListener("click", ()=>{
        if(projectContainers[i].classList.contains("expandedProject")){
            projectContainers[i].classList.replace("expandedProject", "collapsedProject");
            projectExpanders[i].innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='M480-360 280-560h400L480-360Z'/></svg>"
        }
        else{
            projectContainers[i].classList.replace("collapsedProject", "expandedProject");
            projectExpanders[i].innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='m280-400 200-200 200 200H280Z'/></svg>"
        }
    })
}

const ModalImages=['<img class="projectImage" onclick="SetModalImage(0)" data-bs-toggle="modal"  data-bs-target="#Modal" src="Images/malenkijmelo.png" alt="carousel incoming" title="MálenkijMeló Web Jobs listing" width="125%">',
    '<img class="projectImage" data-bs-toggle="modal" onclick="SetModalImage(1)"  data-bs-target="#Modal" src="Images/OI.png" alt="image not found" title="image of Orb Incremental" width="125%">',
    '<img class="projectImage" onclick="SetModalImage(2)" data-bs-toggle="modal"  data-bs-target="#Modal" src="Images/LQI.png" alt="LowQualityIncremental Image" title="image of Low Quality Incremental" width="125%">'
]

const SetModalImage=(index)=>{
    document.getElementById("modalBody").innerHTML=ModalImages[index]
}