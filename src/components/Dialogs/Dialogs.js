import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    // debugger

    let dialogsElements = props.dialogs.map( (dialog, i) => <DialogItem key={`DialogItem-${i}`} name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messages.map( (message, i) => <Message key={`Message-${i}`} message={message.message}/>)

    return (
         <div className={style.dialogs}>
             <div className={style.dialogsItems}>
                 {dialogsElements}
             </div>
             <div className={style.messages}>
                 {messagesElements}
             </div>
         </div>
     )
}

export default Dialogs