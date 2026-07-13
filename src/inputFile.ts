const inputField = document.getElementById("username") as HTMLInputElement;

// console.log(inputField.value);

const button = document.getElementById("btn") as HTMLButtonElement;

button.addEventListener("click", () => {
    console.log(inputField.value);
    const value = inputField.value;
    if(value.trim()===""){
        alert("please enter your name")
    }else{
        console.log(value);
        
    }
    
});