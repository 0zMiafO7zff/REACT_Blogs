import home from "../images/home.svg";
export default function Home() {
  return (
    <>
      <div className="container">
        <h2 className="title">Home Website</h2>
        <img src={home} alt="home_image" />
      </div>
    </>
  );
}
