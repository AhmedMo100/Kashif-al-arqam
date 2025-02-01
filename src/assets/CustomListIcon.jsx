const CustomListIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* الشرطة العلوية (قصيرة ومحاذاة لليسار) */}
        <line x1="4" y1="6" x2="10" y2="6" />
        
        {/* الشرطة الوسطى (طويلة ومحاذاة لليسار) */}
        <line x1="4" y1="12" x2="20" y2="12" />
        
        {/* الشرطة السفلية (قصيرة ومحاذاة لليمين) */}
        <line x1="14" y1="18" x2="20" y2="18" />
    </svg>
);

export default CustomListIcon;
