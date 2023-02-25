import axios from "axios";

BASE_URL = "https://pixabay.com/api/"
const API_KEY = "33855415-05d2c494ec561d846634327cb"

export default class ImagesApiService {
    constructor() {
      this.searchQuery = 'polo';
      this.imageType = 'photo';
      this.orientation = 'horizontal';
      this.safesearch = true;
      this.page = 1;
      this.perPage = 40;
      this.displayAmount = this.perPage;
      this.myTotalHits = 0;
    }
  
    async fetchArticles() {
      const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safesearch}&page=${this.page}&per_page=${this.perPage}`;
  
      try {
        // USING AXIOS
  
        const response = await axios.get(url);
        console.log(response)
        this.incrementPage();
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    }
  
    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get getQuery() {
      return this.searchQuery;
    }
  
    set setQuery(newQuery) {
      this.searchQuery = newQuery;
    }
  }
