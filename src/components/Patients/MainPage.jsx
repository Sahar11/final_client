import './css/style.css';
// import './css/images/banner.png';
// import './css/images/bg.jpg';
// import './css/images/contact_us.jpg';
import logo from './css/images/logo.png';
import aboutus from './css/images/about-us.jpg';
// import './css/images/about-us.jpg';
export default function MainPage() {

  return <div> <div className="scroll-up-btn">
    <i className="fas fa-angle-up"></i>
  </div>
  {/* <!--scroll up btn end-->
  <!-- Main wrapper-screen --> */}
  <div className="wrapper" id="main-screen">
    {/* <!-- Header starts--> */}
    <header>
      {/* <!-- Header-top starts--> */}
      <div className="header-top pad-top-btm pad-lft-rth">
        <div>
          {/* <!-- Find a Location Button --> */}
          <button type="button " className="btn-style">
            <i className="fa-solid fa-location-dot"></i> Find a Location
          </button>
          <button type="button " className="btn-style">
            {/* <!-- Book a Lab Visit Button --> */}
            <i className="fa-solid fa-calendar-days"></i> Book a Lab Visit
          </button>
          <button type="button " className="btn-style">
            {/* <!-- Reports Button --> */}
            <i className="fa-solid fa-file-chart-column"></i> Reports
          </button>
        </div>

        <div>
          {/* <!-- LogIn Button --> */}
          <button type="button " id="login-btn" className="btn-style">
            <i className="fa-solid fa-user-lock"></i> LogIn
          </button>
          {/* <!-- SignUp Button --> */}
          <button type="button " id="signup-btn" className="btn-style">
            <i className="fa-solid fa-right-to-bracket"></i> SignUp
          </button>
        </div>
      </div>
      {/* <!-- Header-top ends-->
      <!-- Header-middle starts--> */}
      <div className="header-middle flex pad-lft-rth no-flex">
        {/* <!-- Logo --> */}
        <div className="logo">
          <img src={logo} alt="logo " />
        </div>

        <nav id="menu" className="nav-menu">
          <ul>
            <li>
              <a href=" # " className="active">Home</a>
            </li>
            <li>
              <a href=" # ">About Us</a>
            </li>
            <li>
              <a href="# ">News</a>
            </li>
            <li>
              <a href="# ">Our Services</a>
            </li>
            <li>
              <a href="# ">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div
          id="hamburger-icon"
          className="nav-menu"
          
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-menu">
            <li>
              <a href=" # " className="active">Home</a>
            </li>
            <li>
              <a href=" # ">About Us</a>
            </li>
            <li>
              <a href="# ">News</a>
            </li>
            <li>
              <a href="# ">Our Services</a>
            </li>
            <li>
              <a href="# ">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Header-bottom starts --> */}
      <div className="header-bottom"></div>
      {/* <!-- Header bottom ends --> */}
    </header>
    {/* <!-- Header ends --> */}

    {/* <!-- Main starts --> */}
    <main>
      {/* <!-- About-us --> */}
      <section id="About-us">
        <div className="container-layout">
          <div className="about-us-sec">
            <h1 className="heading">About Us</h1>
            <div className="abou-us-info flex">
              <div className="about-us-img">
                <img src={aboutus} alt="about us" />
              </div>
              <div>
                <p>
                  We care about people's health and are committed to
                  empowering a healthier you. At every step in the testing
                  process, from collection to reporting, we provide caring,
                  efficient, reliable and high-quality services. As a trusted
                  partner supporting patients, healthcare providers, corporate
                  customers and entire provincial healthcare systems, we are
                  continually harnessing our medical expertise to build the
                  best test offering while investing in technology to
                  transform the delivery of health care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* <!-- Main ends --> */}

    <footer id="footer">
      {/* <!-- Footer-top starts --> */}
      <section className="pad-lft-rth footer-top contact-us">
        <div className="container-layout">
          <h1 className="heading">Contact Us</h1>
          {/* <!--Contact us Form-sec --> */}
          <form id="contactUs" className="form-sec" action="" method="get">
            {/* <!-- First Name --> */}
            <div className="input-group">
              <label htmlFor="firstName">First Name :</label>
              <input
                type="text"
                name="firstName"
                className="input-style"
                id="fname"
                placeholder="Enter first Name"
                required
              />
            </div>
            {/* <!-- Last Name --> */}
            <div className="input-group">
              <label>Last Name :</label>
              <input
                type="text"
                name="lastName"
                className="input-style"
                id="lfname "
                placeholder="Enter last Name"
                required
              />
            </div>
            {/* <!-- Email --> */}
            <div className="input-group">
              <label>Email :</label>
              <input
                type="email"
                name="emailId"
                className="input-style"
                id="email"
                placeholder="Enter Email"
                required
              />
            </div>
            {/* <!-- Phone --> */}
            <div className="input-group">
              <label>Phone No :</label>
              <input
                type="tel"
                name="phone"
                className="input-style"
                id="phone"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            {/* <!-- Message --> */}
            <div className="input-group">
              <label>Message :</label>
              <textarea
                id="msg"
                className="input-style"
                name="message"
                placeholder="Enter Message"
              ></textarea>
            </div>
            {/* <!-- contact-us-btn --> */}
            <div className="contact-btn-sec">
              <input
                type="submit"
                value="Submit"
                className="btn"
                id="contact-btn"
              />
            </div>
          </form>
        </div>
      </section>
      {/* <!-- Footer-top starts -->
      <!-- Footer-bottom starts --> */}
      <section className="pad-lft-rth footer-bottom copyright">
        <p>© 2022 Sahar Halim, Satya Sindhu, Roda. All rights reserved.</p>
      </section>
      {/* <!-- Footer-bottom ends --> */}
    </footer>
    {/* <!-- Footer ends --> */}
  </div>
  {/* <!-- Main Wrapper ends -->*/}

 
  </div>
}