import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
     return (
         <div className={s.dialogs}>
             <div className={s.dialogsItems}>
                 <div className={s.dialog}>
                     <NavLink to='/dialogs/1'>Sasha</NavLink>
                 </div>
                 <div className={s.dialog}>
                     <NavLink to='/dialogs/2'>Egor</NavLink>
                 </div>
                 <div className={s.dialog}>
                     <NavLink to='/dialogs/3'>Artem</NavLink>
                 </div>
                 <div className={s.dialog}>
                     <NavLink to='/dialogs/4'>Lena</NavLink>
                 </div>
             </div>
             <div className={s.messages}>
                 <div className={s.message}>Hi</div>
                 <div className={s.message}>How are you</div>
                 <div className={s.message}>Bye</div>

             </div>
         </div>
     )
}

export default Dialogs