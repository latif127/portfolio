import profileImage from './images/md_latif.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Md Latif</h2>
      <img src={profileImage} alt="profile-image" className="profile-image" />
    </div>
  );
}

export default App;
