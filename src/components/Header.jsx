// import "./Header.css";

// export default function Header() {
//   return (
//     <header className="app-header">
//       {/* Left */}
//       <div className="header-left">
//         <span className="brand-name">𝐄𝐌𝐈𝐥𝐲 ( 𝐘𝐨𝐮𝐫 𝐄𝐌𝐈 𝐆𝐮𝐢𝐝𝐞 )</span>
//       </div>

//       {/* Right */}
//       <nav className="header-right">
//         <a href="#what-is-nocost">What is No-Cost EMI</a>
//         <a href="#calculator">Calculator</a>
//         <a href="#how-it-works">How it Works</a>
//         <a href="#benefits">Benefits</a>
//       </nav>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <span className="brand-name">
          𝐄𝐌𝐈𝐥𝐲 <span style={{ fontWeight: 400 }}>( 𝐘𝐨𝐮𝐫 𝐄𝐌𝐈 𝐆𝐮𝐢𝐝𝐞 )</span>
        </span>
      </div>

      <nav className="header-right">
        <a href="#what-is-nocost">What is No-Cost EMI</a>
        <a href="#calculator">Calculator</a>

        <a href="#how-it-works">How it Works</a>
        <a href="#benefits">Benefits</a>
      </nav>
    </header>
  );
}
