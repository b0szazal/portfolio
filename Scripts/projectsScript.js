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

const ModalImages=[`
    <div id="carouselExampleInterval" class="carousel slide w-100" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="Images/MM1.png" class="d-block w-100" alt="Málenkij Meló backend scalar documentation" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
          </div>
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="Images/MM2.png" class="d-block w-100" alt="Málenkij Meló backend scalar documentation" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>  `,
    '<img  data-bs-toggle="modal" onclick="SetModalImage(1)"  data-bs-target="#Modal" src="Images/OI.png" alt="image not found" title="image of Orb Incremental" width="125%">',
    '<img  onclick="SetModalImage(2)" data-bs-toggle="modal"  data-bs-target="#Modal" src="Images/LQI.png" alt="LowQualityIncremental Image" title="image of Low Quality Incremental" width="125%">'
]

const SetModalImage=(index)=>{
    document.getElementById("modalBody").innerHTML=ModalImages[index]
}