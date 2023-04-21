import IGUser from "components/IGUser";
import { useAppSelector } from "hooks";

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 4);

  // const friends = [
  //       {
  //         id: 1,
  //         location: "Singapore",
  //         account: "max_999",
  //         isFollowing: true,
  //         avatar: "/images/avatars/a1.png",
  //       },
  //       {
  //         id: 2,
  //         location: "Taiwan",
  //         account: "fm_999",
  //         isFollowing: true,
  //         avatar: "/images/avatars/a2.png",
  //       },
  //       {
  //         id: 3,
  //         location: "USA",
  //         account: "joanne_999",
  //         isFollowing: true,
  //         avatar: "/images/avatars/a3.png",
  //       },
  //       {
  //         id: 4,
  //         location: "Japan",
  //         account: "focus_999",
  //         isFollowing: true,
  //         avatar: "/images/avatars/a4.png",
  //       },
  //   ];

  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <IGUser
        account="Ben_fe"
        location="Ben_972"
        avatar="/react-ts-frontend-ig-clone/images/avatar.png"
        size="medium"
      />
      <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
        You are following
      </p>
      {friends.map((item) => {
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
        );
      })}
    </div>
  );
};

export default IGProfile;