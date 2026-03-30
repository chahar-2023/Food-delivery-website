import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import image1 from "../assets/image1.jpg"
import { useDispatch } from "react-redux";
import { IncrementQty,DecrementQty, RemoveItem } from "../redux/cartSlice";
function Card2({name,id,price,image,qty}) {
    let dispatch = useDispatch()
    return(
        <div className="w-full h-[120px] p-2 shadow-lg flex justify-between">
            <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                    <img src={image} alt="" className="object-cover" />
                </div>
                <div className="w-[40%] h-full flex flex-col gap-3 ">
                    <div className="text-lg text-gray-600 font-semibold">{name}</div>
                    <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg shadow-lg overflow-hidden font-semibold border-2 border-green-400 text-xl">
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300" onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}}>-</button>
                        <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">{qty}</span>
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300" onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-end flex-col gap-6 text-xl text-green-400 font-semibold">
                <span>Rs {price} /-</span>
                <RiDeleteBin5Line className="w-[30px] h-[30px] text-red-400 cursor-pointer" onClick={()=>dispatch(RemoveItem(id))}/>
            </div>
        </div>
    )
}
export default Card2