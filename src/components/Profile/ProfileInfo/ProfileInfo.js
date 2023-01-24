import style from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfu-RneBib0ETYhWnCWz7M3AqzRB0k7jo5Q&usqp=CAU' alt='img2'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo