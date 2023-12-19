// write your code here
fetch ("http://localhost:3000/ramens")
    .then ((resp) => resp.json())
    .then ((data) => renderRamen(data))

function renderRamen(ramenArr){
    ramenArr.forEach((ramenObj) => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const div = document.querySelector('#ramen-menu')
        const ul = document.createElement('ul')
        let name = ramenObj.name
        p.textContent = name
        const img = document.createElement('img')
        let imgURL = ramenObj.image
        img.src = imgURL

        li.append(img, p)
        ul.appendChild(li)
        div.appendChild(ul)

        ul.addEventListener('click', showRamenDetails)

        function showRamenDetails(ramenObj) {
            let ramenDetail = document.querySelector('ramen-detail');
        
            // Display the information in the #ramen-detail div
            ramenDetail.restaurant.textContent = `Restaurant: ${ramenObj.restaurant}`
            ramenDetail.name.textContent = `Name: ${ramenObj.name}`
        }
    })
}

//make an event listener for a click on the image from the ramen menu to show details on the ramen detail div

// deliverables
// 2. "click" image from menu div and see info desplayed inside the detail div (class in the div are named: detail-img, name, restaurant)
// 3. create new ramen "submit" to new ramen form