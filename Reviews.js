// Reviews.js

import React from 'react';
import './Reviews.css';

const reviewsData = {
    weddings: [
        {
            name: "John Doe",
            review: "Amazing wedding photography! Captured all the beautiful moments perfectly.",
            rating: 5
        },
        {
            name: "Jane Smith",
            review: "Very professional and the photos turned out great. Highly recommended!",
            rating: 4
        },
    ],
    prewedding: [
        {
            name: "Michael Brown",
            review: "The prewedding photos are stunning! Great work and very friendly service.",
            rating: 5
        },
    ],
    birthdays: [
        {
            name: "Sarah Wilson",
            review: "Captured my son's birthday beautifully. The photos are amazing!",
            rating: 5
        },
    ],
    collegeFest: [
        {
            name: "Chris Evans",
            review: "Great coverage of our college fest. The photos are vibrant and lively.",
            rating: 4
        },
    ],
    maternity: [
        {
            name: "Anna Lee",
            review: "Beautiful maternity shoot. Very happy with the photos!",
            rating: 5
        },
    ],
    babyShower: [
        {
            name: "Emily Clark",
            review: "Wonderful baby shower photos. Captured all the special moments.",
            rating: 5
        },
    ]
};

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>Customer Reviews</h2>
            {Object.keys(reviewsData).map((category, index) => (
                <div key={index} className="category-section">
                    <h3>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                    <div className="reviews-container">
                        {reviewsData[category].map((review, i) => (
                            <div key={i} className="review-card">
                                <h4>{review.name}</h4>
                                <p>{review.review}</p>
                                <div className="stars">
                                    {Array.from({ length: review.rating }, (_, j) => (
                                        <span key={j}>&#9733;</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reviews;
