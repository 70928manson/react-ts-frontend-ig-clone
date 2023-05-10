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
      <div
        className="w-[56px] h-[56px] p-[3px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={() => {
          go(`/react-ts-frontend-ig-clone/stories/${id}`);
        }}
      ></div>
      <p className="text-xs mt-1">{name}</p>
    </div>
  );
};

export default Item;
