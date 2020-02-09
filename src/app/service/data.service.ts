import { Post } from './../model/post.model';
import { apiUrl } from './api.url';
import { User } from './../model/user.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from "./../model/comment.model";
@Injectable({
    providedIn: 'root'
})
export class DataService {


    constructor(private http: HttpClient) { }
    //Retrieve all users from api
    getUsers = () => {
        return this.http.get<User[]>(apiUrl[0].url);
    }
    //Retrieve posts from api
    getPosts = () => {
        return this.http.get<Post[]>(apiUrl[1].url);
    }
    //Retrieve posts of given user
    getPostsByUserID=(id:any)=>{
        return this.http.get<Post[]>(apiUrl[2].url+id)
    }
    //Retrieve a post's comments
    getComments=(id:any)=>{
        return this.http.get<Comment[]>(apiUrl[3].url+id)
    }
    //Add new post
    postPost=(datas:any)=>{
        return this.http.post<Post[]>(apiUrl[1].url,datas)
    }
}
