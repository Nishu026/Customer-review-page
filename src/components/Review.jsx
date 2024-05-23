import React, { useState } from 'react';


const Review = () => {
    const customers = [
        {
            img: 'https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png',
            name: 'Rosele Desoza',
            role: 'Marketing Coordinator',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit aperiam, dignissimos esse soluta, magnam totam dolore eveniet nemo ipsa minus praesentium sit distinctio animi adipisci provident? Optio inventore quod nisi nihil ullam voluptatibus. Veniam distinctio nisi et illum odit, veritatis obcaecati eaque repellat omnis, minus dicta dolor. Quibusdam nam, unde reiciendis aperiam esse dolorum.',
            rating: '★★★★★'
        },
        {
            img: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg',
            name: 'Marvin McKinney',
            role: 'Web Designer',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit aperiam, dignissimos esse soluta, magnam totam dolore eveniet nemo ipsa minus praesentium sit distinctio animi adipisci provident? Optio inventore quod nisi nihil ullam voluptatibus. Veniam distinctio nisi et illum odit, veritatis obcaecati eaque repellat omnis, minus dicta dolor. Quibusdam nam, unde reiciendis.',
            rating: '★★★★☆'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCk-RofaXdWl6QA5cKBk2p5oJkmVVdeRsVK26iewjc8oZkOAE0y5HrDIJQTt3VHssQbJ8&usqp=CAU',
            name: 'Guy Hawkins ',
            role: 'President of Sales',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit aperiam, dignissimos esse soluta, magnam totam dolore eveniet nemo ipsa minus praesentium sit distinctio animi adipisci provident? Optio inventore quod nisi nihil ullam voluptatibus. Veniam distinctio nisi et illum odit, veritatis obcaecati eaque repellat omnis, minus dicta dolor. Quibusdam nam, unde reiciendis aperiam esse dolorum.Lorem ipsum dolor sit amet consectetur',
            rating: '★★★☆☆'
        },
        {
            img: 'https://www.shutterstock.com/image-photo/happy-confident-millennial-businessman-casual-260nw-2316706565.jpg',
            name: 'Kathryn Murphy',
            role: 'Marketing Coordinator',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit aperiam, dignissimos esse soluta, magnam totam dolore eveniet nemo ipsa minus praesentium sit distinctio animi adipisci provident? Optio inventore quod nisi nihil ullam voluptatibus. Veniam distinctio nisi et illum odit, veritatis obcaecati eaque repellat omnis, minus dicta dolor. Quibusdam nam, unde',
            rating: '★★★★☆'
        },
    ];

    const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
    const [showAnimation, setShowAnimation] = useState(false);

    const handleCustomerClick = (customer) => {
        setSelectedCustomer(customer);
        setShowAnimation(true);

        // Reset the animation after the transition is complete
        setTimeout(() => {
            setShowAnimation(false);
        }, 500);
    };

    return (
        <div className='review-container'>
            <div className="customers">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className={`customer ${selectedCustomer === customer ? 'active' : ''}`}
                        onClick={() => handleCustomerClick(customer)}
                    >
                        <img className="img" src={customer.img} alt={customer.name} />
                        <div className="customer-info">
                            <p className="customer-name">{customer.name}</p>
                            <p className="customer-role">{customer.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="customers-review">
                <h1>What our Customers <span style={{ color: '#d75b51', display: 'block' }}>are saying</span></h1>
                <div className={`selected-customer ${showAnimation ? 'slide-in' : ''}`}>
                    <div className="customer-info">
                        <span style={{ backgroundColor: 'red', width: '2px', height: '40px', display: 'inline-block', position: 'absolute', top: '20%' }}></span>
                        <div className="selected-name-role">
                            <p className="customer-name">{selectedCustomer.name}</p>
                            <p className="customer-role">{selectedCustomer.role}</p>
                            <span className="ratings" style={{ position: 'absolute', right: '0', top: '60px', color: '#d75b51' }}>{selectedCustomer.rating}</span>
                        </div>
                        <p className="customer-review">{selectedCustomer.review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
