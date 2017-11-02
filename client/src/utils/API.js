import axios from 'axios'

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  apiKey: '9ef5097969d74f3d822a1fc9f390b0f8',
  defaultSearchTerm: 'Government',
  defaultSearch: function () {
    let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.defaultSearchTerm}&page=2&sort=oldest&api-key=${this.apiKey}`
    console.log(queryString);
    return axios.get(queryString)
  },
  searchArticles: function (search) {
    let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&page=2&sort=oldest&api-key=${this.apiKey}`
    console.log(queryString);
    return axios.get(queryString)
  },
  searchDates: function (search) {
    let queryString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${search.term}&facet_field=day_of_week&begin_date=${search.startDate}&end_date=${search.endDate}&api-key=${this.apiKey}`
    console.log(queryString);
    return axios.get(queryString)
  }
}