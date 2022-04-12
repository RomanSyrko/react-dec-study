import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const postService = {
    getPostByUserId: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
}

export {
    postService
}