
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-5 mt-10 border-t border-[rgba(127,90,240,0.3)] flex flex-col md:flex-row justify-between items-center gap-5 
                       backdrop-blur-2xl bg-[rgba(20,20,40,0.6)] rounded-t-xl">
      
      {/* Address */}
      <div className="text-white-400 flex flex-col gap-1 text-center md:text-left">
        <p>Walchand College Of Engineering, Vishrambag</p>
        <p>Sangli, Maharashtra - 416415</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[rgba(30,20,50,0.5)] hover:bg-[rgba(127,90,240,0.3)] transition">
          <img src="/assets/github.svg" alt="github" className="w-5 h-5 filter brightness-0 invert" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[rgba(30,20,50,0.5)] hover:bg-[rgba(127,90,240,0.3)] transition">
          <img src="/assets/twitter.svg" alt="twitter" className="w-5 h-5 filter brightness-0 invert" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[rgba(30,20,50,0.5)] hover:bg-[rgba(127,90,240,0.3)] transition">
          <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5 filter brightness-0 invert" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-400 text-center md:text-right text-sm">
        © All Rights Reserved by WCE ACSES
      </p>

    </footer>
  );
};

export default Footer;
