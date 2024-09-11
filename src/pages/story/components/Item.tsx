import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { storyData } from "utils/mockData";

type ItemProps = {
  id: string;
};

const Item: React.FC<ItemProps> = ({ id }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [pause, setPause] = useState(false); // 暫停狀態
  const [imageLoaded, setImageLoaded] = useState(false); // 追蹤圖片載入狀態
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const go = useNavigate();

  const userData = storyData.find((data) => data.id === Number(id)) || { id: 0, avatar: "", picture: "", name: "" };

  const barAnimationRef = useRef<NodeJS.Timeout | null>(null);

  // 若非停止且圖片載入完畢, 上方時間條開始跑
  useEffect(() => {
    if (!pause && imageLoaded) {
      const nextBar = () => {
        setBarWidth((prevBarWidth) => {
          if (prevBarWidth >= 100) {
            setShouldNavigate(true);
            clearInterval(barAnimationRef.current!);
            return prevBarWidth; // 保持在 100
          }
          return prevBarWidth + 0.25;
        });
      };

      barAnimationRef.current = setInterval(nextBar, 10);

      return () => {
        if (barAnimationRef.current) {
          clearInterval(barAnimationRef.current);
        }
      };
    }
  }, [pause, imageLoaded]);

  // 用於控制時間條跑完後的導航
  useEffect(() => {
    if (!shouldNavigate) return;

    setBarWidth(0);

    if (Number(id) === storyData.length) {
      go("/react-ts-frontend-ig-clone/");
    } else if (userData.id < storyData.length) {
      go(`/react-ts-frontend-ig-clone/stories/${userData.id + 1}`);
    }

    setShouldNavigate(false);
  }, [shouldNavigate, id, userData.id, storyData.length, go]);

  // 若暫停則清掉interval
  useEffect(() => {
    if (pause && barAnimationRef.current) {
      clearInterval(barAnimationRef.current);
    }
  }, [pause]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-[calc(100vh-60px)] bg-[#1a1a1a] py-3">
        <div
          className="cursor-pointer"
          style={{ visibility: userData.id - 1 > 0 ? "visible" : "hidden" }}
          onClick={() => {
            setBarWidth(0);
            go(`/react-ts-frontend-ig-clone/stories/${userData.id - 1}`);
          }}
        >
          {/* 左邊箭頭 SVG */}
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 1024 1024"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" />
          </svg>
        </div>

        <div
          className="bg-[#1a1a1a] rounded-lg mx-5 text-xl xl:w-1/3 lg:w-[40%] w-1/2 h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${userData.picture})` }}
        >
          {!imageLoaded && (
            <div className="flex justify-center items-center w-full h-full">
              <PulseLoader color="#ffffff" />
            </div>
          )}
          <img
            src={userData.picture}
            alt="story"
            style={{ display: "none" }} // 隱藏 img 元素
            onLoad={() => setImageLoaded(true)} // 當圖片載入完畢時觸發
            onError={() => setImageLoaded(true)} // 處理加載錯誤
          />
          <div
            className="user-with-scrollbar px-3 pt-3"
            style={{
              background:
                "linear-gradient( 180deg, rgba(38, 38, 38, .8) 0%, rgba(38, 38, 38, 0) 100% )",
            }}
          >
            <div className="scrollbar h-0.5 bg-slate-400">
              <div
                className="h-0.5 bg-white"
                id="storyBar"
                style={{
                  width: `${barWidth}%`,
                  visibility: imageLoaded ? "visible" : "hidden", // 等圖片載入完才顯示時間條
                }}
              ></div>
            </div>

            <div className="user flex justify-between items-center py-3">
              <div className="flex items-center">
                <div
                  className="user flex w-[32px] h-[32px] p-[3px] rounded-full bg-center bg-contain mr-2"
                  style={{ backgroundImage: `url(${userData.avatar})` }}
                ></div>
                <p className="text-slate-50 text-base text-center">
                  <span>{userData.name}</span>
                </p>
              </div>
              <div className="flex">
                {/* 暫停/播放按鈕 */}
                {!pause ? (
                  <svg
                    className="cursor-pointer"
                    onClick={() => setPause(true)} // 暫停動畫
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V7ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7Z"
                      fill="#ffffff"
                    />
                  </svg>
                ) : (
                  <svg
                    className="cursor-pointer"
                    onClick={() => setPause(false)} // 繼續動畫
                    width="32px"
                    height="32px"
                    fill="#ffffff"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    transform="rotate(180)"
                  >
                    <path
                      d="M694.018 926.244c-27.296 18.796-27.3 49.269 0 68.067l509.836 351.074c27.296 18.797 49.424 7.18 49.424-25.959V601.13c0-33.133-22.125-44.757-49.424-25.959L694.018 926.244Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer"
          style={{
            visibility:
              userData.id + 1 < storyData.length + 1 ? "visible" : "hidden",
          }}
          onClick={() => {
            setBarWidth(0);
            go(`/react-ts-frontend-ig-clone/stories/${userData.id + 1}`);
          }}
        >
          {/* 右邊箭頭 SVG */}
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 1024 1024"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Item;
