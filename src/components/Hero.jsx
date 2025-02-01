import { Container } from 'react-bootstrap';
import CustomNavbar from './Navbar';

const Hero = ({ children }) => {
    return (
        <div className="hero">
            <Container>
                {/* Navnbar*/}
                <CustomNavbar />
                {/* Hero Content */}
                <div className="hero-content">
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default Hero;