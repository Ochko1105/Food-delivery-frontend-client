"use client";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

import { useState } from "react";
import Cardcomp from "./Cardcomp";
import Orderhistory from "./Orderhistory";

const Header = ({
  price,
  plus,
  handleonminus,
  handleonplus,
}: {
  price: number;
  plus: number;
  handleonminus: Function;
  handleonplus: Function;
}) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="w-[1440px] h-[70px] bg-[#18181B] flex items-center mx-auto justify-between">
      <div className="w-[1260px] mx-auto flex justify-between items-center">
        <div>
          <div className="flex gap-4 text-white">
            <img height={46} width={37} src="/logo.png"></img>
            <div>
              <div>NomNom</div>
              <div>Swift delivery</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <input
              className="bg-white rounded-full text-black placeholder:text-black h-[40px]  placeholder:pl-4"
              placeholder="Add location"
            ></input>
          </div>
          <Popover>
            <PopoverTrigger>
              <div className="h-[36px] w-[36px] bg-white items-center flex justify-center rounded-full">
                <FiShoppingCart />
              </div>
            </PopoverTrigger>
            <PopoverContent className="h-[1024px] w-[550px] bg-[#404040] ">
              <div className="tabs tabs-box bg-[#404040] pb-10">
                <div className="bg-white rounded-full">
                  <Button
                    className={
                      `w-[230px] bg-white text-black rounded-full` +
                      `${active && " !bg-red-400 text-white"}`
                    }
                  >
                    Cart
                  </Button>
                  <Button
                    className={
                      `w-[230px] relative bg-white text-black rounded-full` +
                      `${!active && " !bg-red-400 text-white"}`
                    }
                  >
                    Order history
                  </Button>
                </div>
                <input
                  type="radio"
                  name="my_tabs_6"
                  className="tab btn w-[230px] rounded-full bg-red-400 h-[40px] absolute top-5 left-5 opacity-0 inset-0"
                  aria-label="Cart"
                  onClick={() => setActive(!false)}
                />

                <div className="tab-content">
                  <Cardcomp
                    price={price}
                    plus={plus}
                    handleonminus={handleonminus}
                    handleonplus={handleonplus}
                  />
                </div>

                <input
                  type="radio"
                  name="my_tabs_6"
                  className="tab btn w-[230px] rounded-full absolute left-65 opacity-0"
                  aria-label="Order"
                  onClick={() => setActive(!true)}
                />
                <div className="tab-content">
                  <Orderhistory></Orderhistory>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <div className="h-[36px] w-[36px] bg-red-500 items-center flex justify-center rounded-full">
                <FaUser />
              </div>
            </PopoverTrigger>
            <PopoverContent className="items-center flex justify-center h-[104px] w-[188px]">
              <div className="w-[188px] h-[104px] bg-white rounded-md text-black items-center justify-center flex  flex-col gap-2">
                <div className="text-[20px] font-semibold">Test@gmail.com</div>
                <Button className=" bg-gray-300 rounded-full items-center text-black">
                  Sign out
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
