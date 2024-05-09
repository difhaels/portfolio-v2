import { useState, useEffect } from "react";

export default function ScrollTracker() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed left-0 top-0 z-50">
            <p>Posisi Scroll Saat Ini: {scrollPosition}px</p>          
        </div>
    );
}