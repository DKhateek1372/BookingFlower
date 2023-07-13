import { Slideshow } from "../components/explore/slideShow";
import Navbar from "../components/navbarSection/navbar";
import SearchBox from "../components/searchBox/searchBox";
import Flights from "../assest/flights";

function flights() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <Slideshow
        image={Flights}
        no={4}
        tag="Popular flights near you"
        subTag="Find deals on domestic and international flights"
      />
      <br />
      <Slideshow
        image={Flights}
        no={4}
        tag="Trending cities"
        subTag="Book flights to a destination popular with travelers from India"
      />
    </div>
  );
}

export default flights;
