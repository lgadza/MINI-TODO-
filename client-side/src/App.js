import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout';
import {BrowserRouter, Route, Routes} from'react-router-dom';
import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import NotFound from './pages/notfound/NotFound';
function App() {
  return (
    <div className="App">
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </Layout>
    </div>
  );
}

export default App;
