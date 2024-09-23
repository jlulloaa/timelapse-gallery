import { useEffect, useState } from "react";
// Because I'm using them here, I have to import them from here, not in index.js
import {
  Routes,
  Route
} from 'react-router-dom';
import { HashRouter  as Router } from 'react-router-dom';

import Footer from './components/footer';
import NavBar from './components/navbar';

import Home from './components/home';

// import logo from './imgs/logo.svg';
import './styles/App.css';
import { Container } from 'react-bootstrap';

// Tools required to connect the S3 bucket
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";


function App() {

  // const [objects, setObjects] = useState<
  //   Required<ListObjectsCommandOutput>["Contents"]
  // >([]);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const client = new S3Client({
      region: process.env.REACT_APP_REGION,
      credentials: fromCognitoIdentityPool({
        clientConfig: { region: process.env.REACT_APP_REGION },
        identityPoolId: process.env.REACT_APP_IDENTITYPOOLID
      }),
    });
    const command = new ListObjectsCommand({ Bucket: process.env.REACT_APP_BUCKET });
    client.send(command).then(({ Contents }) => setObjects(Contents || []));
  }, []);

  return (
    <Container className="App">
      <Router>
        <h1> 
          {/* <img className="img-fluid float-left" src="./bank_logo.png"  width="8%" alt="Bank Logo Left"/>   */}
          <span> <h3>Time Lapse Gallery</h3> </span>
          {/* <img className="img-fluid float-right" src="./bank_logo.png" width="8%" alt="Bank Logo Right"/>  */}
        </h1>
        {/* Add the navigation bar */}
        <NavBar/>
        <div className="App">
          {objects.map((o) => (
            <div key={o.ETag}>{o.Key}</div>
          ))}
        </div>

        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
