import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 min-w-[200px]"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28055745/pexels-photo-28055745/free-photo-of-a-man-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
