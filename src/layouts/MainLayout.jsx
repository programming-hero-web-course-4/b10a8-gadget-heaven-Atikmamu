import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
           
            <div className="min-h-screen"> {/* Dynamic Section */}</div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;