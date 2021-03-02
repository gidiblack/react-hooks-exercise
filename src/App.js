import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

// Context set up where all levels below will share this context with hooks
export const configContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

// configValue object that can be accessed from any component below this tree
const configValue = { 
  showSpeakerSpeakingDays: true,
};

const App = ({ pageName }) => {
  return (
    // wrap page to show with configContext.provider and parse attribute named "value" into provider which can be any JS object
    <configContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </configContext.Provider>
  );
};

export default App;
