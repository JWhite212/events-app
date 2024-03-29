import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          {" "}
          <Image
            src="/assets/images/logo.svg"
            height={38}
            width={128}
            alt="logo"
          />{" "}
        </Link>
        <p className="text-sm text-gray-500">
          2024 Events Maximum©. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
