const form = document.querySelector('#searchForm');


form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params : { q: searchTerm}}
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    removeImages();
    getImages(response.data);
    form.elements.query.value = '';

});

const getImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src =  result.show.image.medium;
            document.body.append(img);
        }
    }
}

const removeImages = () => {
    let findImages = document.querySelectorAll('img');
    if (findImages.length > 0){
        for (let img of findImages) {
            img.parentNode.removeChild(img);
        }
    }
}