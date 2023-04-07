import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MarketplaceLookFeelLi from "./pages/MarketplaceLookFeelLi";
import CompareLookFeel3 from "./pages/CompareLookFeel3";
import CompareLookFeel2 from "./pages/CompareLookFeel2";
import CompareLookFeel1 from "./pages/CompareLookFeel1";
import MarketplaceLookFeel3 from "./pages/MarketplaceLookFeel3";
import FundDetailLookFeel01 from "./pages/FundDetailLookFeel01";
import MarketplaceLookFeel2 from "./pages/MarketplaceLookFeel2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/compare-look-feel-3":
        title = "";
        metaDescription = "";
        break;
      case "/compare-look-feel-2":
        title = "";
        metaDescription = "";
        break;
      case "/compare-look-feel-1":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace-look-feel-3":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-look-feel-01":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace-look-feel-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/1" element={<MarketplaceLookFeelLi />} />
      <Route path="/6" element={<CompareLookFeel3 />} />
      <Route path="/5" element={<CompareLookFeel2 />} />
      <Route path="/4" element={<CompareLookFeel1 />} />
      <Route
        path="/3"
        element={<MarketplaceLookFeel3 />}
      />
      <Route
        path="/2"
        element={<FundDetailLookFeel01 />}
      />
      <Route
        path="/"
        element={<MarketplaceLookFeel2 />}
      />
    </Routes>
  );
}
export default App;
