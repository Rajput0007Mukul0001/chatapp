const TheirMessage = ({lastmessage,message})=>{
    
    const isFirstMessageByUser = !lastmessage|| lastmessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                 className="message-avatar"
                 style={{backgroundImage:message.sender && `url(${message?.sender?.avatar})`}}
                />
            )}
{/* //message ka {} brackets ki mistake ki wajah se output ni aah rha tha isme  */}

{message?.attachements && message?.attachements?.length > 0
       ?
       (
            <img 
            src={message.attachements[0].file}
            alt="message-attachements"
            className="message-image"
            style={{marginLeft:isFirstMessageByUser ? '4px':'48px'}}
            />
        )
        :
        (
        <div className="message" style={{float:'left',marginRight:'18px',backgroundColor:'#CABCDC',marginLeft:isFirstMessageByUser ? '4px':'48px'}}>
        {message.text}
        </div>
        )}
        </div>
    );
}

export default TheirMessage;