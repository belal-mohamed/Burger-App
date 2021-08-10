import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useCounterByHook = (props) => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState([]);

    const [postInfo, setPost] = useState({
        postId: null,
        post: null
    });

    useEffect(() => {
        if (postInfo.postId) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + postInfo.postId)
                .then(res => {
                    setPost({ ...postInfo, post: res.data });
                });
        }
    }, [postInfo.postId]);

    // useEffect(() => {
    //     document.title = `You Clicked ${counter} Times`;
    // }); // will call in every render indludes the first 

    // useEffect(() => {
    //     console.log("Update");
    //     document.title = `You Clicked ${counter} Times`;
    // }, [counter]); // will call in componentDidMount and if counter changed will work as
    //componentDidUpdate Too

    // useEffect(() => {
    //     document.title = `You Clicked ${counter} Times`;
    // }, []); // that's mean effect dosent depend on any thing so work only as
    //componentDidMount


    // useEffect(() => {
    //     document.title = `You Clicked ${counter} Times`;

    //     return () => {

    //     } // this function called as component will unmount
    // }, []); // that's mean effect dosent depend on any thing so work only as
    // //componentDidMount



    return (
        <div>
            <input onChange={(e) => setPost({ ...postInfo, postId: e.target.value })} />
            {postInfo.post ? postInfo.post.body : null}
        </div>

    )
}

export default useCounterByHook;