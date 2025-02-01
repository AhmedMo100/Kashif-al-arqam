import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                {/* الفوتر الأساسي */}
                <Row className="pt-5 pb-3">
                    {/* العمود الأول: شعار الموقع */}
                    <Col md={4} className="footer-logo">
                        <h5>كاشف الأرقام</h5>
                        <div className="logo-container position-relative">
                            <i className="fa-solid fa-phone" id="logo-call"></i>
                            <FaSearch className="position-absolute logo-search" size={14} />
                        </div>
                    </Col>

                    {/* العمود الثاني: روابط سريعة */}
                    <Col md={4} className="">
                        <h4>روابط سريعة</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/privacy" className="text-white text-decoration-none">سياسة الخصوصية</Link></li>
                            <li><Link to="/terms" className="text-white text-decoration-none">شروط الاستخدام</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">تواصل معنا</Link></li>
                        </ul>
                    </Col>

                    {/* العمود الثالث: أيقونات السوشيال ميديا */}
                    <Col md={4} className="mb-4">
                        <div className="social-icons">
                            <a href="https://twitter.com" className="text-white">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://youtube.com" className="text-white">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://facebook.com" className="text-white">
                                <FaFacebookF size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* خط فاصل */}
                <hr className="bg-light" />

                {/* حقوق النشر */}
                <Row>
                    <Col className="text-center py-3">
                        <p>@ جميع الحقوق محفوظة <span className='name'>كاشف الأرقتم</span>.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;