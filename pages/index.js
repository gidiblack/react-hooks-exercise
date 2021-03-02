import React from 'react';
import App from '../src/App';

function index() {
  return <App pageName="Home" />;
}
// next.js static method to be run on the server side when the url is first hit, then again when the page renders on the client side
// Index.getInitialProps = async ({ req }) => {
//   const isServer = !!req;
//   return {isServer};
// };

export default index;
