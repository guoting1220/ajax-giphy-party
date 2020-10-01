async function addGif() {
    const searchVal = $("#search-input").val();
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchVal, 
            api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }   
    });
    //the code below should be included inside addGif(), to make sure to be executed after res is done.
    let randomUrl = getRandomGifUrl(res.data.data);
    let $newCol = $("<div>", { class: "col-sm-6 col-md-4 my-4"});
    let $newImg = $("<img>", {
        src: randomUrl,
        class: "w-100"
    });   
    $newCol.append($newImg);
    $("#gif-area").append($newCol);
}

function getRandomGifUrl(dataArr) {
    const dataLen = dataArr.length;   
    return dataArr[getRandomNum(0, dataLen-1)].images.original.url; // observe the API to find the path to address the data
}

function getRandomNum(min, max) {
    return min + Math.floor(Math.random() * (max+1));
}


$("#search-btn").on("click", function(e){
    e.preventDefault(); //don't forget! the first button in form is treated as "submit" by default
    addGif();
});

$("#remove-btnv").on("click", function(){
    $("#gif-area").empty();
})