import TextType from "../components/TextType";
import ImageSlider from "../components/ImageSlider";

const Header = () => {
  const texts = [
    "Dress Bold. Live Beautifully.",
    "Trends that Define You.",
    "New Arrivals Dropping Every Week!",
  ];
  return (
    <>
      <TextType
        text={texts}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      <ImageSlider />
    </>
  );
};

export default Header;
