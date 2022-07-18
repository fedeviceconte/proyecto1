import Nav from './Nav';

const Header = (props) => {
  return (

    <header className="header">
      <div className="container logo-nav-container">
        <a href="#" className="logo"> <img src="img/logo.png" alt="logo" width="100px" height="100px" />
       </a>
        <Nav />
      </div>
     
    </header>
  );
}
export default Header;
