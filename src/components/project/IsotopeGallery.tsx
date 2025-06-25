import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { Link } from "react-router-dom"; // Link is imported but not used in the provided snippet
import { useSelector } from 'react-redux';

const IsotopeGallery = () => {
    // Get all images from the gallery array in the Redux store
    const gallery = useSelector((state) => state.coachProfile.gallery) || [];

    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = gallery.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // Initialize Isotope only when all images are loaded and there are images to display
        if (loadedImagesCount === totalImages && galleryRef.current && totalImages > 0) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.gallery-item'
                }
            });

            // Re-layout when the container size changes
            const resizeObserver = new ResizeObserver(() => {
                iso.layout();
            });

            if (galleryRef.current) {
                resizeObserver.observe(galleryRef.current);
            }

            // Cleanup function to destroy Isotope and disconnect observer
            return () => {
                iso.destroy();
                resizeObserver.disconnect();
            };
        }
    }, [loadedImagesCount, totalImages]); // Dependencies for useEffect

    return (
        <div id="gallery-masonary" className="gallery-items colums-3" ref={galleryRef}>
            {/* Map through all images in the gallery array */}
            {gallery.map((imageUrl, index) => (
                <div className="gallery-item" key={index}>
                    <div className="gallery-style-one">
                        <img
                            src={imageUrl}
                            alt={`Gallery item ${index + 1}`} // Alt text adjusted to start from 1
                            onLoad={handleImageLoad}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className="info">
                            <div className="overlay">
                                <div className="content">
                                    <ul className="pf-tags">
                                        {/* Tags can be added here if needed */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IsotopeGallery;