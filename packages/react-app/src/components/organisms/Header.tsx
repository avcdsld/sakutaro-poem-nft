import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={`flex justify-between w-full h-14 px-8 bg-red-400`}>
      <div className="flex items-center text-white">
        <Link to="/">NFT Template</Link>
      </div>
    </header>
  );
};
