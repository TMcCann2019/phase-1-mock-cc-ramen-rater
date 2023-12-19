// write your code here
fetch ("http://localhost:3000/ramens")
    .then ((resp) => resp.json())
    .then ((data) => renderRamen(data))

function renderRamen(ramenArr){
    const ramenMenu = document.querySelector('#ramen-menu')

    ramenArr.forEach((ramenObj) => {
        const img = document.createElement('img')
        img.src = ramenObj.image

        ramenMenu.appendChild(img)

        img.addEventListener('click', handleClick)

        function handleClick(){
            const nameLocation = document.querySelector('.name')
            const imgLocation = document.querySelector('.detail-image')
            const restLocation = document.querySelector('.restaurant')
            const ratingLocation = document.querySelector('#rating-display')
            const commentLocation = document.querySelector('#comment-display')

            nameLocation.textContent = ramenObj.name
            imgLocation.src = ramenObj.image
            restLocation.textContent = ramenObj.restaurant
            ratingLocation.textContent = ramenObj.rating
            commentLocation.textContent = ramenObj.comment
        }
    })
}

const form = document.querySelector('#new-ramen')

form.addEventListener('submit', (e) => handleAddNewRamen(e))

function handleAddNewRamen(e){
    e.preventDefault()
    const newRamenObj = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value,
    }
    renderRamen([newRamenObj])
}