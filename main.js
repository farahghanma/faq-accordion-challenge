const faqs = document.querySelectorAll('input');

faqs.forEach(input => {
    input.addEventListener('click', (e) => {
        faqs.forEach(input => {
            //to create a toggle effect: 
            if(input.checked == true){
                //if it's true, close all other faqs
                input.checked = false;
                //and open the one that's currently being cliked (aka target)
                e.target.checked = true;
            }
        })
    })
})