import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";
import IGContainer from "components/IGContainer";

import { useAppSelector } from "hooks";

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  // const friends = [
  //   {
  //     id: 1,
  //     location: "Singapore",
  //     account: "max_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a1.png",
  //   },
  //   {
  //     id: 2,
  //     location: "Taiwan",
  //     account: "fm_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a2.png",
  //   },
  //   {
  //     id: 3,
  //     location: "USA",
  //     account: "joanne_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a3.png",
  //   },
  //   {
  //     id: 4,
  //     location: "Japan",
  //     account: "focus_999",
  //     isFollowing: true,
  //     avatar: "/images/avatars/a4.png",
  //   },
  // ];

  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {
            friends.map((item) => {
              const { id, account, avatar, isFollowing, location } = item;
              return (
                <div className="-mt-3" key={id}>
                  <IGUser 
                    id={id}
                    account={account}
                    avatar={avatar}
                    location={location}
                    isFollowing={isFollowing}
                    showFollow  
                  />
                </div>
              )
            })
          }
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
