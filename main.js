function getMovies(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            
            const data = results.data
            // Carousel
            let img = results.results[0].backdrop_path;
            let title = results.results[0].original_title;
            let slide = document.querySelector('.carousel-inner')

            slide.innerHTML = `
                <div class="carousel-item active">
                    <img src="https://image.tmdb.org/t/p/original/${img}"  class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h2>${title}</h2>
                    </div>
                </div>` 

            for (let i = 2; i < 9; i++) {
                if(i==4 || i==6 || i==7){
                    continue
                }
                let img = results.results[i].backdrop_path;
                let title = results.results[i].original_title;

                let slide = document.querySelector('.carousel-inner')
                
                slide.innerHTML += `
                <div class="carousel-item">
                    <img src="https://image.tmdb.org/t/p/original/${img}"  class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h2>${title}</h2>
                    </div>
                </div>`                            
            }
           
        console.log("carousel "+ results.results[0].backdrop_path)

    }
).catch((err) => {
    console.log('rejected', err)
});

}
getMovies()


function getMovieCard(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            // const data = results.data
            // console.log(results.results)
            let movieCard = document.querySelector(".movie"); 

            for(let i=0 ; i< 6 ;i++){
                const title = results.results[i].title;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                let id = results.results[i].id;
                console.log("id =" + id)
                movieCard.innerHTML +=`
                
                <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div class="card">   
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" id="${id}" onClick="movieSelected(${id})" alt="Card image">
                        </div>  
                        <div class="card-body">
                            <h4 class="card-title">${title}</h4>
                            <!-- <a class="card-title btn" id="${id}" onClick="movieSelected(${id})">${title}</a>  -->
                            <div class="container">
                                <div class="row">
                                <!--   <div class="col-4 metadata">
                                   <i class="fa fa-star" aria-hidden="true"></i> 
                                    <p>9.5/10</p> 
                                    </div>
                                    <div class="col-8 metadata">Adventure. Sci-Fi</div>-->
                                </div>
                            </div>      
                           <!-- <p class="card-text">${desc}</p>
                            <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
                                <i class="fa fa-play" aria-hidden="true"></i>
                                </a>  -->
                        </div>
                    </div>
                </div>
              
                `
            }
        // console.log(results.data[0])

    }
).catch((err) => {
    console.log('rejected', err)
});

}
getMovieCard()


function getPeople(){
    fetch('https://api.themoviedb.org/3/person/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    data => {
        console.log("People "+ data.results[0].gender);
        // let peopleCard = document.querySelector(".people");
        // let name = data.name;
        // let img = data.profile_path;

        for(let i=0; i< data.results.length-2; i++){
            if(data.results[i].gender == 2){
                if(i==7){
                    continue;
                }
                
                    let peopleCard = document.querySelector(".people");
        
                    let name = data.results[i].name;
                    let img = data.results[i].profile_path
                    peopleCard.innerHTML += `
                    <div class="col-md-6 col-lg-2 d-flex align-items-stretch justify-content-center" >
                            <div class="card people-card" style="margin-bottom:20px">   
                                    <div class="card-header">
                                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                                    </div>  
                                    <div class="card-body">
                                        <a class="card-title">${name}</a>
                                    </div>      
                            </div>
                    </div>
                `
            }
        }    
    }
).catch((err) => {
    console.log('rejected', err)
});
}

getPeople();

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location = "details.html";
    return false;
}


function getMovieDetail(){
    id = sessionStorage.getItem('movieId');
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0c961ffcf84c2043d100edeeab29551a` , {
        "method": "GET",
    }).then((response) => {
        console.log("resolve", response)
        return response.json();
    }).then(
        results => {
            
            let movieDetails = document.querySelector(".container"); 
            let title = results.original_title;
            let img = results.backdrop_path;
            img = `https://image.tmdb.org/t/p/original/${img}`
            let desc = results.overview;
            let genres = results.genres;
            let year = results.release_date.slice(0,4);
            let runtime = results.runtime;
            let rating = results.vote_average;
            let website = results.homepage;
            
            // console.log("gener ==" + );


            let background = document.getElementById('mainContainer');
            background.setAttribute('style',"background-image: url("+ img +");");

            let cover = document.querySelector('.container');
            cover.setAttribute('style',"background-image: url("+ img +");");

            

            movieDetails.innerHTML +=`
                <div id="left">
                    <h1>${title}</h1>
                    <div id="info">
                        <ul id="menu">
                        <li>${year}</li>
                        <li>${runtime} min</li>
                        <li>${genres[0].name}&nbsp;&nbsp;&nbsp;|</li>
                        <li>${genres[1].name}&nbsp;&nbsp;&nbsp;|</li>
                        
                        </ul>
                    </div>
                    <div id="rating">
                        <h3>IMDb Rating:${rating}</h3>
                        <div id="container"></div>
                    </div>
                </div>
                <div id="right">
                ${desc}
                <div id="trailer">
                    
                    <h4 location.href="${website}">VISIT WEBSITE <h4>
                </div>
                 </div>

            
             
             `
            //  <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                
                // const data = results.data
                console.log("details "+website)
    
    
            // console.log(results.data[0])
    
        }
    ).catch((err) => {
        console.log('rejected', err)
    });
}
getMovieDetail();

// movie details 

// var bar = new ProgressBar.Circle(container, {
//     strokeWidth: 10,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#f92b1e',
//     trailColor: '#BDC3C7',
//     trailWidth: 5,
//     svgStyle: null
//   });
  
//   bar.setText('6.8');
//   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//   bar.text.style.fontSize = '0.9rem';
//   bar.text.style.color='#ECF0F1';
//   bar.animate(0.68);  // Number from 0.0 to 1.0

//   movie details end 


// <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
//                 <div class="card">   
//                     <div class="card-header">
//                         <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
//                     </div>  
//                     <div class="card-body">
//                     <!--    <h3 class="card-title btn" onClick="href='movie.html'">${title}</h3> -->
//                         <a class="card-title btn" id="m${0}" onClick="href='movie.html'">${title}</a>
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-4 metadata">
//                                 <i class="fa fa-star" aria-hidden="true"></i> 
//                                 <p>9.5/10</p>
//                                 </div>
//                                 <div class="col-8 metadata">Adventure. Sci-Fi</div>
//                             </div>
//                         </div>      
//                         <p class="card-text">${desc}</p>
//                         <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
//                             <i class="fa fa-play" aria-hidden="true"></i>
//                             </a>
//                     </div>
//                 </div>
//             </div>