
import React from "react";

export default function Track() {
  return (
    <div
      style={{ height: "600px", width: "400px" }}
      className="bg-white border-solid border-2 border-sky-500 text-black absolute inset-y-10 right-1 "
    >
      <h1 className="font-bold text-3xl mt-10 ml-10 mr-10">Apixaban</h1>
      <div className="flex justify-around mt-6">
        <div>
          <p className="text-gray-600 font-medium">Quantity</p>
          <p>3mt</p>
        </div>
        <div>
          <p className="text-gray-600 font-medium ">His Code</p>
          <p>291123</p>
        </div>
        <div>
          <p className="text-gray-600 font-medium">Cash No</p>
          <p>50312920</p>
        </div>
      </div>
      <div className="mt-6 ml-9 mr-10">
        <h2 className="font-semibold" >Delivery Adress</h2>
        <p className="mt-3 ">
          Dummy data isnt exactly dumb — on the contrary. Analysts that use
          dummy data are often the smart ones in the room, since dummy data{" "}
        </p>
      </div>

    </div>
  );
}
