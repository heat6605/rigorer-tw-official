import HomePage from "./app/page";
import AdminPage from "./app/admin/page";
import FaqPage from "./app/faq/page";
import FittingRequestPage from "./app/fitting-request/page";
import FontsPage from "./app/fonts/page";
import MemberPage from "./app/member/page";
import OrderSummaryPage from "./app/order-summary/page";
import OrderingProcessPage from "./app/ordering-process/page";
import ShowcasePage from "./app/showcase/page";
import StylesPage from "./app/styles/page";

const routes: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/admin": AdminPage,
  "/faq": FaqPage,
  "/fitting-request": FittingRequestPage,
  "/fonts": FontsPage,
  "/member": MemberPage,
  "/order-summary": OrderSummaryPage,
  "/ordering-process": OrderingProcessPage,
  "/showcase": ShowcasePage,
  "/styles": StylesPage,
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = routes[path] ?? HomePage;
  return <Page />;
}
