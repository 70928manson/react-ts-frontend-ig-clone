import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";

import IGStory from "./components/IGStory";

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            {" "}
            {/*超過lg寬度時變成600px，讓右邊顯示 */}
            <IGStory />
          </div>
          {/* right */}
          <div className="hidden lg:block lg-w-[424px]">i am right</div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
