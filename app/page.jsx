"use client";
import { assets } from "@/assets/assets";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [message, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4pb-8 text-white relative bg-[#292a2d]">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => {
                expand ? setExpand(false) : setExpand(true);
              }}
              className="rotate-180"
              src={assets.menu_icon}
              alt=""
            />
            <Image className="opacity-70" src={assets.chat_icon} alt="" />
          </div>

          {message.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16" />
                <p className="font-medium text-2xl">Hi, I'm DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How can I help you today?</p>
            </>
          ) : (
            <div>
              <Message role="user" content="what is next js" />
            </div>
          )}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated, for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
