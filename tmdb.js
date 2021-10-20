function getTopTV(){
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            const data = results.results[7].name;
            console.log("TV id =" + results.results[0].id);
            let movieCard = document.querySelector(".topTV"); 

            for(let i=7 ; i< 17 ;i++){
                if(i==10 || i ==13 || i==14 || i==15){
                    continue
                }
                const title = results.results[i].name;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                let id = results.results[i].id;
                console.log("id =" + id)
                movieCard.innerHTML +=`
                
                <div class="col-md-2 col-lg-2 d-flex align-items-stretch">
                    <div class="card">   
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" id="${id}" onClick="tvSelected(${id})" alt="Card image">
                        </div>  
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <!-- <a class="card-title btn" id="${id}" onClick="tvSelected(${id})">${title}</a>  -->
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
getTopTV();


function getLatestTV(){
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            const data = results.data
            console.log(results.results)
            let movieCard = document.querySelector(".nowPlayingTV"); 

            for(let i=4 ; i< 10 ;i++){
                // if(i==0 || i==3 | i==5 || i ==6){
                //     continue
                // }
                const title = results.results[i].name;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                let id = results.results[i].id;
                console.log("id =" + id)
                movieCard.innerHTML +=`
                
                <div class="col-md-2 col-lg-2 d-flex align-items-stretch">
                    <div class="card">   
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" id="${id}" onClick="tvSelected(${id})" alt="Card image">
                        </div>  
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <!-- <a class="card-title btn" id="${id}" onClick="tvSelected(${id})">${title}</a>  -->
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
getLatestTV();


function getPopularTV(){
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
        console.log("id is" + results.id)
            // const data = results.data
            // console.log(results.results)
            let movieCard = document.querySelector(".popularTV"); 

            for(let i=8 ; i< 14 ;i++){
                // if(i==0 || i==3 | i==5 || i ==6){
                //     continue
                // }
                const title = results.results[i].name;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                let id = results.results[i].id;
                console.log("id =" + id)
                movieCard.innerHTML +=`
                
                <div class="col-md-2 col-lg-2 d-flex align-items-stretch">
                    <div class="card">   
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" id="${id}" onClick="tvSelected(${id})" alt="Card image">
                        </div>  
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <!-- <a class="card-title btn" id="${id}" onClick="tvSelected(${id})">${title}</a>  -->
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
getPopularTV();



function tvSelected(id){
    sessionStorage.setItem('tvId',id);
    window.location = "tv_details.html";
    return false;
}


function getTVDetail(){
    id = sessionStorage.getItem('tvId');
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0c961ffcf84c2043d100edeeab29551a` , {
        "method": "GET",
    }).then((response) => {
        console.log("resolve", response)
        return response.json();
    }).then(
        results => {

            console.log("tvId =" +id + " tvName = " +results.name);
            // console.log("tvName =" +results.name);
            
            let tvDetails = document.querySelector(".tvDetails"); 
            let title = results.name;
            let img = results.backdrop_path;
            img = `https://image.tmdb.org/t/p/original/${img}`
            let desc = results.overview;
            let genres = results.genres;
            // let year = results.release_date.slice(0,4);
            // let runtime = results.runtime;
            let rating = results.vote_average;
            // let website = results.homepage;
            
            // console.log("gener ==" + );
            console.log(img);


            // let background = document.getElementById('mainContainer');
            // background.setAttribute('style',"background-image: url("+ img +");");

            // let cover = document.querySelector('.tvDetails');
            // cover.setAttribute('style',"background-image: url("+ img +");");

            

            // <li>${genres[1].name}&nbsp;&nbsp;&nbsp;|</li>

            tvDetails.innerHTML +=`
        <div class="card">   
            <div class="card-header">
                <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" id="${id}" onClick="movieSelected(${id})" alt="Card image">
            </div>  
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <div class="container">
                    <div class="row">
                      <div class="col-4 metadata">
                       <i class="fa fa-star" aria-hidden="true"></i> 
                        <p>${rating}/10</p> 
                        </div>
                        <div class="col-8 metadata">${genres[0].name}. ${genres[1].name}</div>
                    </div>
                </div>      
               <p class="card-text">${desc}</p>
                <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
                    <i class="fa fa-play" aria-hidden="true"></i>
                    </a>  
            </div>
        </div>
            
             `
            //  <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                
                // const data = results.data
                console.log("id tv "+id)
    
    
            // console.log(results.data[0])
    
        }
    ).catch((err) => {
        console.log('rejected', err)
    });
}
// getTVDetail();




// <div id="left">
//                     <h1>${title}</h1>
//                     <div id="info">
//                         <ul id="menu">
//                     <!--    <li>${year}</li>
//                         <li>${runtime} min</li> -->
//                         <li>${genres[0].name}&nbsp;&nbsp;&nbsp;|</li>
                        
//                         </ul>
//                     </div>
//                     <div id="rating">
//                         <h3>IMDb Rating:${rating}</h3>
//                         <div id="container"></div>
//                     </div>
//                 </div>
//                 <div id="right">
//                     ${desc}
//                     <div id="trailer">
                        
//                     <! --  <h4 location.href="${website}">VISIT WEBSITE <h4> -->
//                     </div>
//                  </div>






// <a class="card-title btn" id="${id}" onClick="movieSelected(${id})">${title}</a> 
// 











            //     <div class="card" style="width: 18rem;">
            //     <img src="https://image.tmdb.org/t/p/w500/${img}" class="card-img-top" alt="...">
            //     <div class="card-body">
            //         <h5 class="card-title">${title}</h5>
            //         <p class="card-text">${desc}</p>
            //         <a href="#" class="btn btn-primary">Go somewhere</a>
            //     </div>
            // </div>







            




            