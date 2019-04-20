import axios from "axios";

export default {
    // Gets all Campaign names
    getAuthors: function () {
        return axios.get(`/api/author`);
    },
    getAuthor: function (id) {
        return axios.get(`/api/author/${id}`);
    },
    getBooks: function(){
        return axios.get('/api/book')
    },
    getBook: function (id) {
        return axios.get(`/api/book/${id}`)
    }
};