import '../AboutContact.css';
function About() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">About Us</h2>
            <p className="lead text-center mb-5">
                Welcome to <strong>MyShop</strong> — your one-stop destination for the best products at unbeatable prices.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://imgs.search.brave.com/iVetChASpUr_akplsVfawLCvruQyL4kKFt221Hh03Gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV2dGVhbS5zcGFj/ZS9jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9XaGF0LWlzLWEt/RGV2LVRlYW0tODUw/eDQ0Ni5hdmlm"
                        alt="About us"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h4>Our Mission</h4>
                    <p>
                        Our mission is to provide high-quality products and ensure customer
                        satisfaction through innovation, transparency, and care. We believe
                        in making your shopping experience smooth and enjoyable.
                    </p>
                    <h4>Our Team</h4>
                    <p>
                        We are a passionate team of developers, designers, and dreamers
                        dedicated to bringing the best online experience to you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
