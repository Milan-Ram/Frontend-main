import profile from './assets/profileimage.jpg';
import logo from './assets/iiclogo.jpg';
import { icon } from './assets/userpic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
</div>
        </div>
      <div>
            <img src={logo} alt="Logo" className="photo" />
        </div>
<div className="head-content">
  <h1 className="iic">IDEA INNOVATION CELL</h1>
          <h2 className="add">VSSUT,BURLA</h2>
        </div>
          
        <div className="login-button">
          <button>Sign in / login</button>
      </div>
      </div>
      <div className="body">
        <div className="pic">
          <div className="user"></div>
        </div>
        <div className="username">
        <input type="text" placeholder="Username" className="usernamecontent"/>
        </div>
        <div className="links">
        <div className="linkedinlink">
        <input type="text" placeholder="Linkedin Profile" className="name" />
        </div>
        <div className="githublink">
        <input type="text" placeholder="Github Profile" className="name" />
        </div>
        <div className="websitelink">
        <input type="text" placeholder="Website" className="name"/>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
