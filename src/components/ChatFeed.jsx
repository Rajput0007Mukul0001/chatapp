import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const ChatFeed = (props)=> {
    // ab isme hume props dalne hai isiliye ham isko {iske ander kafi sare variables dalke isko } = props kr denge 
    //function ke arguments me bhi hum aisa hi krenge isme
    const {chats,activeChat,userName,messages}=props;
    // console.log(props);

     const chat = chats && chats[activeChat];
    // console.log(chat,userName,messages);
    const renderReceipts = (message,isMyMessage)=>{
        return chat.people.map((person,index)=> person.last_read === message.id && (
            <div
            key = {`read_${index}`}
            className="read-receipt"
            style={{
                float: isMyMessage ?'right':'left',
                backgroundImage:`url(${person?.person?.avatar})`
            }}
            />
        ))
    }

    const renderMessages = ()=>{
        //render krne ke liye ye pattern diya hua hai docuention me hame 
        // isko bs callback ki tarah use krna hai hame
        const keyse = Object.keys(messages);
        //javascript ke keys objects me job bhi mesage hoga woh hame milega
        //ise ham sare messages find kr lenge kiyunki ye jo hai hamari 
        //messages ki keys store krega or ham keys wise ya key ke number ke according unko fetch kr rahe honge bs ye hi hai iska logic isme 

        //ab in keys ko filter krn padega jiske liye hum map use krenge 

        return keyse.map((key,index)=>{
            const message = messages[key];
            //ise hame specific key wala message hi milega jisko hum message naam ke variable me store kr lenge 
            const lastMessageKey = index === 0 ? null
: keyse[index-1];
//apna message dekhne ke liye ham userName se check krenge sender.username ko 

const isMyMessage = userName === message.sender.username;
// iss sbko render kr denge ab or render me apun log message krenge 
return (
    <div key={`msg_${index}`} style={{width: '100%'}}>
        <div className="message-block">
            {
                isMyMessage
                ? <MyMessage message={message}/> 
                : <TheirMessage message={message} lastmessage={message[lastMessageKey]}/>
            }
        </div>   
        <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0px',marginLeft:isMyMessage ? '0px':'68px' }}>
        {renderReceipts(message,isMyMessage)}
       {/* react receipt */}
        </div>
    </div>
)

        })

    }

    //call the ewnder function
    //ye hi render ni ho rha tha bey ache se isme  
// renderMessages();    
//uper wala chapenge iski jagah

if(!chat) return ' LOADING ........';

    return (
        <div className="chat-feed">
            {/* ChatFeed */}
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
            <div className="chat-subtitle">
            {chat.people.map((person)=>
                // phla wala person toh map ka parameter wala hai isme
                `${person.person.username}`
            )}
            </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            {/* //ab iss chat ke niche ham form bnayenge submit krne ka  */}
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat}/>
                </div>
        
        </div>
    )
}

export default ChatFeed;