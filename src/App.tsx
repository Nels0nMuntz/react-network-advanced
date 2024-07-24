import Profile from "./profile";

function App() {
  console.log("App render");
  
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-4xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div>
        <Profile id="u1"/>
      </div>
    </div>
  );
}

export default App;
