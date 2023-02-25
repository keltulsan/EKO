/* #region imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from './pages/Us/AboutUs';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Home from "./pages/Home";
import Error404 from "./pages/Error/404";
import SignUpPage from "./pages/Inform-user/SignUp";
import LoginPage from "./pages/Inform-user/Login";
import { CGU } from "./pages/Condition-generale/CGU";
import { CGV } from "./pages/Condition-generale/CGV";
import { CGR } from "./pages/Condition-generale/CGR";
import { ML } from "./pages/Condition-generale/ML";
import { ContactDetails } from "./pages/Inform-user/ContactDetails";
import { EkoSave } from './pages/EKO-Save';
import { PayComplete } from './pages/Payment/Pay-Complete';
import { ContactUs } from './pages/Us/Contact-Us';
import { ThxEmail } from './pages/Us/Thx-Email';
import Actus from './pages/Us/Actus';
import PayChoice from './pages/Payment/PaymentChoice';
import { Stocks } from './pages/Admin/Stocks';
import { Sells } from './pages/Admin/Sells';
import { EnvyList } from './pages/Article/Envy-list';
import { History } from './pages/Inform-user/History';
import ChatBox from './pages/Chat-box';
import { Bag } from './pages/Inform-user/Bag';
import { Articles } from './pages/Article/Articles';
import { UserPage } from './pages/Inform-user/UserPage';
import { EnterprisePage } from './pages/Inform-user/EnterprisePage';
import Background from './components/background';
import { ArticleClotheSell } from './pages/Article/Article-clothe-sell';
import { ArticleSell } from './pages/Article/Article-sell';
import { FAQ } from './pages/Us/Faq';
import { ReactSession } from 'react-client-session';
import { Toast_ } from './components/toast/toast';
import { useState } from 'react';
import { Cookies } from './components/cookies';
import { PanelAdmin } from "./components/admin/panel";
import { UserListAdmin } from "./components/admin/userList";
import { BusinessListAdmin } from "./components/admin/businessList";
import { FaqListAdmin } from "./components/admin/faqlist";
import { ConditionListAdmin } from "./components/admin/conditionlist";
import { NewsListAdmin } from "./components/admin/newslist";
import { ProductListAdmin } from "./components/admin/productlist";
import { Product } from './pages/Article/Product';
import { Buy } from "./components/shopping/Buy";
import { ProductInsertAdmin } from './components/admin/productInfoInsert';
import { ProductQuantitytAdmin } from './components/admin/productQuantityInfo';
import { Categorie } from './pages/category';


export function links() {
  return {
    homeFull: '/home',
    home: '/',
    ekoSave: '/eko-save',
    chatBot: '/chat-bot',
    login: '/login',
    signup: '/signup',
    userPage: '/account-user',
    enterprisePage: '/account-enterprise',
    contactDetails: '/account',
    bag: '/bag',
    history: '/history',
    articles: '/articles',
    clotheSell: '/clothe-sell',
    product: '/product/:label',
    itemSell: "/page/:product_name",
    likes: '/likes-list',
    catégories: '/categories',
    paymentComplete: '/payed',
    payChoice: '/payment-choice',
    stocks: '/stocks',
    sells: '/sells',
    cgu: '/general-conditions-of-use',
    cgv: '/general-conditions-of-sell',
    cgr: '/general-conditions-of-retractation',
    ml: '/legal-metions',
    aboutUs: '/about-us',
    thxEmail: '/thanks-for-email',
    contact: '/contact',
    faq: '/faq',
    actus: '/actus',
    buy: '/buy',
    err404: '*'
  }
}

export function App(props) {
  ReactSession.setStoreType("cookie");
  const [ids, setIds] = useState([]);
  const [quantityList, setquantityList] = useState([]);
  const [show, setShow] = useState(false);
  const [alerts, setAlerts] = useState();
  const [price, setPrice] = useState();
  const [colors, setColors] = useState();
  const [showModalProduct, setShowModalProduct] = useState(false);
  const [showModalProductInsert, setShowModalProductInsert] = useState(false);
  const [showModalProductQuantity,setShowModalProductQuantity]=useState(false);
  const [showModalNews, setShowModalNews] = useState(false);
  const [showModalCondition, setShowModalCondition] = useState(false);
  const [showModalFaq, setShowModalFaq] = useState(false);
  const [showModalBusiness, setShowModalBusiness] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShowModalBusiness = () => setShowModalBusiness(true);
  const handleCloseModalBusiness = () => setShowModalBusiness(false);
  const handleShowModalUser = () => setShowModalUser(true);
  const handleCloseModalUser = () => setShowModalUser(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleShowModalProduct = () => setShowModalProduct(true);
  const handleCloseModalProduct = () => setShowModalProduct(false);
  const handleShowModalProductInsert = () => setShowModalProductInsert(true);
  const handleCloseModalProductInsert = () => setShowModalProductInsert(false);
  const handleShowModalProductQuantity = () => setShowModalProductQuantity(true);
  const handleCloseModalProductQuantity = () => setShowModalProductQuantity(false);
  const handleShowModalNews = () => setShowModalNews(true);
  const handleCloseModalNews = () => setShowModalNews(false);
  const handleShowModalCondition = () => setShowModalCondition(true);
  const handleCloseModalCondition = () => setShowModalCondition(false);
  const handleCloseModalFaq = () => setShowModalFaq(false);
  const handleShowModalFaq = () => setShowModalFaq(true);
  const link = links()

  /* #endregion */

  return <>
    {/* <Background />  */}
    <Cookies />
    <Router>
      <Header setColors={setColors} setShow={setShow} setAlerts={setAlerts} handleShowModal={handleShowModal} />
      <PanelAdmin handleShowModalUser={handleShowModalUser} handleShowModalBusiness={handleShowModalBusiness} handleShowModalNews={handleShowModalNews} handleShowModalCondition={handleShowModalCondition} handleShowModalFaq={handleShowModalFaq} handleShowModalProduct={handleShowModalProduct} handleShowModalProductInsert={handleShowModalProductInsert} handleShowModalProductQuantity={handleShowModalProductQuantity} showModal={showModal} handleCloseModal={handleCloseModal} />
      <BusinessListAdmin showModalBusiness={showModalBusiness} handleCloseModalBusiness={handleCloseModalBusiness} />
      <UserListAdmin showModalUser={showModalUser} handleCloseModalUser={handleCloseModalUser} />
      <FaqListAdmin showModalFaq={showModalFaq} handleCloseModaFaq={handleCloseModalFaq} />
      <ConditionListAdmin showModalCondition={showModalCondition} handleCloseModalCondition={handleCloseModalCondition} />
      <NewsListAdmin showModalNews={showModalNews} handleCloseModalNews={handleCloseModalNews} />
      <ProductListAdmin showModalProduct={showModalProduct} handleCloseModalProduct={handleCloseModalProduct} />
      <ProductInsertAdmin showModalProductInsert={showModalProductInsert} handleCloseModalProductInsert={handleCloseModalProductInsert} />
      <ProductQuantitytAdmin showModalProductQuantity={showModalProductQuantity} handleCloseModalProductQuantity={handleCloseModalProductQuantity}/>
      <Toast_ show={show} setShow={setShow} colors={colors} alerts={alerts} />
      <div className="root flex space-between vertical">
        <div></div>

        <Switch>

          <Route exact path={link.homeFull} component={Home} />
          <Route exact path={link.home} component={Home} />

          <Route exact path={link.ekoSave} component={EkoSave} />

          <Route exact path={link.chatBot} component={ChatBox} />


          {/* Inform user */}

          <Route exact path={link.login}>
            <LoginPage setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
          </Route>
          <Route exact path={link.signup}>
            <SignUpPage setAlerts={setAlerts} setShow={setShow} setColors={setColors} />
          </Route>
          <Route exact path={link.userPage}>
            <UserPage setAlerts={setAlerts} setColors={setColors} setShow={setShow} />
          </Route>
          <Route exact path={link.enterprisePage} >
            <EnterprisePage setAlerts={setAlerts} setColors={setColors} />
          </Route>
          <Route exact path={link.contactDetails}>
            <ContactDetails />
          </Route>
          <Route exact path={link.bag}>
            <Bag setquantityList={setquantityList} setIds={setIds} setPrice={setPrice} />
          </Route>
          <Route exact path={link.history} component={History} />

          {/* Article */}

          <Route exact path={link.articles} component={Articles} />
          <Route exact path={link.clotheSell} component={ArticleClotheSell} />
          <Route exact path={link.itemSell} component={ArticleSell} />
          <Route exact path={link.likes} component={EnvyList} />
          <Route exact path={link.product} component={Product} />
          <Route exact path={link.catégories} component={Categorie} />

          {/* Payment */}
          <Route exact path={link.buy}>
            <Buy setAlerts={setAlerts} setColors={setColors} setShow={setShow} quantityList={quantityList} price={price} ids={ids} />
          </Route>
          <Route exact path={link.paymentComplete} component={PayComplete} />
          <Route exact path={link.payChoice} component={PayChoice} />

          {/* Admin */}

          <Route exact path={link.stocks} component={Stocks}>
            <Stocks handleShowModalProductQuantity={handleShowModalProductQuantity}/>
          </Route>
          <Route exact path={link.sells} >
            <Sells handleShowModalProduct={handleShowModalProduct} handleShowModalProductInsert={handleShowModalProductInsert} />
          </Route>


          {/* Condition générale */}

          <Route exact path={link.cgu} component={CGU} />
          <Route exact path={link.cgv} component={CGV} />
          <Route exact path={link.cgr} component={CGR} />
          <Route exact path={link.ml} component={ML} />

          {/* Us */}

          <Route exact path={link.aboutUs} component={AboutUs} />
          <Route exact path={link.thxEmail} component={ThxEmail} />
          <Route exact path={link.contact} component={ContactUs} />
          <Route exact path={link.faq} component={FAQ} />
          <Route exact path={link.actus} component={Actus} />

          {/* Error */}

          <Route exact path={link.err404} component={Error404} />

        </Switch>

        <div></div>
      </div>
      <Footer />
    </Router>
  </>
}