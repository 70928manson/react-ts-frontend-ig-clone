
import StoryHeader from "../story/components/StoryHeader";

import { useParams } from "react-router-dom";

import Item from "./components/Item";

const Story: React.FC = () => {
  const { id } = useParams();

    return (
      <>
        <StoryHeader />
        {
          id !== undefined && <Item key={id} id={id} />
        }
    </>);
  };
  
  export default Story;