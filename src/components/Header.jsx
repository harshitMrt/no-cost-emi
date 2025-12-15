import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      {/* Left */}
      <div className="header-left">
        <span className="brand-name">𝐌𝐨𝐧𝐞𝐲𝐒𝐜𝐨𝐩𝐞</span>
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
