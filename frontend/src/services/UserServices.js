import axios from "axios";

const USERS_RESTAPI_URL = 'http://localhost/8080/api/users';

class userServices{

    getUsers(){
        axios.get(USERS_RESTAPI_URL);
    }
}