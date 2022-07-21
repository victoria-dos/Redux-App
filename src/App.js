import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HorizontalPage } from "./app/HorizontalPage";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { EditPost } from "./features/posts/EditPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <HorizontalPage />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
