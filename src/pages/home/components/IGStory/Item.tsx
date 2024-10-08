import { useNavigate } from "react-router-dom";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ItemProps = {
  name: string;
  avatar: string;
  id: number;
};

const Item: React.FC<ItemProps> = ({ name, avatar, id }) => {
  const go = useNavigate();

  return (
    <div className="text-center">
      <LazyLoadImage
        src={avatar}
        alt={name}
        effect="blur"         // 加載前模糊
        wrapperClassName="w-[56px] h-[56px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden cursor-pointer"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover", // 確保圖片適應容器
          display: "block",   // 避免圖片 inline-block 的問題
          width: "100%",
          height: "100%",
        }}
        onClick={() => {
          go(`/react-ts-frontend-ig-clone/stories/${id}`);
        }}
      />
      <p className="text-xs mt-1">{name}</p>
    </div>
  );
};

export default Item;
