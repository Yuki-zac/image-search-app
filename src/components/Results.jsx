import React from 'react';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Results = ({ photo }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="photo-list"
        >
            {photo.map((singleData) =>
                <div className="photo-item" key={singleData.id}>
                    <a href={singleData.links.html}>
                        {/* 画像の表示 */}
                        <LazyLoadImage
                            alt={singleData.alt_description}
                            src={singleData.urls.regular}
                            effect="blur"
                        />
                    </a>
                    {/* 写真のフッター情報 */}
                    <p className="photo-footer">
                        Photo by <a href={singleData.user.links.html}>{singleData.user.name}</a>
                    </p>
                </div>
            )}
        </Masonry>
    );
}

export default Results;
