// import React from "react";
// import { connect } from "react-redux";
// import {
//   followAC,
//   unfollowAC,
//   setUsersAC,
//   setCurrentPageAC,
//   setTotalUsersCountAC,
// } from "../../redux/users-reducer";
// import styled from "@emotion/styled";
// import * as axios from "axios";
// import User from "../../assets/images/User.png";

// class Users extends React.Component {

//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   }

//   onPageChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   };

//   render() {
//     const pagesCount = Math.ceil(
//       this.props.totalUsersCount / this.props.pageSize
//     );

//     const pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//       pages.push(i);
//     }

//     return (
//       <div>
//         <div>
//           {pages.map((p) => {
//             return (
//               <SelectedPage
//                 key={p.id}
//                 onClick={(e) => {
//                   this.onPageChanged(p);
//                 }}
//               >
//                 {p}
//               </SelectedPage>
//             );
//           })}
//         </div>

//         {this.props.users.map((u) => (
//           <div key={u.id}>
//             <div>
//               <Img src={u.photos.small != null ? u.photos.small : User} />
//             </div>

//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     this.props.unfollow(u.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     this.props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//             <div>{u.name}</div>
//             <div>{u.status}</div>
//             <div>{"u.location.country"}</div>
//             <div>{"u.location.city"}</div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export const UsersContainerClass = connect(
//   (state) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//   }),
//   (dispatch) => ({
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//     setTotalUsersCount: (totalCount) =>
//       dispatch(setTotalUsersCountAC(totalCount)),
//   })
// )(Users);

// const Img = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 30px;
// `;

// const SelectedPage = styled.span`
//   padding-left: 5px;
//   &:hover {
//     cursor: pointer;
//   }
// `;
