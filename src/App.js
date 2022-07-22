import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import {ResetCss} from "./global/resetCSS";

const App = () => {
  return (
    <main>
        <ResetCss/>
      <Layout>
          <Profile/>

          <div>Repositories</div>
          <div>Starrds</div>
      </Layout>
    </main>
  );
}

export default App;
