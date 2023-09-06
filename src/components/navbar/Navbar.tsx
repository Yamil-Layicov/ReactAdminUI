import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon"></img>
        <img src="/app.svg" className="icon"></img>
        <img src="/expand.svg" className="icon"></img>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <span>Jane</span>
        </div>
        <img src="/setting.svg" className="icon"></img>
      </div>
    </div>
  )
}

export default Navbar