"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-lg bg-white top-1/2 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/14843496/pexels-photo-14843496.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="">
              {/* TITLE */}
              <div>
                <h3>Product Name</h3>
                <div>$47</div>
              </div>
              {/* DESC */}
              <div>available</div>
            </div>
            {/* BOTTOM */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
