import React, { useEffect, useState,useRef } from "react";
import { PhotographIcon,ChartBarIcon,EmojiHappyIcon,CalendarIcon, XIcon } from "@heroicons/react/outline";
import { ethers } from "ethers";
import Tweet from "./Tweets";
import FlipMove from "react-flip-move";
import{TwitterContractAddress} from "../utils/helper-config"
import Twitter from "../utils/abi.json"
import InputEmoji from "react-input-emoji";
  


function InputBox() {
  const[tweets,setTweets]= useState([]);
  const[postMessage,setPostMessage]= useState("")
  const[Submit,setSubmit]=useState(false)

  
  
 const addImageToPost=()=>{ 

  }

  const [showEmojis,setShowEmoji]= useState(false)
  const [input, setInput] =useState(null);

  const filePickedref= useRef(null)
  const [selectFiles,setSelectFiles]= useState(null)



//   const AddPost=async()=>{

//     let tweetObject = {
//       'tweetText': input,
//       'isDeleted': false
//     };


//     try {
//       const {ethereum} =window
    
//       if(!ethereum){
//         console.log("MetaMak Not Connected");
//       }else{
//     const provider= new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const TwitterContract = new ethers.Contract(
//       TwitterContractAddress,
//       Twitter.abi,
//       signer
//     )  
//   let tweetTx= await TwitterContract.addTweet(tweetObject.input)
//   console.log(tweetTx)  
  
  
    
    
    
//        }
    
    
      
//     } catch (error) {
      
//     }
//     }

//     const sendPost=async (e)=>{
//      e.preventDefault()

//      AddPost()
//      setInput("")
//     }

const getInput =async(e)=>{
  setInput(e.target.value)
  console.log(typeof(input))
  console.log(input)
  }

  const handelSubmit=async()=>{
    setSubmit(true)

    if(Submit){
      try {
        let tweetData =input

      const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const TwitterContract = new ethers.Contract(
      TwitterContractAddress,
      Twitter.abi,
      signer)


     const TxResponse= await TwitterContract.addTweet(tweetData)
     await TxResponse.wait()
     console.log(TxResponse);
 
        
      } catch (error) {
        console.log(error)
        
      }



    }




  }





  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll">
      <img
        src="https://lh3.googleusercontent.com/ogw/AOh-ky1oz1pi9nSyOiLmqRvYxmt433lA1-e69khhjndx=s32-c-mo"
        className="h-12 w-12 rounded-full xl:mr-2.5"
      />

      <div>
        <div className="w-full devide-y devide-grey-700">
          <div className="" >
            <textarea
              value={input}
              onChange={getInput} 
              rows="2"
              placeholder="What's happening ?"
              className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-grey-500 tracking-wide w-full min-h-[50px] "
            ></textarea>
          </div>
        </div>
        
        
        {selectFiles && (
          <div className="relative">
            <div className=" absolute w-8 h-8 bg-black hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center cursor-pointer" onClick={()=>selectFiles(null)}>
              <XIcon className="text-white h-5" />

            </div>
            <img
              src={selectFiles}
              alt=""
              className="round-2xl max-h-80 object-contain"
            />
          </div>
        )

        }





         <div className="flex items-center justify-between pt-2.5">
         <div className="flex items-center">
         <div className="icon" onClick={()=>filePickedref.current.click()}>
          <PhotographIcon className="h-[22px] text-[#41bcbc] mx-2 "/>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickedref}
          />
          </div>

         <div className="icon rotate-90">
         <ChartBarIcon className="text-[#41bcbc] h-[22px] mx-2"/>
          </div>

        <div className="icon" onClick={()=>setShowEmoji(!showEmojis)}>
        <EmojiHappyIcon className="text-[#41bcbc] h-[22px] mx-2 "/>
        </div>
        
        <div className="icon">
        <CalendarIcon className="text-[#41bcbc] h-[22px] mx-2"/>
        </div>
{/* {showEmojis && (
  <InputEmoji
      value={text}
      onChange={setText}
      placeholder="Type a message"
      theme="dark"
    />
 )}  */}
   <button className="bg-cyan-400 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-cyan-600 " type="submit" onClick={handelSubmit}>Tweet</button>


         </div>

         </div>


      </div>
      {/* <FlipMove>
  { 
    tweets.map((tweet)=>(
      <Tweet  tweet={tweet}/> 
    ))


  }


      




      </FlipMove> */}



    </div>
  );
}

export default InputBox;
