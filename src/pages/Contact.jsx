import { useState } from 'react';
import Hero from '../components/Hero';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import Arrow from '../assets/images/arrow.png';

const Contact = () => {
    // States لإدارة بيانات النموذج والأخطاء
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // تم إضافة حقل رقم الهاتف
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // دالة للتحقق من صحة البيانات
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'الاسم مطلوب';
        if (!formData.email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صالح';
        }
        if (!formData.phone) {
            newErrors.phone = 'رقم الهاتف مطلوب';
        } else if (!/^\d{10,15}$/.test(formData.phone)) { // تحقق من أن الرقم يحتوي على 10 إلى 15 رقمًا
            newErrors.phone = 'رقم الهاتف غير صالح';
        }
        if (!formData.message) newErrors.message = 'الرسالة مطلوبة';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // إذا لم تكن هناك أخطاء
    };

    // دالة لإرسال النموذج
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // هنا يمكنك إرسال البيانات إلى الخادم (Backend)
            console.log('تم إرسال النموذج بنجاح:', formData);
            setSubmitted(true);
        }
    };

    // دالة لتحديث القيم في الـ State
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            {/* Hero Section */}
            <Hero>
                <div className="text-center py-5">
                    <h1 className="display-4">تواصل معنا</h1>
                    <p className="lead">نحن هنا لمساعدتك والإجابة على استفساراتك</p>
                </div>
            </Hero>

            {/* Contact Form */}
            <div className="contact-cotent">
                <Container className="contact-form">
                    {submitted ? (
                        <Alert variant="success" className="text-center">
                            تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.
                        </Alert>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            {/* حقل الاسم */}
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>الاسم</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* حقل البريد الإلكتروني */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>البريد الإلكتروني</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* حقل رقم الهاتف */}
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>رقم الهاتف</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* حقل الرسالة */}
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>الرسالة</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    isInvalid={!!errors.message}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* زر الإرسال */}
                            <div className="send">
                                <Button variant="primary" type="submit">
                                    إرسال
                                </Button>
                            </div>
                            <img src={Arrow} />
                        </Form>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default Contact;