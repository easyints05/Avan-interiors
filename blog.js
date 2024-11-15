import "./blog.css";
import latestNews from "../images/articles/blogLatest.jpg";
import article1 from "../images/articles/article1.jpg";
import article2 from "../images/articles/article2.jpg";
import article3 from "../images/articles/article3.jpg";
import article4 from "../images/articles/article4.jpeg";
import article5 from "../images/articles/article5.jpeg";
import article6 from "../images/articles/article6.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notaken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
      e.target.classList.remove("notaken");
      e.target.classList.add("taken");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
    }
  };
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>
          Articles & News<p>Home / Blog</p>
        </h1>
      </div>

      <div className="latestNews">
        <h1>Latest Post</h1>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news"></img>
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h1>Low Cost Latest Invented Interior Designing Ideas</h1>
              <p>
              Give old furniture a new lease on life by repurposing or refinishing them.
              Sanding, painting, or adding new upholstery can create unique pieces that add character to your interiors.
                <br />
                <br />
              </p>
            </div>
            <div className="ln-detail">
              <p className="ac-date">3 March 2023</p>
              <Link to={`/blog-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1>Articles & News</h1>
        <div className="blog-art-list">
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article2} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>"Trending Interior Styles: A Look into Modern and Minimalist Spaces"</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article3} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>"Before and After: Transforming Small Spaces into Luxurious Living Areas"</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article4} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p> "Expert Tips: How to Choose the Perfect Color Palette for Your Space"</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article5} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>"Eco-Friendly Interior Designs: Sustainable Choices for Modern Homes"</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article6} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>"Seasonal Décor Ideas: Fresh Looks for Every Time of the Year"</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
