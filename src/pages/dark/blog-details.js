import { Helmet } from 'react-helmet';
import Blog from '../../components/dark/blog-details/Blog';
import Slider from '../../components/dark/blog-details/Slider';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import { useLocation } from 'react-router-dom';
import { sportsBlog } from '../../data/blogSportData';
import Footer from '../../components/dark/blog-list/Footer';
export default function BlogDetails() {

  const blogId = useLocation().pathname.split('/')[3];
  const blogDetails = sportsBlog.find((el) => (el.id).toString() === blogId)

  return (
    <>
      <Helmet>
        <title>SDC Blog Details</title>
        <link rel="icon" href="/images/SDCLogo.svg" />
        <link rel="shortcut icon" href="/images/SDCLogo.svg" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />

        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Slider {...blogDetails}/>
              <Blog {...blogDetails}/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
