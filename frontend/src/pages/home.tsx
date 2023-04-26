import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../api/api-functions";

export const HomePage: FunctionComponent = () => {

    const posts = useQuery("posts", getPosts);

    console.log("posts", posts);

    return <div>Home Page</div>
}