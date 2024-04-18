import Body from "./Components/Body.js";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./Components/MovieDialog.js";


function App() {
  return (
    <div>
      <Body/>
      <Toaster/>
      <MovieDialog/>
    </div>
  );
}

export default App;
