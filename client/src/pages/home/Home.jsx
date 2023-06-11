import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailLIst/MailList";
import Navbar from "../../Components/navbar/Navbar";
import PropertyList from "../../Components/proertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home_container">
        <Featured />
        <h1 className="home_title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home_title">Homes guests love</h1>
        <FeaturedProperties />
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
