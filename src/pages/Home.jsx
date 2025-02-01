import { useState } from 'react';
import Hero from '../components/Hero';
import { Accordion, Container } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa'; // استيراد الأيقونات
import SearchInput from '../components/SearchForm & Results';

const Home = () => {
    // حالة التحكم في الأيقونات لكل عنصر
    const [activeKey, setActiveKey] = useState(null);

    const toggleIcon = (key) => {
        setActiveKey(activeKey === key ? null : key); // إذا كان العنصر مفتوحًا أغلقه، والعكس صحيح
    };

    return (
        <div className='home'>
            {/* Hero Section */}
            <Hero>
                <SearchInput />
            </Hero>

            {/* FAQ Section */}
            <section className="faq-section home-content page-content">
                <Container>
                    <h2 className="text-center mb-3">الأسئلة الشائعة</h2>
                    <p>إجابات سريعة على أكثر الأسئلة شيوعاً لتسهيل تجربتك.</p>
                    <Accordion activeKey={activeKey}>
                        {/* سؤال 1 */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={() => toggleIcon("0")}>
                                <span>هل الموقع مجاني؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "0" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم الموقع مجاني
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />

                        {/* سؤال 2 */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header onClick={() => toggleIcon("1")}>
                                <span>هل البيانات التي أبحث عنها آمنة؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "1" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم البيانات التي تبحث عنها آمنة
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />

                        {/* سؤال 3 */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header onClick={() => toggleIcon("2")}>
                                <span>هل البيانات التي أبحث عنها آمنة؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "2" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم البيانات التي تبحث عنها آمنة
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                        
                        {/* سؤال 4 */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header onClick={() => toggleIcon("3")}>
                                <span>هل البيانات التي أبحث عنها آمنة؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "3" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم البيانات التي تبحث عنها آمنة
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />

                        {/* سؤال 5 */}
                        <Accordion.Item eventKey="4">
                            <Accordion.Header onClick={() => toggleIcon("4")}>
                                <span>هل البيانات التي أبحث عنها آمنة؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "4" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم البيانات التي تبحث عنها آمنة
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />

                        {/* سؤال 6 */}
                        <Accordion.Item eventKey="5">
                            <Accordion.Header onClick={() => toggleIcon("5")}>
                                <span>هل البيانات التي أبحث عنها آمنة؟</span>
                                <div className="ms-auto custom-icon">
                                    {activeKey === "5" ? (
                                        <FaMinus className="icon-open" />
                                    ) : (
                                        <FaPlus className="icon-closed" />
                                    )}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                نعم البيانات التي تبحث عنها آمنة
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </section>
        </div>
    );
};

export default Home;
