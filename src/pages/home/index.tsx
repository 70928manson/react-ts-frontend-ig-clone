import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGUser from "components/IGUser";

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
          <div className="hidden lg:block lg:w-[424px]">
            <IGUser avatar="/images/avatars/a9.png" account="user1" location="Taipei" showFollow={true} isFollowing={true} />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
