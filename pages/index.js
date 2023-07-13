import BgComponent from "../components/backgroundImg/bgComponent";
import { Slideshow } from "../components/explore/slideShow";
import SearchBox from "../components/searchBox/searchBox";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Nextrip } from "../components/explore/nextTrip";
import ConnectWithtravellers from "../components/explore/connectTravellers";
import Navbar from "../components/navbarSection/navbar";
import Cities from "../assest/cities";
import Properties from "../assest/properties";
import Travel from "../assest/travel";
import Promotions from "../assest/promotions";

function Stay() {

  return (
    <>
      <Navbar />

      <BgComponent
        heading="The joy of home anywhere in the world"
        subHeading="Easy booking, easy living"
      />
      <SearchBox />
      <Box
        display={"flex"}
        width={"88%"}
        height={"auto"}
        margin={"auto"}
        marginTop={"30px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Image
          //   width={"15%"}
          width={{
            base: "45%",
            sm: "40%",
            md: "25%",
            lg: "20%",
            xl: "20%",
            "2xl": "30%",
          }}
          height={"150px"}
          src={
            "https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          }
        />
        <Box textAlign={"start"} marginLeft={"10px"} marginTop={"20px"}>
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            Save 15% or more{" "}
          </Text>
          <Text
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            This summer, make your dream trip a reality. Book and stay for less
            before 30 Sep 2022
          </Text>
          <Button
            width={{
              base: "45%",
              sm: "40%",
              md: "25%",
              lg: "20%",
              xl: "20%",
              "2xl": "30%",
            }}
            fontSize={{
              base: "9px",
              sm: "10px",
              md: "15px",
              lg: "15px",
              xl: "20px",
              "2xl": "20px",
            }}
            marginTop={"10px"}
            marginBottom={"10px"}
            colorScheme="blue"
          >
            Explore deals
          </Button>
        </Box>
      </Box>
      <br />
      {/* Explore India Slider */}

      <Slideshow
        image={Cities}
        no={6}
        tag="Explore India"
        subTag="These popular destinations have a lot to offer"
      />

      {/* grid section  */}
      <br />
      <Box width={"88%"} margin={"auto"} marginTop={"20px"}>
        <Box
          height={"260px"}
          width={"100%"}
          display={"flex"}
          // justifyContent="space-evenly"
          marginBottom={"10px"}
          // border="4px solid red"
          gap="7px"
        >
          <Box
            display={"flex"}
            width={"50%"}
            height={"auto"}
            // border="2px solid black"
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
            // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["12px", "15px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                New Delhi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>

          <Box
            //  border="2px solid black"
            width={"50%"}
            height={"100%"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684499.webp?k=05c9fc4396edfc04f1e0f3d00ffbe182ebd969c9d83857a8e10a4e046fae21cd&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
            // border="2px solid pink"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} display={"flex"} gap="10px">
          <Box
            display={"flex"}
            width={"33%"}
            height={"260px"}
            background-position={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684655.webp?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
            // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684939.webp?k=125d0a8cab106ebfe2b99eafa9ea548ab13b5846a4034bbe35387accfbd94240&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              // border="2px solid green"
              marginTop={"10px"}
            >
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Varanasi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
            // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Mumbai
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      {/*Browse by property type section*/}

      <Slideshow
        image={Properties}
        no={4}
        tag="Browse by property type"
        subTag="" 
      />

      {/* travel Arround Asia */}
      <br />
      <Slideshow
        image={Travel}
        no={4}
        tag="Travel around Asia"
        subTag="Explore more places we think you'll love"
      />
      <br />
      {/* Stay at our top unique properties */}

      <Slideshow
        image={Promotions}
        no={4}
        tag="Stay at our top unique properties"
        subTag="From castles and villas to boats and igloos, we've got it all"
      />
      <br />
      <Nextrip />
      <br />
      <br />

      <Box width={"88%"} margin="auto">
        <Text
          fontWeight={"bold"}
          fontSize={{
            base: "10px",
            sm: "14px",
            md: "19px",
            lg: "20px",
            xl: "21px",
            "2xl": "22px",
          }}
        >
          Connect with other travelers
        </Text>
        <br />
        <ConnectWithtravellers />
      </Box>
    </>
  );
}

export default Stay;

//we can use this if we want to use data from deployed server

// export const getStaticProps = async () => {
//   const res1 = await fetch(
//     "https://web-database-pravin.onrender.com/slideImages"
//   );

//   const dataSlideImage = await res1.json();

//   const res2 = await fetch("https://web-database-pravin.onrender.com/slide");

//   const dataSlide = await res2.json();

//   const res3 = await fetch("https://web-database-pravin.onrender.com/travel");

//   const dataTravel = await res3.json();

//   const res4 = await fetch("https://web-database-pravin.onrender.com/stay");

//   const dataStay = await res4.json();

//   return {
//     props: {
//       slideImages: dataSlideImage,
//       slide: dataSlide,
//       travel: dataTravel,
//       stay: dataStay,
//     },
//   };
// };
