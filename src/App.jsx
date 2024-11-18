
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from './assets/logo.png'
import Room from './assets/roomOne.png'
import Roomtwo from './assets/roomTwo (2).png'
import Roomthree from './assets/roomthree.png'
import Product from './assets/product.png'
import Product1 from './assets/image 1.png'
import Product2 from './assets/image 2.png'
import Product3 from './assets/image 3.png'
import Product4 from './assets/image 4.png'
import Product5 from './assets/Images.png'
import Product6 from './assets/Images (1).png'
import Product7 from './assets/image 7.png'
import ContentImage from './assets/Content.png'
import ExploreImage from './assets/Rectangle 24.png'
import ExploreImage1 from './assets/Rectangle 25.png'
import Furino from './assets/Funiro..png'
import Menu from './components/Menu'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Heading from './components/Heading'
import Button from './components/Button'
import { CiShare2 } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

function App() {

  return (
    <>
    {/* Header Part Start  */}
    <div className="bg-white h-[100px]">
      <Container>
        <Flex className={"justify-between items-center leading-[100px]"}>
          <div className="">
            <Image src={Logo}/>
          </div>
          <div className="">
            <Flex>
            <Menu mText={"Home"} className={"px-[65px] font-pop font-medium text-menuColor text-[16px]"}/>
            <Menu mText={"Shop"} className={"px-[65px] font-pop font-medium text-menuColor text-[16px]"}/>
            <Menu mText={"About"} className={"px-[65px] font-pop font-medium text-menuColor text-[16px]"}/>
            <Menu mText={"Contact"} className={"px-[65px] font-pop font-medium text-menuColor text-[16px]"}/>
            </Flex>
          </div>
          <div className="">
            <Flex className={"gap-[45px]"}>
            <CiUser />
            <CiSearch />
            <CiHeart />
            <IoCartOutline />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>

        {/* Header Part Start  */}

        {/* Banner Part Start  */}

        <div className="bg-Banner bg-no-repeat bg-cover bg-center py-[150px]">
          <Container>
          <div className="bg-bannerColor w-[643px] rounded-[10px] py-[60px] px-[40px] ml-auto">
            <Heading text={"New Arrival"} as={"p"} className={"font-pop font-semibold text-textColor text-[16px]"}/>
            <Heading text={"Discover Our New Collection"} as={"h1"} className={"font-pop font-bold text-btnColor text-[52px] pr-[155px]"}/>
            <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."} as={"p"} className={"font-pop font-medium text-textColor text-[18px] pr-[112px]"}/>
            <Button btnText={"BUY NOW"} className={"font-pop font-bold text-white text-[16px] bg-btnColor py-[25px] px-[72px] mt-[45px]"}/>
          </div>
          </Container>

        </div>

        {/* Banner Part End  */}

        {/* Room Part Start  */}

        <Container>
        <Heading text={"Browse The Range"} as={"p"} className={"font-pop font-bold text-textColor text-[32px] text-center mt-[40px]"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} as={"p"} className={"font-pop font-regular text-paraColor text-[20px] text-center pb-[35px]"}/>
        <Flex className={"justify-between"}>
          <div className="">
          <Image src={Room}/>
          <Heading text={"Dining"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px] text-center mt-[20px]"}/>
          </div>
          <div className="">
          <Image src={Roomtwo}/>
          <Heading text={"Living"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px] text-center mt-[20px]"}/>
          </div>
          <div className="">
          <Image src={Roomthree}/>
          <Heading text={"Bedroom"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px] text-center mt-[20px]"}/>
          </div>
        </Flex>
        </Container>

        {/* Room Part End  */}

        {/* Product Part Start  */}

        <Container>
          <div className="product_part mt-[50px]">
          <Heading text={"Our Product"} as={"p"} className={"font-pop font-bold text-textColor text-[40px] text-center mb-[32px]"}/>
          <Flex className={"flex-wrap gap-[48px]"}>
            <div className="Product_section relative group">
              <Image src={Product1}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"-30%"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product2}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product3}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"-50%"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product4}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge1 w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"New"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product5}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product6}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge1 w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"New"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product7}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"-50%"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
            <div className="Product_section relative group">
              <Image src={Product}/>
              <div className="w-[285px] h-[145px] px-[17px] py-[20px] bg-productColor">
                <Heading text={"Syltherine"} as={"p"} className={"font-pop font-semibold text-textColor text-[24px]"}/>
                <Heading text={"Stylish cafe chair"} as={"p"} className={"font-pop font-medium text-hoverparaColor text-[16px]"}/>
                <Flex>
                <Heading text={"Rp 2.500.000"} as={"p"} className={"font-pop font-semibold text-textColor text-[20px]"}/>
                <Heading text={"Rp 3.500.000"} as={"p"} className={"font-pop font-regular text-Bobo text-[16px] line-through ml-3"}/>

                </Flex>
              </div>
              <div className="bg bg-badge1 w-[48px] h-[48px] rounded-[50%] absolute top-[23px] right-[23px]">
              <Heading text={"New"} as={"p"} className={"font-pop font-medium text-white text-[16px] text-center leading-[48px]"}/>
                
              </div>
              <div className="bg-overly absolute top-0 left-0  w-full h-full text-center hidden group-hover:block">
              <Button btnText={"Add To Cart"} className={"font-pop font-semibold text-btnColor text-[16px] bg-white mt-[175px] py-[12px] px-[52px]"}/>
              <Flex className={"gap-[20px] justify-center mt-[24px]"}>
                <div className="">
                  <Flex className={"items-center"}>
                  <CiShare2 className={"text-[20px] text-white"}/>
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                  
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <IoIosGitCompare className={"text-[20px] text-white"}/>
                  <Heading text={"Compare"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
                <div className="">
                  <Flex className={"items-center"}>
                  <FaRegHeart className={"text-[20px] text-white"}/> 
                  <Heading text={"Share"} as={"p"} className={"font-pop font-semibold text-white text-[16px]"}/>

                  </Flex>
                </div>
              </Flex>
              </div>
            </div>
          </Flex>
          <div className="SeeMore_btn text-center py-[50px]">
          <Button btnText={"See More"} className={"font-pop font-bold text-btnColor text-[16px] py-[13px] px-[72px] border border-btnColor "}/>
          </div>
          </div>

        </Container>
        {/* Product Part End  */}

        {/* See More Part Start  */}

        <div className="bg-explorebg w-full py-[44px] pl-[80px]">
          <Container>
            <Flex>
              <div className="w-[422px]">
              <Heading text={"50+ Beautiful rooms inspiration"} as={"h6"} className={"font-pop font-bold text-textColor text-[40px] mt-[222px]"}/>
              <Button btnText={"Explore"} className={"font-pop font-bold text-white text-[16px] bg-btnColor py-[12px] px-[40px] mt-[15px]"}/>

              </div>
              <div className="pl-[32px] pr-[20px] relative">
                <Image src={ExploreImage}/>
                <Image src={ContentImage} className={"absolute bottom-[25px] left-[60px]"}/>
              </div>
              <div className="">
                <Image src={ExploreImage1}/>
              </div>
            </Flex>
          </Container>
        </div>
        {/* See More Part Start  */}


        {/* Details Part Start  */}

        <div className="details_part mt-8">
          <Container>
            <Flex className={"justify-between"}>
              <div className="Logo_part w-[285px]">
                <Image src={Furino}/>
                <Heading text={"400 University Drive Suite 200 Coral Gables,FL 33134 USA"} as={"p"} className={"font-pop font-regular text-detailColor text-[16px] mt-[50px]"}/>
              </div>
              <div className="link_part">
                <Heading text={"Links"} as={"p"} className={"font-pop font-regular text-detailColor text-[16px]"}/>
                <Heading text={"Home"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] mt-[60px]"}/>
                <Heading text={"Shop"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] py-[40px]"}/>
                <Heading text={"About"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] pb-[40px]"}/>
                <Heading text={"Contact"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px]"}/>
              </div>

              <div className="help_part">

                <Heading text={"Help"} as={"p"} className={"font-pop font-regular text-detailColor text-[16px]"}/>
                <Heading text={"Payment Options"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] mt-[60px]"}/>
                <Heading text={"Returns"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] py-[40px]"}/>
                <Heading text={"Privacy Policies"} as={"p"} className={"font-pop font-medium text-menuColor text-[16px] pb-[40px]"}/>
              </div>
              <div className="News_leter">
                <Heading text={"Newsletter"} as={"p"} className={"font-pop font-regular text-detailColor text-[16px]"}/>

                
                <Flex className={"mt-[50px] gap-4 "}>
                <input type="mail" placeholder='Enter your mail address ' className={"border-black border-b-2"}/>
                <Button btnText={"Subscribe"} className={"font-pop font-medium text-menuColor text-[14px] border-black border-b-2"}/>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
        {/* Details Part End  */}


    </>
  )
}

export default App








