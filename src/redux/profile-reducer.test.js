import {
  profileReducer,
  addPostActionCreator,
  deletePostActionCreator,
} from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 18 },
    { id: 4, message: "Dada", likesCount: 5 },
  ],
};

it("length of post should be incremented", () => {
  // 1. start data
  const action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  const action = addPostActionCreator("it-kamasutra.com");

  const newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it("after deleting length of message should be decrement", () => {
  const action = deletePostActionCreator(1);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  const action = deletePostActionCreator(1000);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
