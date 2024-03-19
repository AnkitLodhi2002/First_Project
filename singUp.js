let data = document.getElementById("otpBtn")
data.addEventListener("click", print)
function print(){
    let input = document.querySelector("#yourNumber").value
    console.log(input)
    alert('Sign Up Successfully')
}