import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
    const circleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const currentRef = circleRef.current;
        const observer = new IntersectionObserver(callbackFunction, options);

        if (circleRef.current) observer.observe(circleRef.current);

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [circleRef, options])

    return [circleRef, isVisible]
}

export default GrowElementOnScroll;
