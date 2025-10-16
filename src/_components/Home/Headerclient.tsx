import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
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
            <PopoverContent className="h-screen w-[550px] bg-[#404040] ">
              <div className="tabs tabs-box bg-[#404040] pb-10">
                <input
                  type="radio"
                  name="my_tabs_6"
                  className="tab"
                  aria-label="Cart"
                />

                <div className="tab-content">
                  <div className="h-10 bg-[#404040]"></div>
                  <div className="h-fit w-[471px] bg-white rounded-md ">
                    <div className="pt-[16px] pl-[16px]">
                      <div className="text-[20px] text-[#71717A] font-semibold">
                        My cart
                      </div>
                      <div className="flex  h-[120px] mt-5   ">
                        <div className="w-[124px] h-[120px] ">
                          <img
                            src="/food1.png"
                            className="w-[124px] h-[120px] object-cover rounded-md "
                          ></img>
                        </div>
                        <div className="flex flex-col ml-2 w-[305px]">
                          <div className=" flex  ">
                            <div>
                              <div className="text-red-500 font-semibold text-[16px]">
                                Finger food
                              </div>
                              <div className="text-[12px] mt-[12px] text-[#09090B] items-start">
                                Fluffy pancakes stacked with fruits, cream,
                                Fluffy pancakes stacked with fruits, cream,
                              </div>
                            </div>

                            <Button className="h-[36px] w-[36px] rounded-full border-2 border-red-400 bg-white text-red-400">
                              X
                            </Button>
                          </div>

                          <div className="mt-[10px] flex justify-between items-center">
                            <div>
                              <ButtonGroup
                                aria-label="Media controls"
                                className="h-fit gap-2"
                              >
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => handleonminus()}
                                >
                                  <MinusIcon />
                                </Button>
                                <Button className="rounded-full">{plus}</Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => handleonplus()}
                                >
                                  <PlusIcon />
                                </Button>
                              </ButtonGroup>
                            </div>
                            <div>
                              <div className="text-[#09090B] text-[24px] font-semibold">
                                ${price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[30px] w-[440px] border-b-4 border-dashed"></div>
                      <div className="flex  h-[120px] mt-5   ">
                        <div className="w-[124px] h-[120px] ">
                          <img
                            src="/food1.png"
                            className="w-[124px] h-[120px] object-cover rounded-md "
                          ></img>
                        </div>
                        <div className="flex flex-col ml-2 w-[305px]">
                          <div className=" flex  ">
                            <div>
                              <div className="text-red-500 font-semibold text-[16px]">
                                Finger food
                              </div>
                              <div className="text-[12px] mt-[12px] text-[#09090B] items-start">
                                Fluffy pancakes stacked with fruits, cream,
                                Fluffy pancakes stacked with fruits, cream,
                              </div>
                            </div>

                            <Button className="h-[36px] w-[36px] rounded-full border-2 border-red-400 bg-white text-red-400">
                              X
                            </Button>
                          </div>

                          <div className="mt-[10px] flex justify-between items-center">
                            <div>
                              <ButtonGroup
                                aria-label="Media controls"
                                className="h-fit gap-2"
                              >
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => handleonminus()}
                                >
                                  <MinusIcon />
                                </Button>
                                <Button className="rounded-full">{plus}</Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => handleonplus()}
                                >
                                  <PlusIcon />
                                </Button>
                              </ButtonGroup>
                            </div>
                            <div>
                              <div className="text-[#09090B] text-[24px] font-semibold">
                                ${price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[30px] w-[440px] border-b-4 border-dashed"></div>
                      <div className="h-[120px] mb-[20px] pb-[40px]">
                        <div className="text-[20px] text-[#71717A] font-semibold mt-[56px]">
                          Delivery location
                        </div>
                        <Textarea
                          className="h-[80px] mt-[8px] pb-[40px]"
                          placeholder="Please share your  complete address"
                        ></Textarea>
                      </div>
                    </div>
                  </div>
                  <div className="h-10 bg-[#404040]"></div>
                  <div className="h-[276px] w-[471px] bg-white rounded-md ">
                    <div className="pt-[16px] pl-[16px]">
                      <div className="text-[20px] text-[#71717A] font-semibold">
                        Payment info
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_6"
                  className="tab"
                  aria-label="Order"
                />
                <div className="tab-content">
                  <div className="h-10 bg-[#404040]"></div>
                  <div className="h-[530px] w-[471px] bg-white rounded-md ">
                    <div className="pt-[16px] pl-[16px]">
                      <div className="text-[20px] text-[#71717A] font-semibold">
                        Order history
                      </div>
                    </div>
                  </div>
                  <div className="h-10 bg-[#404040]"></div>
                  <div className="h-[276px] w-[471px] bg-white rounded-md ">
                    <div className="pt-[16px] pl-[16px]">
                      <div className="text-[20px] text-[#71717A] font-semibold">
                        Payment info
                      </div>
                    </div>
                  </div>
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
