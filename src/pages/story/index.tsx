
import StoryHeader from "../story/components/StoryHeader";

import { useNavigate } from "react-router-dom";

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
          <div className="bg-[#ffffff]">
            hello
            <p className="cursor-pointer" 
               onClick={() => {
                go("/react-ts-frontend-ig-clone");
              }}>click here back
            </p>
          </div>
        </div>
    </>);
  };
  
  export default Story;
  