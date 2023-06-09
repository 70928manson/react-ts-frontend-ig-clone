import Item from "./Item";
import { useGetIGStoriesQuery } from "services/homeServices";
import Loading from "components/Loading";

import { storyData } from "utils/mockData";

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery("all");

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
