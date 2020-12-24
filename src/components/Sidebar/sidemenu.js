import {MdDashboard,MdAccountBalance} from "react-icons/md";
import {RiExchangeFundsLine,RiHandCoinFill} from "react-icons/ri"
import {BsFillDropletFill} from  "react-icons/bs";

const sidemenu = [
{
name: "Dashboard",
href :"/",
icon: <MdDashboard />
},
{
    name: "Multi Swap",
    href :"/",
    icon: <RiExchangeFundsLine />
},
{
    name: "Pool Info",
    href :"/",
    icon: <BsFillDropletFill />
},
{
    name: "Buy Ella",
    href :"/",
    icon: <RiHandCoinFill />
},
{
    name: "Accounts",
    href :"/",
    icon: <MdAccountBalance />
}
];

export default sidemenu;