// Animation For The Move Between Sign Up Form and Sign In Form 
const contentToggle = () => {
    const signInButton = document.querySelector('#sign-in')
    const signUpForm = document.querySelector('.sign-up-form-section')
    const signInForm = document.querySelector('.sign-in-form-section')

    const signUpButton = document.querySelector('#sign-up')
    const signUpContent = document.querySelector('.sign-up-content-section')
    const signInContent = document.querySelector('.sign-in-content-section')

    signInButton.addEventListener('click', () => {
        signInForm.style.transform = `translateX(-700px)`;
        signInContent.style.transform = `translateX(700px)`
        
        setTimeout(() => {
            signInForm.style.display = `none`;
            signInContent.style.display = `none`;
            signUpContent.style.display = `flex`;
            signUpForm.style.display = `block`;
        }, 500);   
        
        setTimeout(() => {
            signUpForm.style.transform = `translateX(0px)`;
            signUpContent.style.transform = `translateX(0px)`;
        }, 700);    
        
        if (window.innerWidth < 768){
            signInForm.style.transform = `translateX(-700px)`;
            signInContent.style.transform = `translateX(-700px)`
            
            setTimeout(() => {
                signInForm.style.display = `none`;
                signInContent.style.display = `none`;
                signUpContent.style.display = `flex`;
                signUpForm.style.display = `block`;
            }, 500);   
            
            setTimeout(() => {
                signUpForm.style.transform = `translateX(0px)`;
                signUpContent.style.transform = `translateX(0px)`;
            }, 700); 
        }
    })

    signUpButton.addEventListener('click', () => {
        signUpForm.style.transform = `translateX(-700px)`;
        signUpContent.style.transform = `translateX(700px)`;
        
        setTimeout(() => {
            signInForm.style.display = `block`;
            signInContent.style.display = `flex`;
            signUpContent.style.display = `none`;
            signUpForm.style.display = `none`;
        }, 500);   
        
        setTimeout(() => {
            signInForm.style.transform = `translateX(0px)`;
            signInContent.style.transform = `translateX(0px)`
        }, 700);  
        
        if (window.innerWidth < 768){
            signUpForm.style.transform = `translateX(-700px)`;
            signUpContent.style.transform = `translateX(-700px)`;
            
            setTimeout(() => {
                signInForm.style.display = `block`;
                signInContent.style.display = `flex`;
                signUpContent.style.display = `none`;
                signUpForm.style.display = `none`;
            }, 500);   
            
            setTimeout(() => {
                signInForm.style.transform = `translateX(0px)`;
                signInContent.style.transform = `translateX(0px)`
            }, 700);  
        }
    })
}
contentToggle();