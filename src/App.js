import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import {ResetCss} from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCss/>
          <Layout>
            <Profile/>
            <Repositories/>
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
