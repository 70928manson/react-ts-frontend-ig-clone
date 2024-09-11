import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Taiwan",
      account: "Jessica0608",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Taiwan",
      account: "__x_x__",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Taiwan",
      account: "gogo_0214",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Taiwan",
      account: "zoe_0200",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Taiwan",
      account: "Hide_On_Bush",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a5.png",
    },
    {
      id: 6,
      location: "Taiwan",
      account: "louis",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a6.png",
    },
    {
      id: 7,
      location: "Taiwan",
      account: "alvin",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a7.png",
    },
    {
      id: 8,
      location: "Taiwan",
      account: "grace",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a8.png",
    },
    {
      id: 9,
      location: "Taiwan",
      account: "rance",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a9.png",
    },
    {
      id: 10,
      location: "Taiwan",
      account: "bruce_fe",
      isFollowing: true,
      avatar: "/react-ts-frontend-ig-clone/images/avatars/a10.png",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
