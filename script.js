document.addEventListener('input',
    (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const classList = e.target.classList;
        const passwordElement = document.querySelector("input[id='password']");
        const password = passwordElement.value;
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const passwordError =document.querySelector(".error.password");
        const confirmError = document.querySelector(".error.confirm");
        switch(id) {
            case "password": {
                classList.remove("focusable");
                if(regex.test(value)) {
                    classList.remove("invalid"), classList.add("valid");
                    passwordError.textContent =""
                }
                else {
                    classList.add("invalid"), classList.remove("valid");
                    passwordError.textContent =
                    "The password must be at least 8 characters long and should contain at least one special character.";
                };
                break;
            }
            case "confirm-password" :{
                classList.remove("focusable");
                if(value === password && passwordElement.classList.contains("valid")) {
                    classList.remove("invalid"), classList.add("valid");
                    confirmError.textContent = "";
                }
                else {
                    classList.add("invalid"), classList.remove("valid");
                    confirmError.textContent =
                    "The passwords do not match";
                }
            }
        }
    }
)