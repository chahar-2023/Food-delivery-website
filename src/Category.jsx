import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineDomain } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
export const Categories = [
    {
        id:1,
        name:"All",
        icons :<TiThSmallOutline  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:2,
        name:"breakfast",
        icons :<MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:3,
        name:"soups",
        icons :<LuSoup  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:4,
        name:"pasta",
        icons :<LiaPastafarianismSolid  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:5,
        name:"main_course",
        icons :<MdOutlineDomain  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:6,
        name:"pizza",
        icons :<GiFullPizza  className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:7,
        name:"burger",
        icons :<GiHamburger  className="w-[60px] h-[60px] text-green-500"/>
    }
]