import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`)
}
const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`)
}

export {
    userService,
    postService
}