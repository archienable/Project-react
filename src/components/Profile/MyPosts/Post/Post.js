import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU' alt='avatar'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>)
}

export default Post