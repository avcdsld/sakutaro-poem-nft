import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <header className={`w-full h-14 bg-gray-800 px-8 pt-4`}>
        <div className="flex items-start text-white">
          <Link to="/">Sakutaro Poem NFTs</Link>
        </div>
      </header>
    </>
  );
};
