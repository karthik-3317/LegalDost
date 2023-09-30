import React from "react";
import "./Main.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mainbg from "../main.jpg";
import second from "../second.jpg";
import third from "../third.jpg";
import hammer from "../court-hammer.jpg";
import MainCorousal from "./MainCorousal";
import {
  BsFillCalendar2EventFill,
  BsArrowRight,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsYoutube,
} from "react-icons/bs";
import { HiUser } from "react-icons/hi";
const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <main
        style={{
          background:
            "linear-gradient(120deg, rgb(151, 171, 174), rgba(0, 0, 0, 0.3));",
        }}
      >
        {/* <section className="site-title">
          <div className="site-background">
            <h1>Legal Dosth</h1>
          </div>
        </section> */}

        <MainCorousal />
        <section>{/* <SwiperComp/> */}</section>

        <section className="home-container">
          <div className="site-content">
            <div className="posts">
              <div className="post-content" data-aos="fade-right">
                <div className="post-image">
                  <div className="post-img">
                    <img src={mainbg} className="img" alt="socc" />
                  </div>
                  <div className="post-info flex-row">
                    <span className="text-gray">
                      <HiUser />
                      &nbsp;&nbsp;Law
                    </span>
                    <span className="text-gray">
                      <BsFillCalendar2EventFill />
                      &nbsp;&nbsp; January 14 2023
                    </span>
                    <span>2 Comments</span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">
                    "Injustice anywhere is a threat to justice everywhere."{" "}
                  </a>
                  <p></p>
                  <button className="site-btn post-btn">
                    Read More &nbsp; <BsArrowRight />{" "}
                  </button>
                </div>
              </div>
              <div className="post-content" data-aos="fade-right">
                <div className="post-image">
                  <div className="post-img">
                    <img src={second} className="img" alt="socc" />
                  </div>
                  <div className="post-info flex-row">
                    <span className="text-gray">
                      <HiUser />
                      &nbsp;&nbsp;Notaries
                    </span>
                    <span className="text-gray">
                      <BsFillCalendar2EventFill />
                      &nbsp;&nbsp; January 14 2023
                    </span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">
                    "The law will never make men free, it is men that have to
                    make the law free." - Henry David Thoreau{" "}
                  </a>
                  <p>
                    ndian law is a complex and multifaceted legal system that
                    has evolved over centuries. It is primarily based on the
                    British common law system, with influences from ancient
                    Indian legal traditions. The Constitution of India, adopted
                    in 1950, serves as the supreme law of the land and provides
                    the framework for governance and the protection of
                    fundamental rights.
                  </p>
                  <button className="site-btn post-btn">
                    Read More &nbsp; <BsArrowRight />{" "}
                  </button>
                </div>
              </div>
              <div className="post-content" data-aos="fade-right">
                <div className="post-image">
                  <div className="post-img">
                    <img src={third} className="img" alt="socc" />
                  </div>
                  <div className="post-info flex-row">
                    <span className="text-gray">
                      <HiUser />
                      &nbsp;&nbsp;Justice
                    </span>
                    <span className="text-gray">
                      <BsFillCalendar2EventFill />
                      &nbsp;&nbsp; January 14 2023
                    </span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">
                    The court is like a palace of marble; it's composed of
                    people very hard and very polished." - Honore de Balzac
                  </a>
                  <p>
                    Indian law encompasses a wide range of subjects, including
                    criminal law, civil law, family law, labor law, and
                    environmental law. The judiciary in India is independent and
                    plays a crucial role in interpreting and upholding the law.
                    The country has a rich legal heritage, with renowned legal
                    scholars and jurists who have contributed significantly to
                    the development of jurisprudence.
                  </p>
                  <button className="site-btn post-btn">
                    Read More &nbsp; <BsArrowRight />{" "}
                  </button>
                </div>
              </div>
              <div className="post-content" data-aos="fade-right">
                <div className="post-image">
                  <div className="post-img">
                    <img src={hammer} className="img" alt="socc" />
                  </div>
                  <div className="post-info flex-row">
                    <span className="text-gray">
                      <HiUser />
                      &nbsp;&nbsp;Justice
                    </span>
                    <span className="text-gray">
                      <BsFillCalendar2EventFill />
                      &nbsp;&nbsp; January 14 2023
                    </span>
                    <span>2 Comments</span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">
                    It is not wisdom but authority that makes a law." - Thomas
                    Hobbes{" "}
                  </a>
                  <p>
                    Despite its complexity, Indian law seeks to balance
                    tradition and modernity, ensuring justice and fairness for
                    its diverse population of over a billion people. Legal
                    reforms and advancements continue to shape the Indian legal
                    landscape, addressing contemporary challenges while
                    preserving the core principles of justice and equality.
                  </p>
                  <button className="site-btn post-btn">
                    Read More &nbsp; <BsArrowRight />{" "}
                  </button>
                </div>
              </div>
              <div className="pagination">
                <p href="">
                  <BsFillArrowLeftCircleFill />
                </p>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <p href="">
                  <BsFillArrowRightCircleFill />
                </p>
              </div>
            </div>
            <aside className="sidebar">
              <div className="category" data-aos="fade-right">
                <h2>Sections</h2>
                <ul className="category-list">
                  <li className="list-items" data-aos="fade-down">
                    <a href="">Advocates</a>
                  </li>
                  <li className="list-items" data-aos="fade-down">
                    <a href="">Notaries</a>
                  </li>
                  <li className="list-items" data-aos="fade-down">
                    <a href="">Arbittaries</a>
                  </li>
                  <li className="list-items" data-aos="fade-down">
                    <a href="">Document Writers</a>
                  </li>
                  <li className="list-items" data-aos="fade-down">
                    <a href="">Legal Advisors</a>
                  </li>
                </ul>
              </div>
              {/* <div className="popular-post">
                <h2 style={{ marginTop: "5rem" }}>Popular Courses</h2>
                <div className="post-content" data-aos="fade-up-left">
                  <div className="poster-image">
                    <div className="poster-img">
                      <img src={Course1} className="img" alt="socc" />
                      <div className="youtubelogo">
                        <BsYoutube />
                      </div>
                    </div>
                    <div className="post-info flex-row">
                      <span className="text-gray">
                        <BsFillCalendar2EventFill />
                        &nbsp;&nbsp; January 14 2023
                      </span>
                      <span>Java Crash Course</span>
                    </div>
                  </div>
                  <div className="post-title">
                    <a href="">Java Adventure</a>
                  </div>
                </div>
                <div className="post-content" data-aos="fade-up-left">
                  <div className="poster-image">
                    <div className="poster-img">
                      <img src={Course2} className="img" alt="socc" />
                      <div className="youtubelogo">
                        <BsYoutube />
                      </div>
                    </div>
                    <div className="post-info flex-row">
                      <span className="text-gray">
                        <BsFillCalendar2EventFill />
                        &nbsp;&nbsp; January 14 2023
                      </span>
                      <span>Python Crash Course</span>
                    </div>
                  </div>
                  <div className="post-title">
                    <a href="">Python Adventure</a>
                  </div>
                </div>
                <div className="post-content" data-aos="fade-up-left">
                  <div className="poster-image">
                    <div className="poster-img">
                      <img src={Course3} className="img" alt="socc" />
                      <div className="youtubelogo">
                        <BsYoutube />
                      </div>
                    </div>
                    <div className="post-info flex-row">
                      <span className="text-gray">
                        <BsFillCalendar2EventFill />
                        &nbsp;&nbsp; January 14 2023
                      </span>
                      <span>C++ Crash Course</span>
                    </div>
                  </div>
                  <div className="post-title">
                    <a href="">C++ Adventure</a>
                  </div>
                </div>
                <div className="post-content" data-aos="fade-up-left">
                  <div className="poster-image">
                    <div className="poster-img">
                      <img src={Course4} className="img" alt="socc" />
                      <div className="youtubelogo">
                        <BsYoutube />
                      </div>
                    </div>
                    <div className="post-info flex-row">
                      <span className="text-gray">
                        <BsFillCalendar2EventFill />
                        &nbsp;&nbsp; January 14 2023
                      </span>
                      <span>JavaScript Crash Course</span>
                    </div>
                  </div>
                  <div className="post-title">
                    <a href="">Java Script Adventure</a>
                  </div>
                </div>
              </div> */}

              {/* <div className="newsletter">
                <h2>Newsletter</h2>
                <div className="form-element">
                  <input
                    type="text"
                    className="input-element"
                    placeholder="Email"
                  />
                  <button className="form-btn">Subscribe</button>
                </div>
              </div> */}

              {/* <div className="popular-tags">
                <h2>Popular Tags</h2>
                <div className="tags flex-row">
                  <span className="tag" data-aos="flip-right">
                    Software
                  </span>
                  <span className="tag" data-aos="flip-right">
                    Tecbnology
                  </span>
                  <span className="tag" data-aos="flip-right">
                    Travel
                  </span>
                  <span className="tag" data-aos="flip-right">
                    Illustration
                  </span>
                  <span className="tag" data-aos="flip-left">
                    Design
                  </span>
                  <span className="tag" data-aos="flip-left">
                    LifeStyle
                  </span>
                  <span className="tag" data-aos="flip-left">
                    Project
                  </span>
                  <span className="tag" data-aos="flip-left">
                    Coding
                  </span>
                </div>
              </div> */}
            </aside>
          </div>
        </section>
      </main>

      {/* -------x---Main Section---x---------- */}
    </>
  );
};
export default Main;
