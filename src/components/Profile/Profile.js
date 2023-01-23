import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfu-RneBib0ETYhWnCWz7M3AqzRB0k7jo5Q&usqp=CAU' alt='img2'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile