import Database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{

    public check(email : string, password : string) : boolean{
        const users = Database .filter(item => item.email === email);
        if(users[0].permission === PermissionType.ADMIN){
            console.log("Seja bem vindo Administrador");
        }
        else{
            console.log("Seja bem vindo Usuário");
        }
        return this.checkNext(email,password);
    }
}