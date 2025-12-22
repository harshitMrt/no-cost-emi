import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      {/* Left */}
      <div className="header-left">
        <span className="brand-name">𝐄𝐌𝐈𝐥𝐲 ( 𝐘𝐨𝐮𝐫 𝐄𝐌𝐈 𝐆𝐮𝐢𝐝𝐞 )</span>
      </div>

      {/* Right */}
      <nav className="header-right">
        <a href="#calculator">Calculator</a>
        <a href="#how-it-works">How it works</a>
        <a href="#benefits">Benefits</a>
        <button className="header-btn">Get Started</button>
      </nav>
    </header>
  );
}
