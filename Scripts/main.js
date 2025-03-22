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
