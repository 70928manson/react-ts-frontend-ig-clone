import { useNavigate } from "react-router-dom";

const StoryHeader: React.FC = () => {
  const go = useNavigate();

  return (
    <header className="sticky top-0 bg-[#1a1a1a]">
      <div className="flex justify-between items-center h-[60px] px-2 box-border lg:max-w-[1024px] lg:mx-auto lg:px-0">
        <img
          className="w-[100px] cursor-pointer"
          src="/react-ts-frontend-ig-clone/images/storyLogo.svg"
          onClick={() => {
            go("/react-ts-frontend-ig-clone");
          }}
          alt="ig icon"
        />
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              go("/react-ts-frontend-ig-clone");
            }}>
            <path
              stroke="#ffffff" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 8L8 16M8.00001 8L16 16" 
              />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default StoryHeader;
