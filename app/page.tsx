import { BsTwitter } from "react-icons/bs";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 flex justify-start pt-8">
          <div className="text-4xl hover:bg-gray-800 rounded-full p-2 cursor-pointer h-fit transition-all">
            <BsTwitter />
          </div>
        </div>
        <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-white"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
