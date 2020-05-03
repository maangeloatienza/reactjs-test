import React, {useState,useEffect} from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';
import { getToken } from './utils/Commons';


import Navbar from './components/header/Navbar';
import RouteLinks from './components/links/RouteLinks';

toast.configure({
  autoClose: 2000,
  draggable: false,
  hideProgressBar: true,
  position: toast.POSITION.TOP_RIGHT
});



// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isLoggedIn : false,
//       badge : 0,
//       message : ''
//     }
//   }

//   componentDidMount(){
//     let isLoggedIn = getToken() ? true : false;
//     this.setState({
//       isLoggedIn : isLoggedIn
//     })
//     this.getCartbadge();
//   }


//   getCartbadge() {
//     let params = getToken() ? `user=${getUser().id}` : `guest=${localStorage.getItem('guest')}`;

//     getUserCart(params).then((cart) => {

//       this.setState({ badge: cart.count }
//       )
//     });
//   }


//   render(){
 
//     return (

//       <div className="container">
//           <Navbar isLoggedIn={this.state.isLoggedIn} badge={this.state.badge}/>
//           <RouteLinks/>
//           <ToastContainer 
          
//         />
//       </div>
//     );
//   }
  
// }



function App(props) {
  
  const [isLoggedIn,setLoggedIn] = useState(false);

  useEffect(()=>{
    verifyUser();
  });

  const verifyUser = () => {
    let isLoggedIn = getToken() ? true : false;

    setLoggedIn(isLoggedIn);
  }

  return  <div className="container">
            <Navbar isLoggedIn={isLoggedIn}/>
            <RouteLinks />
            <ToastContainer/>
          </div>
}

export default App;
