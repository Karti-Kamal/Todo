import HttpService from "./http";
import {TodoRoutes} from "../routes/routes";


export default class TodoService {

    constructor()
    {
        this.http = HttpService.getHttpClient();
    }

    getTodos(callback)
    {
        console.log(TodoRoutes.apiTodos)
        this.http
            .get(TodoRoutes.apiTodos)
            .then((response)=>{
                if (callback) callback(response.data['hydra:member']);
            })
            .catch((err) => console.error(err))
    }
}