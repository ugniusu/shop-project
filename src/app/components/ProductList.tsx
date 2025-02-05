import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_edabc407bc4bf9f433e0e8d906986ea5072737d3caaf1fa9.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_881f25a7624a1fae3ff356b7125e01e35c877a1e08531737.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$47</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_edabc407bc4bf9f433e0e8d906986ea5072737d3caaf1fa9.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_881f25a7624a1fae3ff356b7125e01e35c877a1e08531737.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$47</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_edabc407bc4bf9f433e0e8d906986ea5072737d3caaf1fa9.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_881f25a7624a1fae3ff356b7125e01e35c877a1e08531737.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$47</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
      >
        <div className="relative w-full h-80">
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_edabc407bc4bf9f433e0e8d906986ea5072737d3caaf1fa9.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://simp6.jpg5.su/images3/3840x5376_881f25a7624a1fae3ff356b7125e01e35c877a1e08531737.jpg"
            alt="Product item"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$47</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 text-xs hover:bg-primary hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
