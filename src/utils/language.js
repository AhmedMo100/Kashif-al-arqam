export const getLanguage = () => {
    return localStorage.getItem("appLanguage") || "ar"; // العربية كافتراضية
};

export const setLanguage = (lang) => {
    localStorage.setItem("appLanguage", lang);
    window.location.reload(); // تحديث الصفحة لتطبيق التغيير فورًا
};
