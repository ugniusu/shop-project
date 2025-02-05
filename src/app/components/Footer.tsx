import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex justify-between gap-24 ">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SHOOT</div>
          </Link>
          <p className="">
            3252 Galang Street, West Side, Macentaur, MC 96671, Dreamland
          </p>
          <span className="font-semibold">hello@shoot.com</span>
          <span className="font-semibold">+98 765 4321</span>
          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="Facebook icon"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.png"
              alt="instagram icon"
              width={16}
              height={16}
            />
            <Image
              src="/youtube.png"
              alt="youtube icon"
              width={16}
              height={16}
            />
            <Image
              src="/pinterest.png"
              alt="pinterest icon"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x icon" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2 hidden lg:flex justify-between"></div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-primary text-white">JOIN</button>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image
                src="/discover.png"
                alt="discover icon"
                width={40}
                height={20}
              />
              <Image
                src="/skrill.png"
                alt="skrill icon"
                width={40}
                height={20}
              />
              <Image
                src="/paypal.png"
                alt="paypal icon"
                width={40}
                height={20}
              />
              <Image
                src="/mastercard.png"
                alt="mastercard icon"
                width={40}
                height={20}
              />
              <Image src="/visa.png" alt="visa icon" width={40} height={20} />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div></div>
    </div>
  );
};

export default Footer;
