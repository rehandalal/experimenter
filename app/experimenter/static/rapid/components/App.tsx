import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import ExperimentFormPage from "experimenter-rapid/components/pages/ExperimentFormPage";

const App: React.FC = () => {
  React.useEffect(() => {
    const subHeader = document.getElementById("sub-header");
    /* istanbul ignore if */
    if (subHeader) {
      subHeader.classList.add("d-none");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Link to="/new/">Create a new experiment</Link>
      </Route>
      <Route exact path="/new/">
        <ExperimentFormPage />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
