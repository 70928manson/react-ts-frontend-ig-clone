import Item from "./Item";
import { useGetIGStoriesQuery } from "services/homeServices";
import Loading from "components/Loading";

import { storyData } from "utils/mockData";

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery("all");
  //   {
  //     id: 1,
  //     name: "bruce_1234",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "__x_x__",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "gogo_0214",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a3.png",
  //   },
  //   {
  //     id: 4,
  //     name: "zoe_0200",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a4.png",
  //   },
  //   {
  //     id: 5,
  //     name: "zoe_0000",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a5.png",
  //   },
  //   {
  //     id: 6,
  //     name: "louis",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a6.png",
  //   },
  //   {
  //     id: 7,
  //     name: "alvin",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a7.png",
  //   },
  //   {
  //     id: 8,
  //     name: "grace",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a8.png",
  //   },
  //   {
  //     id: 9,
  //     name: "rance",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a9.png",
  //   },
  //   {
  //     id: 10,
  //     name: "bruce_fe",
  //     avatar: "/react-ts-frontend-ig-clone/images/avatars/a10.png",
  //   },
  // ];

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      {!isLoading &&
        !data &&
        storyData?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} id={id}/>;
        })}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} id={id} />;
        })}
    </div>
  );
};

export default IGStory;
