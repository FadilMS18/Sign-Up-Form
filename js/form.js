const confirmBut = document.querySelector(`button[type="submit"]`)

const pw = document.querySelector(`input[name="pw"]`)
const pwSpan = Array.from(document.querySelectorAll(`input[name="pw"] ~ span`))
const confirmPw = document.querySelector(`input[name="confirm-pw"]`)
const confirmPwSpan = document.querySelector(`input[name="confirm-pw"] + span`)

const emojiSpan = Array.from(document.querySelectorAll(`input[name="pw"] ~ span > span`))
const confirmEmojiSpan = document.querySelector(`input[name="confirm-pw"] + span:first-child`)

// Get the validation out
confirmBut.addEventListener("click", giveOpacity)

function giveOpacity(){
    pwSpan.forEach((span) =>{
        span.classList.toggle("opacity-zero")
        setTimeout(() => {
            span.style.opacity = " 1"
        }, 100);
    })
    
    
    confirmPwSpan.classList.toggle("opacity-zero")
    setTimeout(() => {
        confirmPwSpan.style.opacity = " 1"
    }, 100);

    confirmBut.removeEventListener("click", giveOpacity)
}

// Regular Expressions for password test
const regExUpCase = /.*[A-Z].*/
const regExNum = /.*[0-9].*/

// Check the validation of password
pw.addEventListener("keydown", checkValidationpw)
confirmPw.addEventListener("keydown", checkValidationpw)
function checkValidationpw(){
    setTimeout(() =>{
        const value = pw.value
        // Check if Password inludes at least one upperCase
        if(regExUpCase.test(value)){
            emojiSpan[0].textContent = " ✅ "
        }
        else{
            emojiSpan[0].textContent = " ❌ "
        }
        
        // Check if Password includes one Number
        if(regExNum.test(value)){
            emojiSpan[1].textContent = " ✅ "
        }
        else emojiSpan[1].textContent = " ❌ "

        if(regExNum.test(value) && regExUpCase.test(value)){
            pw.style.borderBottom =" 3.5px solid green"
            pw.style.borderBottomLeftRadius =" 3px "
            pw.style.borderBottomRightRadius =" 3px "
        }else{ 
            pw.style.borderBottom =" 4px solid red" 
            pw.style.borderBottomLeftRadius =" 3px " 
            pw.style.borderBottomRightRadius =" 3px " 
            
        }    
    }, 1);
}


// Check the validation of reconfirm pw
function checkValidationRePw(){
    setTimeout(()=> {
        const value = pw.value
        const confirmValue = confirmPw.value
        if(confirmValue === value || value === confirmValue){
            confirmPwSpan.textContent = "✅ Is The Same with The Password"
            confirmPw.style.borderBottomLeftRadius = " 3px "
            confirmPw.style.borderBottomRightRadius = " 3px "
        }
        else{
            confirmPw.textContent = "❌ Different From your Password"
            confirmPw.style.borderBottom = " 4px solid red"
            confirmPw.style.borderBottomLeftRadius = " 3px "
            confirmPw.style.borderBottomRightRadius = " 3px "
        } 
    },1)
}

pw.addEventListener("keydown", checkValidationRePw)
confirmPw.addEventListener("keydown", checkValidationRePw)