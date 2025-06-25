import ReactWOW from "react-wow"
import { useSelector } from 'react-redux';

const PartnerV1 = () => {
    // Get videos from Redux store
    const videoEmbeds = useSelector(state => state.coachProfile.videoEmbedUrls);
    // Get custom videos from Redux store
    const customVideos = useSelector(state => state.coachProfile.customvideo);
    
    // Function to parse iframe embed code and extract video information
    const parseYouTubeEmbed = (embedCode) => {
        if (!embedCode) return { id: '', title: '' };
        
        try {
            // Extract src attribute
            const srcMatch = embedCode.match(/src=["']([^"']+)["']/i);
            const srcUrl = srcMatch ? srcMatch[1] : '';
            
            // Extract video ID from src URL
            const idMatch = srcUrl.match(/\/embed\/([^/?&]+)/i);
            const videoId = idMatch ? idMatch[1] : '';
            
            // Extract title attribute
            const titleMatch = embedCode.match(/title=["']([^"']+)["']/i);
            const videoTitle = titleMatch ? titleMatch[1] : 'YouTube Video';
            
            return { id: videoId, title: videoTitle };
        } catch (error) {
            console.error("Error parsing YouTube embed:", error);
            return { id: '', title: 'YouTube Video' };
        }
    };
    
    // Process videos from Redux store
    const videos = videoEmbeds.map((embedItem, index) => {
        // Get the iframe HTML from the yturl property
        const embedCode = embedItem.yturl || '';
        
        // Parse the embed code
        return parseYouTubeEmbed(embedCode);
    }).filter(video => video.id); // Only keep videos with valid IDs

    // Calculate column size based on total number of videos (YouTube + custom)
    const totalVideos = (videos ? videos.length : 0) + (customVideos ? customVideos.length : 0);
    const getColumnClass = () => {
        if (totalVideos === 1) return "col-lg-8 col-md-10";
        return "col-lg-6 col-md-6";
    };

    return (
        <>
            <div id="video" className="partner-style-one-area text-center default-padding bottom-less overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Videos</h4>
                                <h2 className="title">Unleash Everything In Videos</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* YouTube Videos */}
                        {videos && videos.length > 0 && (
                            videos.map((video, index) => (
                                <div 
                                    key={`yt-${index}`} 
                                    className={getColumnClass()}
                                    style={{ marginBottom: "30px" }}
                                >
                                    <div className="video-container" style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        width: '100%',
                                        paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        <iframe 
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Custom Videos */}
                        {customVideos && customVideos.length > 0 && (
                            customVideos.map((customVideo, index) => (
                                <div 
                                    key={`custom-${index}`} 
                                    className={getColumnClass()}
                                    style={{ marginBottom: "30px" }}
                                >
                                    <div className="video-container" style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        width: '100%',
                                        paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        <video 
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                            src={customVideo.video}
                                            controls
                                            preload="metadata"
                                        />
                                    </div>
                                </div>
                            ))
                        )}

                        {/* No videos message */}
                        {(!videos || videos.length === 0) && (!customVideos || customVideos.length === 0) && (
                            <div className="col-12 text-center">
                                <p>No videos available</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV1;
