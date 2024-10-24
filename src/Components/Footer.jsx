import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  
  function Footer() {
    const socialIcons = [
      <FaFacebookF key="facebook" className="h-6 w-6" />,
      <FaInstagram key="instagram" className="h-6 w-6" />,
      <FaTwitter key="twitter" className="h-6 w-6" />,
      <FaYoutube key="youtube" className="h-6 w-6" />,
    ];
  
    const contactInfo = [
      {
        icon: <FaPhoneAlt className="mr-2 inline-block" />,
        text: '+628123111179',
      },
      {
        icon: <HiOutlineMail className="mr-2 inline-block" />,
        text: 'demo@gmail.com',
      },
      { icon: <FaMapMarkerAlt className="mr-2 inline-block" />, text: 'XXX XXX' },
    ];
  
    const quickLinks = [
      'Contact Us',
      'Payment Shipping',
      'FAQs',
      'Tracking Orders',
    ];
  
    return (
      <>
        <footer className="bg-[black] text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
              <h2 className="text-3xl font-bold">Logo</h2>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Reach us</h3>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index}>
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
              <div className="flex space-x-4">{socialIcons}</div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Join Our Newsletter
                </h3>
                <div className="flex">
                  <input
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md rounded-r-none border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email address"
                    type="email"
                  />
                  <button className="ring-offset-background focus-visible:ring-ring text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md rounded-l-none bg-black px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
            © 2023 Logo . All rights reserved
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  