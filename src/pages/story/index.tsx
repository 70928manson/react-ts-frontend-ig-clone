
import StoryHeader from "../story/components/StoryHeader";

import { useNavigate, useParams } from "react-router-dom";

import { storyData } from "utils/mockData";

type UserData = {
  name: string;
  avatar: string;
  id: number;
}

const Story: React.FC = () => {
  const { id } = useParams();
  const go = useNavigate();

  const userData = storyData.filter(function (data) {
    return data.id === Number(id)
  })

  console.log(userData[0].picture);
  

    return (
      <>
        <StoryHeader />
        <div className="flex justify-center items-center w-full h-[calc(100vh-60px)] bg-[#1a1a1a] py-3">
          <div className="cursor-pointer"
              style = {{ visibility: (userData[0].id - 1) > 0 ? 'visible': 'hidden' }}
               onClick={() => {
                go(`/react-ts-frontend-ig-clone/stories/${userData[0].id - 1}`);
              }}
            >
            <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" 
              version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
              <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path></g>
            </svg>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg mx-5 text-xl xl:w-1/3 lg:w-[40%] w-1/2 h-full bg-center bg-cover bg-no-repeat"
               style={{backgroundImage: `url(${userData[0].picture})`}}>
                 {/* url(/react-ts-frontend-ig-clone/images/avatars/a1.png)*/}
            <div className="user-with-scrollbar"
                 style={{ background: "linear-gradient( 180deg, rgba(38, 38, 38, .8) 0%, rgba(38, 38, 38, 0) 100% )" }}>
              <div className="scrollbar"></div>
              <div className="user flex items-center p-3">
                <div className="user flex w-[32px] h-[32px] p-[3px] rounded-full bg-center bg-contain mr-2"
                    style={{ backgroundImage: `url(${userData[0].avatar})` }}>
                </div>
                <p className="text-slate-50 text-base text-center"><span>{userData[0].name}</span></p>
              </div>
            </div>
            <p className="text-slate-50  p-3 mt-4">Coming soon...</p>
          </div>
          <div className="cursor-pointer" 
            style = {{ visibility: (userData[0].id + 1) < storyData.length + 1 ? 'visible': 'hidden' }}
            onClick={() => {
              go(`/react-ts-frontend-ig-clone/stories/${userData[0].id + 1}`);
            }}
            >
            <svg width="32px" height="32px" viewBox="-102.4 -102.4 1228.80 1228.80" className="icon" 
              version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"
              transform="rotate(0)" stroke-width="0.01024">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" 
                stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="51.2"></g>
              <g id="SVGRepo_iconCarrier">
              <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g>
            </svg>
          </div>
        </div>
    </>);
  };
  
  export default Story;