// Get Elements
let filterInput = document.getElementById('filterInput');



//Add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    let ul = document.getElementById('names');

    let li = document.querySelectorAll('.collection-item');

    //Loop through collectionItem
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';

        } else {
            li[i].style.display = 'none';
        }
    }

}