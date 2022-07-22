import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
          <div>
            <img src="https://avatars.githubusercontent.com/u/105995190?v=4" alt="avatar of user"/>
            <h1>Fernando Oliveira</h1>
            <h3>Username: </h3>
            <span>FernandoOlive1ra</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starrds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
          

          </div>
          <div>Repositories</div>
          <div>Starrds</div>
      </Layout>
    </main>
  );
}

export default App;
