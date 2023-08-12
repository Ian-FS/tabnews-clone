// import ImageNossa from "./ImagemNossa";
import { ImagemNossa } from "../public/images/fotoNossa.png";

function Home() {
  return (
    <div style={{ backgroundImage: "url(${ImageNossa})" }}>
      <h1>Oi, neném! Se você me ama, me dá um beijinho? kkkkkkk</h1>
      <img src="/images/fotoNossa.png" alt="foto nossa" />
    </div>
  );
}
export default Home;
