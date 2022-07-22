import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import {ResetCss} from "./global/resetCSS";

const App = () => {
  return (
    <main>
      <ResetCss/>
        <Layout>
          <Profile/>
          <Repositories/>
          
        </Layout>
    </main>
  );
}

export default App;
