import { useContext, useState } from 'react'
import Feeds from '../components/Feeds'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import { ethers } from "ethers";

export default function Home() {

const [currentAccount,setAccount] = useState("")
 const[isConneted,setIsConnected]=useState(false);

 const ConnectToMetaMasK = async()=>{
 
  try {
const{ethereum}= window
if(!ethereum){
  console.log("connect to meta mask")
  return
}else{
const acc= await ethereum.request({method:"eth_requestAccounts"})
setAccount(acc[0])
setIsConnected(true)


const showacc = currentAccount.slice(0,6)

}


    
  } catch (error) {
    console.log (error)
    
  }

 }


  return (

    <div>
  {
    
    isConneted ? (
    <div className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
     <Sidebar account= {currentAccount}/>   
     <Feeds/>
    <Widgets/>
    </div>):(

<div className="bg-black h-full flex flex-col  items-center justify-center w-full space-y-10 py-52">

<div className=" w-full  flex items-center justify-center">
        <Image className=''
          src="https://th.bing.com/th/id/OIP.MQIwb8BgNhB1OzBvadoyRQHaHa?pid=ImgDet&rs=1"
          width={50}
          height={50} />


         </div>
      <div className='w-full flex justify-center  items-center'>
<button className="hidden xl:inline   bg-cyan-400 text-white w-56 h-[52px] text-lg rounded-full font-semibold shadow-md hover:bg-[#2598cd]" onClick={ConnectToMetaMasK}>
        Login Using MetaMask
      </button>
      </div>

</div>
    )



  }

</div>
  
    
  )}