import { useState } from "react";
import { InputGroup, FormControl, Dropdown, Button } from "react-bootstrap";
import KJUR from "jsrsasign";
import { FaExclamationCircle } from "react-icons/fa";

const SearchInput = () => {
    const [selectedOption, setSelectedOption] = useState("name");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const countries = [
        { name: "Egypt", code: "20" },
        { name: "USA", code: "1" },
        { name: "UK", code: "44" },
    ];

    const generateJwtToken = () => {
        const payload = {
            sub: "lookup_user",
            name: "search_request",
            exp: Math.floor(Date.now() / 1000) + 3600,
        };

        const header = { alg: "HS256", typ: "JWT" };
        const secretKey = "3IBV05LrqPzJmRJ8Fui3Z1rTcylX107";
        return KJUR.jws.JWS.sign("HS256", JSON.stringify(header), JSON.stringify(payload), secretKey);
    };

    const fetchData = async () => {
        if (!searchQuery.trim()) {
            setError("الرجاء إدخال الاسم أو الرقم");
            return;
        }

        setError("");
        setLoading(true);
        let url = "";

        if (selectedOption === "name") {
            url = `https://search2.almuttasil.biz/lookup/${encodeURIComponent(searchQuery)}`;
        } else if (selectedOption === "number" && selectedCountry) {
            url = `https://search2.almuttasil.biz/lookup/${selectedCountry.code}${searchQuery}`;
        } else {
            setError("يرجى اختيار دولة قبل البحث عن رقم");
            setLoading(false);
            return;
        }

        try {
            const token = generateJwtToken();
            const response = await fetch(url, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!response.ok) throw new Error("خطأ في جلب البيانات");

            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setError("حدث خطأ أثناء البحث. حاول مرة أخرى.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search">
            <div className="text-center pt-5 pb-0">
                <h1 className="display-4">اكتشف هوية المتصل فوراً!</h1>
                <p className="lead">أدخل الرقم وتعرف على إسم المتثل في لمح البصر.</p>
            </div>
            <div className="search-input-container">
                <div className="toggle-cards">
                    {['name', 'number'].map(option => (
                        <div key={option} onClick={() => setSelectedOption(option)} className={`card ${selectedOption === option ? "selected" : ""}`}>
                            <input type="radio" checked={selectedOption === option} readOnly />
                            <span>{option === "name" ? "بواسطة الإسم" : "بواسطة الرقم"}</span>
                        </div>
                    ))}
                </div>

                <InputGroup className="mb-3">
                    {selectedOption === "number" && (
                        <Dropdown onSelect={(code) => setSelectedCountry(countries.find(c => c.code === code))}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedCountry ? selectedCountry.name : "اختار دولة"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {countries.map(({ name, code }) => (
                                    <Dropdown.Item key={code} eventKey={code}>{name}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                    <FormControl
                        type="text"
                        placeholder={selectedOption === "name" ? "ادخل الاسم" : "ادخل الرقم"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="outline-secondary" onClick={fetchData}>بحث</Button>
                </InputGroup>

                {error && (
                    <div className="error-message">
                        <FaExclamationCircle />
                        {error}
                    </div>
                )}

                {loading && <div>جاري تحميل البيانات...</div>}

                {!loading && results.length > 0 && (
                    <div>
                        <h3>النتائج:</h3>
                        <ul>
                            {results.map((result, index) => (
                                <li key={index}>
                                    {selectedOption === "name" ? `الرقم: ${result.key}` : `الاسم: ${result.primary_name}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchInput;
