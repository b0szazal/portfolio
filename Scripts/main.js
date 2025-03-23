const email = document.getElementById("email");
const toastLiveExample = document.getElementById('liveToast');

if(email){
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    email.addEventListener("click", ()=>{
        navigator.clipboard.writeText("zalan.szasz06@gmail.com");
        document.getElementById("toastMessage").innerHTML="Email address copied to clipboard"
        toastBootstrap.show();
    })
}

const educationContainer = document.getElementById("education")
const educationToggler = document.getElementById("educationToggler")
const educationExpandSVG = document.getElementById("educationExpand")

educationToggler.addEventListener("click", ()=>{
    if(educationContainer.classList.contains("expandedEducation")){
        educationContainer.classList.replace("expandedEducation", "collapsedEducation");
        educationExpandSVG.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='M480-360 280-560h400L480-360Z'/></svg>"
    }
    else{
        educationContainer.classList.replace("collapsedEducation", "expandedEducation");
        educationExpandSVG.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='48px' viewBox='0 -960 960 960' width='48px' fill='#e3e3e3'><path d='m280-400 200-200 200 200H280Z'/></svg>"
    }
})