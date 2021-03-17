import * as serviceWorker from "./serviceWorker";
import { store } from "@redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();


// import React, { Component } from "react";
// import "./App.css";
// import { HeaderContainer } from "./components/Header";
// import { Navbar } from "./components/Navbar";

// // import { ProfileContainer } from "./components/Profile";
// // import { DialogsContainer } from "./components/Dialogs";

// import { Route, withRouter } from "react-router-dom";
// import styled from "@emotion/styled";
// import { UsersContainer } from "./components/Users";
// import { LoginConnect } from "./components/Login";
// import { initializeApp } from "@redux/app-reducer";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { Preloader } from "./components/common/Preloader";

// const { ProfileContainer } = React.lazy(() => import("./components/Profile"));
// const { DialogsContainer } = React.lazy(() => import("./components/Dialogs"));

// class App extends Component {
//   componentDidMount() {
//     this.props.initializeApp();
//   }
//   render() {
//     if (!this.props.initialized) {
//       return <Preloader />;
//     }

//     return (
//       <Wrapper>
//         <HeaderContainer />
//         <Navbar />
//         <Content>
//           <Route
//             path="/dialogs"
//             render={() => {
//               return (
//                 <React.Suspense fallback={<div>Loading...</div>}>
//                   <DialogsContainer />
//                 </React.Suspense>
//               );
//             }}
//           />
//           <Route
//             path="/profile/:userId?"
//             render={() => {
//               return (
//                 <React.Suspense fallback={<div>Loading...</div>}>
//                   <ProfileContainer />
//                 </React.Suspense>
//               );
//             }}
//           />
//           <Route path="/users" component={UsersContainer} />
//           <Route path="/login" component={LoginConnect} />
//         </Content>
//       </Wrapper>
//     );
//   }
// }

// export const AppContainer = compose(
//   withRouter,
//   connect(
//     (state) => ({
//       initialized: state.app.initialized,
//     }),
//     {
//       initializeApp,
//     }
//   )
// )(App);

// const Wrapper = styled.div`
//   margin: 0 auto;
//   display: grid;
//   width: 1200px;
//   grid-template-areas: "h h" "n c";
//   grid-template-rows: 60px 1fr;
//   grid-template-columns: 2fr 10fr;
// `;

// const Content = styled.div`
//   grid-area: c;
//   background-color: cornflowerblue;
// `;
