import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      Powered by ANS &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
