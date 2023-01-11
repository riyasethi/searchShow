const form = document.querySelector('form');
const button = document.querySelector('searchBtn');
const container = document.querySelector('#container');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    for (var i= document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);
    const showName = form.elements.showName.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`)
    makeImages(res.data);
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

// function displayShow(movies){
//     for(var movie of movies){
//         console.log(movie.show);
//         const {image : img, genres : genre, language} = movie.show;
//         if(img){
//             const imgContainer = document.createElement('div');
//             imgContainer.classList.add('imgContainer');
//             const displayImg = document.createElement('img');
//             displayImg.src = img.medium;
//             imgContainer.append(displayImg);
//             imgContainer.innerHTML += `<br>Genres: ${genre} <br> Language: ${language}`;
//             container.append(imgContainer);
//         }
//     }
// }