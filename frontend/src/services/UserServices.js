import axios from "axios";

const USERS_RESTAPI_URL = 'http://localhost/8080/api/users';

class UserServices{

    getUsers(){
        return axios.get(USERS_RESTAPI_URL);
    }
}

export default new UserServices();