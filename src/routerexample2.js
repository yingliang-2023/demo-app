import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/topics" element={<Topics />}>
            <Route path="" element={<Info />}></Route>
            <Route path=":topicId" element={<Topic />}></Route>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home(){
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="cats">Cats</Link>
        </li>
        <li>
          <Link to="dogs">Dogs</Link>
        </li>
      </ul>

      {/*child routes */}
      <Outlet />
    </div>
  );
}

function Info() {
 return (
  <h3>Please select a topic above.</h3>
 ) 
}


// add topic function
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}