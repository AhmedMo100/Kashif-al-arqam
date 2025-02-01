import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "react-bootstrap-icons";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import CustomListIcon from "../assets/CustomListIcon";
import ArabicFlag from "../assets/images/arabic-language-flag.png";
import EnglishFlag from "../assets/images/english-language-flag.png";
import translations from "../locales/translations"; // ملف الترجمة

const CustomNavbar = () => {
    // تحميل اللغة المحفوظة في localStorage أو استخدام "ar" كلغة افتراضية
    const savedLang = localStorage.getItem("language") || "ar";
    
    // إذا كانت اللغة الإنجليزية، يتم تعيين اللغة إلى العربية عند تحميل الصفحة
    const defaultLang = savedLang === "en" ? "ar" : savedLang;
    
    const [expanded, setExpanded] = useState(false);
    const [language, setLanguage] = useState({
        code: defaultLang,
        name: defaultLang === "ar" ? "العربية" : "English",
        flag: defaultLang === "ar" ? ArabicFlag : EnglishFlag,
    });

    useEffect(() => {
        // تحديث النصوص عند تغيير اللغة
        document.documentElement.lang = language.code;
    }, [language]);

    const changeLanguage = (lang) => {
        localStorage.setItem("language", lang); // حفظ اللغة المختارة
        setLanguage({
            code: lang,
            name: lang === "ar" ? "العربية" : "English",
            flag: lang === "ar" ? ArabicFlag : EnglishFlag,
        });
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
            <Container>
                {/* اللوجو */}
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
                    <span className="ms-2 app-name">{translations[language.code].appName}</span>
                    <div className="logo-container position-relative">
                        <i className="fa-solid fa-phone" id="logo-call"></i>
                        <FaSearch className="position-absolute logo-search" size={14} />
                    </div>
                </Navbar.Brand>

                {/* زر التبديل (Toggle Button) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    {expanded ? <X size={24} /> : <CustomListIcon />}
                </Navbar.Toggle>

                {/* العناصر القابلة للطي */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/privacy" className="nav-link-custom" onClick={() => setExpanded(false)}>
                            {translations[language.code].privacyPolicy}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/terms" className="nav-link-custom" onClick={() => setExpanded(false)}>
                            {translations[language.code].terms}
                        </Nav.Link>
                    </Nav>

                    {/* العناصر على اليسار */}
                    <Nav>
                        {/* Dropdown للغة */}
                        <Dropdown className="me-3">
                            <Dropdown.Toggle as="div" className="dropdown-custom d-flex align-items-center">
                                <FaChevronDown size={14} />
                                <span className="me-2">{language.name}</span>
                                <img src={language.flag} alt={language.name} width="20" className="me-2" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-custom">
                                <Dropdown.Item onClick={() => changeLanguage("ar")}>
                                    العربية <img src={ArabicFlag} alt="Arabic" width="20" className="ms-2" />
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage("en")}>
                                    English <img src={EnglishFlag} alt="English" width="20" className="ms-2" />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* زر تواصل معنا */}
                        <Button as={Link} to="/contact" className="contact-button" onClick={() => setExpanded(false)}>
                            {translations[language.code].contactUs}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
