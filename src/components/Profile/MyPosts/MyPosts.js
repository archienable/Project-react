import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    // debugger
    let postsElements = props.posts.map( (post, i) => <Post key={`post-${i}`} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
            <div></div>
        </div>
    )
}

export default MyPosts