const delete_btn = (id)=>{
    this.addEventListener('click',()=>{
        if(id == 'delete-1'){
            const element = document.getElementById("card-1");
            element.remove();
        }else if(id == 'delete-2'){
            const element = document.getElementById("card-2");
            element.remove();
        }else if(id == 'delete-3'){
            const element = document.getElementById("card-3");
            element.remove();
        }else if(id == 'delete-4'){
            const element = document.getElementById("card-4");
            element.remove();
        }else if(id == 'delete-5'){
            const element = document.getElementById("card-5");
            element.remove();
        }
    })
}