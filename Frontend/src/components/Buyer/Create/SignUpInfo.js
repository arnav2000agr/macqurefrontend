import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUpInfo({ formData, setFormData }) {
  const [mobile, setMobile] = useState("");
  const [flag, setFlag] = useState(false)
  const [otp, setOtp] = useState();
  const obj={
    number:mobile
  }
  const obj1={
    number:mobile,
    otp:otp
  }

  
  
  const sendotp=()=>{
	console.log("onlcik")

  console.log(obj);
  

	axios.post("http://localhost:5000/send/otp",{
    number:mobile
		
	}).then((data)=>{
		console.log(data)
    console.log("sucew")
	})
  }
  const varifyotp=()=>{
    console.log(obj1)
	axios.post("http://localhost:5000/verify/otp",{
    number:mobile,
    otp:otp
		
	}).then((data)=>{
    console.log(data)
    console.log("hey")
		setFlag(data.data)
	})
  }
  return (
    <div className="flex flex-col justify-center">
      <input
        type="String"
        placeholder="Enter Your Company Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
        className="py-2 px-4 rounded-md border w-3/5 my-2 ml-[86px]"
      />

      <div className="flex">
        <input
          type="string"
          placeholder="Enter Your Mobile Number"
          minLength={13}
          maxLength={13}
          value={formData.mobile}
          onChange={(event) => {
            setFormData({ ...formData, mobile: event.target.value });
            setMobile(event.target.value);
          }}
          className="py-2 px-4 rounded-md border w-3/5 my-2 ml-[86px]"
        />

        <div className="m-auto">
          <button className="bg-[#004AA1] rounded-md text-white py-1 w-[80px]" onClick={sendotp}>
            Send Otp
          </button>
        </div>
      </div>

      <div className="flex">
        <input
          type="string"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={(event) =>
           { setFormData({ ...formData, otp: event.target.value });
		   setOtp(event.target.value)
		}
          }
          className="py-2 px-4 rounded-md border w-3/5 my-2 ml-[86px]"
        />
        <div className="m-auto">
          <button className="bg-[#004AA1] rounded-md text-white py-1 w-[80px] " onClick={varifyotp}>
            {flag?"Verified":"verify"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpInfo;