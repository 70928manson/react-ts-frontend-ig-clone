
import StoryHeader from "../story/components/StoryHeader";

import { useParams } from "react-router-dom";

import Item from "./components/Item";

const Story: React.FC = () => {
  const { id } = useParams();

    return (
      <>
        <StoryHeader />
        {
          id !== undefined && <Item id={id} />
        }
    </>);
  };
  
  export default Story;