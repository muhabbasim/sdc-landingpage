import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Challenge from '../../components/dark/project2/Challenge';
import Header from '../../components/dark/project2/Header';
import Next from '../../components/dark/project2/Next';
import { useLocation } from 'react-router-dom';
import { sports } from '../../data/sports';
import NavTop from '../../components/dark/landing-preview/NavTop';
import Footer from '../../components/dark/blog-list/Footer';

export default function Project2() {
  const itemId = useLocation()?.pathname?.split('/')[3]
  const sport = sports?.find((item) => (item.id).toString() === itemId )

  return (
    <>
      <Helmet>
        <title>SDC</title>
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
        <NavTop />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg">
              <Header {...sport}/>
              <Challenge {...sport}/>
              <Next {...sport}/>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
