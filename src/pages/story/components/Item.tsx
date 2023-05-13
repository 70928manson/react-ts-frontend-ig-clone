import { useNavigate } from "react-router-dom";

type ItemProps = {
  name: string;
  avatar: string;
  id: number;
};

const Item: React.FC<ItemProps> = ({ name, avatar, id }) => {
  const go = useNavigate();

  return (
    <div className="text-center">
      
    </div>
  );
};

export default Item;
