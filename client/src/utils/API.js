import axios from "axios";

export default {
    // Gets all Campaign names
    getAuthors: function () {
        return axios.get(`/api/author`);
    },
};