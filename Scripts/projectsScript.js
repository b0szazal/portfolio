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
    <div id="modalCarousel" class="carousel slide w-100" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Images/MM1.png" class="d-block w-100 projectImage" alt="Málenkij Meló backend scalar documentation" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block">
              <h5>Backend</h5>
              <p>Documentation using scalar</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Images/MM2.png" class="d-block w-100 projectImage" alt="Málenkij Meló Employer jobs page" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block">
              <h5>Web</h5>
              <p>Clicking on Részletek opens a modal page</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Images/MM3.png" class="d-block w-100 projectImage" alt="Málenkij Meló Employer aplications page" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block">
              <h5>Web</h5>
              <p>clicking on értékelés opens a modal page</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Images/MM4.png" class="d-block w-100 projectImage" alt="Málenkij Meló Desktop list Jobs page" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
             <div class="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded">
              <h5>Desktop</h5>
              <p>clicking on a job gives its details</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Images/MM5.png" class="d-block w-100 projectImage" alt="Málenkij Meló Desktop menu with submenus" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded">
              <h5>Desktop</h5>
              <p>navigaion between menus is possible with arrow keys</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Images/MM6.png" class="d-block w-100 projectImage" alt="Málenkij Meló mobil Home page and Login page" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded">
              <h5>Mobil</h5>
              <p>these 2 pages were the first ones to be completed on mobil</p>
            </div> 
          </div>
          <div class="carousel-item">
            <img src="Images/MM7.png" class="d-block w-100 projectImage" alt="Málenkij Meló mobil menu system and notifications" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded">
              <h5>Mobil</h5>
              <p>menu system uses 'single page' navigation</p>
            </div> 
          </div>
          <div class="carousel-item">
            <img src="Images/MM8.png" class="d-block w-100 projectImage" alt="Málenkij Meló mobil profil page and calendar page" data-bs-toggle="modal" onclick="SetModalImage(0)"  data-bs-target="#Modal"> 
            <div class="carousel-caption d-none d-md-block bg-black bg-opacity-50 rounded">
              <h5>Mobil</h5>
              <p>calendar highlights dates when the user has a job </p>
            </div> 
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
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