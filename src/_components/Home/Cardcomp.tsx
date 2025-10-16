import React from "react";
import { Button } from "../ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

const Cardcomp = ({
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
    <div>
      <div className="h-10 bg-[#404040]"></div>
      <div className="h-[600px] w-[471px] bg-white rounded-md ">
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
                    Fluffy pancakes stacked with fruits, cream, Fluffy pancakes
                    stacked with fruits, cream,
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
                    Fluffy pancakes stacked with fruits, cream, Fluffy pancakes
                    stacked with fruits, cream,
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
            <div className="text-[20px] text-[#71717A] font-semibold mt-[16px]">
              Delivery location
            </div>
            <Textarea
              className="h-[100px]  mt-[8px] w-[440px] "
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
          <div className="flex justify-between mt-[20px] ">
            <div className="text-[#71717A] text-[16px]">items</div>
            <div className="pr-[16px] text-[#09090B] font-bold ">$25.98</div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Shipping</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">$0.99</div>
          </div>
          <div className="w-[440px] border-t border-4 border-dashed mt-5"></div>
          <div className="flex justify-between mt-[20px]">
            <div className="text-[#71717A] text-[16px]">Total</div>
            <div className="pr-[16px] text-[#09090B] font-bold  ">$26.97</div>
          </div>
        </div>
        <Button className="w-[440px] rounded-full mt-[20px] ml-[16px]">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cardcomp;
