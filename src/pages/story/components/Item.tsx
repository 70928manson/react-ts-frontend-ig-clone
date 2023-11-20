import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { storyData } from "utils/mockData";

type ItemProps = {
  id: string;
};

const Item: React.FC<ItemProps> = ({ id }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [pause, setPause] = useState(false)
  const go = useNavigate();

  const userData = storyData.filter(function (data) {
    return data.id === Number(id)
  })

  if(barWidth >= 100) {
    if (Number(id) !== storyData.length) {
      setBarWidth(0);
      if(userData[0].id < storyData.length) {
        go(`/react-ts-frontend-ig-clone/stories/${userData[0].id + 1}`);
      }
    }else {
      go(`/react-ts-frontend-ig-clone/`);
    }
  
  }

  useEffect(() => {
    if (!pause) {
      const nextBar = () => {
        if (barWidth < 100) {
          setBarWidth(barWidth + 0.25)
        }

      }
      const barAnimation = setInterval(nextBar, 10);

      return () => {
        clearInterval(barAnimation);
      }
    }
  }, [barWidth, pause])


  return (
    <>
      <div className="flex justify-center items-center w-full h-[calc(100vh-60px)] bg-[#1a1a1a] py-3">
          <div className="cursor-pointer"
              style = {{ visibility: (userData[0].id - 1) > 0 ? 'visible': 'hidden' }}
               onClick={() => {
                setBarWidth(0);
                go(`/react-ts-frontend-ig-clone/stories/${userData[0].id - 1}`);
              }}
            >
            <svg width="32px" height="32px" viewBox="0 0 1024 1024" className="icon" 
              version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
              <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path></g>
            </svg>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg mx-5 text-xl xl:w-1/3 lg:w-[40%] w-1/2 h-full bg-center bg-cover bg-no-repeat"
               style={{backgroundImage: `url(${userData[0].picture})`}}>
                 {/* url(/react-ts-frontend-ig-clone/images/avatars/a1.png)*/}
            <div className="user-with-scrollbar px-3 pt-3"
                 style={{ background: "linear-gradient( 180deg, rgba(38, 38, 38, .8) 0%, rgba(38, 38, 38, 0) 100% )" }}>
              <div className="scrollbar h-0.5 bg-slate-400">
                <div className="h-0.5 bg-white" id="storyBar"
                     style={{ width: `${barWidth}%` }}>
                </div>
              </div>
              <div className="user flex justify-between items-center py-3">
                <div className="flex items-center">
                  <div className="user flex w-[32px] h-[32px] p-[3px] rounded-full bg-center bg-contain mr-2"
                    style={{ backgroundImage: `url(${userData[0].avatar})` }}>
                  </div>
                  <p className="text-slate-50 text-base text-center"><span>{userData[0].name}</span></p>
                </div>
                <div className="flex">
                  {
                    !pause 
                    ?  <svg className="cursor-pointer" onClick={() => {setPause(!pause)} } width="28px" height="28px" viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <path fillRule="evenodd" clipRule="evenodd" 
                          d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V7ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7Z" 
                          fill="#ffffff">
                        </path> 
                      </g>
                    </svg> 
                    : <svg className="cursor-pointer" onClick={() => {setPause(!pause)}} width="32px" height="32px" 
                    fill="#ffffff" viewBox="0 0 1920 1920" 
                    xmlns="http://www.w3.org/2000/svg" 
                    stroke="#ffffff" transform="rotate(180)">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
                      strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <path d="M694.018 926.244c-27.296 18.796-27.3 49.269 0 68.067l509.836 351.074c27.296 18.797 49.424 7.18 49.424-25.959V601.13c0-33.133-22.125-44.757-49.424-25.959L694.018 926.244Z" fillRule="evenodd">
                        </path> 
                      </g>
                  </svg>
                  }
                </div>
              </div>
            </div>
            <p className="text-slate-50  p-3 mt-4">Coming soon...</p>
          </div>
          <div className="cursor-pointer" 
            style = {{ visibility: (userData[0].id + 1) < storyData.length + 1 ? 'visible': 'hidden' }}
            onClick={() => {
              setBarWidth(0);
              go(`/react-ts-frontend-ig-clone/stories/${userData[0].id + 1}`);
            }}
            >
            <svg width="32px" height="32px" viewBox="-102.4 -102.4 1228.80 1228.80" className="icon" 
              version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"
              transform="rotate(0)" strokeWidth="0.01024">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" 
                strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="51.2"></g>
              <g id="SVGRepo_iconCarrier">
              <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g>
            </svg>
          </div>
        </div>
    </>
  );
};

export default Item;
