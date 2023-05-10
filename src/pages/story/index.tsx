
import StoryHeader from "../story/components/StoryHeader";

import { useNavigate } from "react-router-dom";

const storyData = [
  {
    id: 1,
    name: "bruce_1234",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a1.png",
  },
  {
    id: 2,
    name: "__x_x__",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a2.png",
  },
  {
    id: 3,
    name: "gogo_0214",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a3.png",
  },
  {
    id: 4,
    name: "zoe_0200",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a4.png",
  },
  {
    id: 5,
    name: "zoe_0000",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a5.png",
  },
  {
    id: 6,
    name: "louis",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a6.png",
  },
  {
    id: 7,
    name: "alvin",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a7.png",
  },
  {
    id: 8,
    name: "grace",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a8.png",
  },
  {
    id: 9,
    name: "rance",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a9.png",
  },
  {
    id: 10,
    name: "bruce_fe",
    avatar: "/react-ts-frontend-ig-clone/images/avatars/a10.png",
  },
];

type StoryProps = {
  name: string;
  avatar: string;
  id: number;
};

const Story: React.FC = () => {
  const go = useNavigate();

    return (
      <>
        <StoryHeader />
        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#1a1a1a]">
          <div className="bg-[#ffffff] rounded-lg p-3 text-xl">
            Coming soon...
          </div>
        </div>
    </>);
  };
  
  export default Story;
  