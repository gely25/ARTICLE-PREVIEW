const btn= document.querySelector('.share-toggle-button')
const card= document.querySelector('.card')
const footer= document.querySelector('.author')

btn.addEventListener('click', () =>{
    card.classList.toggle('share-active')

    if (footer.style.display === 'none' ){
        footer.style.display = 'block'
    }else{
        footer.style.display= 'flex'
    }

    

} )



