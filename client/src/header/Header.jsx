import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg"
        src="https://images6.alphacoders.com/750/750966.jpg"
        alt="beach"
        />
    </div>
  )
}
