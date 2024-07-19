
import { Link } from 'react-router-dom'; // If using React Router for navigation

export function Home() {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to Our Cat Adoption and Donation Website!</h1>
                <p className="lead">Join us in giving these adorable cats a loving home.</p>
                <hr className="my-4" />
                <img src="../imgs/catmusic.jpg" alt="Cats" className="img-fluid mb-4" />
                <p>We are dedicated to helping stray and abandoned cats find their forever homes. Your donations make it possible for us to provide shelter, food, and medical care to these wonderful animals.</p>
                <Link className="btn btn-primary btn-lg" to="/store" role="button">Visit Our Store</Link> {/* Example link to store page */}
            </div>

            <footer className="mt-5">
                <p>&copy; 2024 Powered by Monica.</p>
            </footer>
        </div>
    );
}

export default Home;
