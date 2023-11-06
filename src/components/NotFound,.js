import notFound from "../images/notfound.svg"
import "./NotFound.css"

export default function NotFound() {
  return (
    <>
      <div className="container">
        <h2 className="title">ERROR : Page Not Found</h2>
        <img src={notFound} alt="notfound_img" />
      </div>
    </>
  );
}
