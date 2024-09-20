import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterFill,
  RiTwitterXFill,
} from "@remixicon/react";

function Footer() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 my-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="#"
            target="_black"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <RiFacebookBoxFill />
          </a>
          <a
            href="#"
            target="_black"
            rel="noopener noreferrer"
            aria-label="Visit our X page"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="#"
            target="_black"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 VastuSpaze. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
