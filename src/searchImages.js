const URL = "https://pixabay.com/api/?key=33855415-05d2c494ec561d846634327cb&q&image_type=photo&orientation=horizontal&safesearch=true";
const params = 'webformatURL,largeImageURL,tags,likes,views,comments,downloads'

// export function searchImages(q){
//     return fetch (`${URL}${q}?${params}`).then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
// } 

fetch(URL).then((response)=> response.json())
.then(({hits})=>console.log(hits)
)