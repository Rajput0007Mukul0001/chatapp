import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
//jo username dekho na wahi user name work krega isme 
//maine super_saiyan diya tha or fir baad me change kr diya tha isiliye ye mereko 403 forbidden error de rha tha
// Prince vegeta Prince_vegeta
//KAKAROTT
const App = ()=>{
  const projID=process.env.REACT_APP_ID;

  if(!localStorage.getItem('username')) return <LoginForm/>

  return  (
<ChatEngine
height="100vh"
//"Mukul@reactEngine077"
projectID={projID}
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
/>
  );
  
}
// hello123
export default App;
