import Login from "./components/Common/Login/Login";
import {
	Navigate,
	Route,
	Routes,
	useRoutes
} from "react-router-dom";
import Enquires from "./pages/Seller/Enquires";
import Bidding from "./pages/Buyer/Bidding";
import SellerPage from "./pages/MainPage/SellerOnBoard/SellerPage";
import Prodcut from "./pages/CommonPages/Prodcut";
import Home from "./pages/CommonPages/Home";
import Sellerorderhistory from "./pages/Seller/Sellerorderhistory";
import Orderhistory from "./pages/Buyer/Orderhistory";
import CompanyDescription from "./pages/CommonPages/Company_description";
import Navbar from "./components/Navbar";
import Track from "./pages/Buyer/Track";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallproduct } from "./actions/ProductActions";
import Activerfq from "./components/Admin/RFQ/Activerfq.js";
import AccepetedRfq from "./components/Admin/RFQ/AccepetedRfq.js"
import RfqContent from "./components/Admin/RFQ/RfqContent";
import { autologin } from "./actions/BuyerActions";
import Rfq from "./components/Rfq";
import SendRfq from "./components/SendRfq";
import ComponentPage from "./components/Component";
import Create from "./components/Create";
import Profile from "./pages/CommonPages/Profile";
import LandingPage from "./pages/CommonPages/LandingPage";
import AllProducts from "./pages/CommonPages/AllProducts";
import Protected from "./ProtectedRoutes/Protected";
import NoPage from "./error/NoPage";
import AddCompany from "./pages/Admin/AddCompany";
import AddProduct from "./pages/Admin/AddProduct";
import OrderList from "./pages/Admin/OrderList";
import BuyerLIst from "./pages/Admin/BuyerLIst";
import SellerList from "./pages/Admin/SellerList";
import ProdReq from "./pages/Admin/ProdReq";
import SellerReq from "./pages/Admin/SellerReq";
import Payment from "./components/Buyer/Payment/Payment";
import BuyerOrderPage from "./pages/CommonPages/BuyerOrderPage";
import Logout from "./Logout";



function App() {


	const { user, isAuthenticated } = useSelector(state => state.user)
	const dispatch = useDispatch()

	const Nav = () =>
		useRoutes([
			{ path: "/home", element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: "/dashboard", element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: "/bidding", element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: "/enqires", element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: '/sellerorder', element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: '/buyerorder', element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: '/trackshipment', element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: '/activerfq', element: <Navbar role='admin' /> },
			{ path: '/rfq', element: <Navbar role='admin' /> },
			{ path: '/arfq', element: <Navbar role='admin' /> },
			{ path: '/order/:id', element: <Navbar role='admin' /> },
			{ path: '/sendRfq', element: <Navbar role='admin' /> },
			{ path: '/component', element: <Navbar role='admin' /> },
			{ path: '/payment', element: <Navbar role={user.role ? user.role : "buyer"} /> },
			{ path: '/:role/profile/:id', element: <Navbar role={user.role && user.role} /> },
			{ path: '/products', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/addcompany', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/addproduct', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/orderlist', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/buyerlist', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/sellerlist', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/prodreq', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/sellerreq', element: <Navbar role={user ? user.role : ''} /> },
			{ path: '/buyerorderpage', element: <Navbar role={user ? user.role : ''} /> },








		]);

	useEffect(() => {

		dispatch(getallproduct)
		dispatch(autologin())

		// if(!isAuthenticated){
		//    navigate('/login')
		// }

		console.log(user)
	}, [dispatch])

	return (


		<div className="App relative flex">
			{
				isAuthenticated && <Nav role={user && user.role} />
			}

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>


			<Routes>

				<Route path="/login" element={
					<Login />
				}></Route>

			</Routes>

			<Routes>

				<Route path="/dashboard" element={<Protected isAuthenticated={isAuthenticated}> <Home /> </Protected>}></Route>
				<Route path="/prod/:id" element={
					<Protected isAuthenticated={isAuthenticated}>
						<Prodcut />
					</Protected>
				}></Route>
				<Route path="/enqires" element={<Protected isAuthenticated={isAuthenticated}><Enquires /></Protected>}></Route>
				<Route path="/bidding"
					element={
						<Protected isAuthenticated={isAuthenticated}>
							<Bidding />
						</Protected>
					}>
				</Route>
				<Route path="/onboard" element={<SellerPage />}></Route>
				<Route path="/sellerorder" element={<Sellerorderhistory />}></Route>
				<Route path="/buyerorder" element={
					<Protected isAuthenticated={isAuthenticated}>
						<Orderhistory />
					</Protected>
				}></Route>
				<Route path="/cd" element={<CompanyDescription />}></Route>
				<Route path="/trackshipment" element={<Track />}></Route>
				<Route path="/activerfq" element={
					<Protected isAuthenticated={isAuthenticated}>
						<Activerfq />
					</Protected>
				}></Route>
				<Route path="/rfq" element={
					<Protected isAuthenticated={isAuthenticated}>
						<RfqContent />
					</Protected>
				}></Route>
				<Route path="/arfq" element={
					<Protected isAuthenticated={isAuthenticated}>
						<AccepetedRfq />
					</Protected>
				}></Route>
				<Route path="/order/:id" element={
					<Protected isAuthenticated={isAuthenticated}>
						<Rfq />
					</Protected>
				}></Route>
				<Route path="/sendRfq" element={
					<Protected isAuthenticated={isAuthenticated}>
						<SendRfq />
					</Protected>
				}></Route>
				<Route path="/payment" element={<Payment />}></Route>
				<Route path="/component" element={<ComponentPage />}></Route>
				<Route path="/create" element={<Create />}></Route>
				<Route path="/:role/profile/:id" element={<Profile />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/products" element={<AllProducts />}></Route>
				<Route path="/addcompany" element={<AddCompany />}></Route>
				<Route path="/addproduct" element={<AddProduct />}></Route>
				<Route path="/orderlist" element={<OrderList />}></Route>
				<Route path="/buyerlist" element={<BuyerLIst />}></Route>
				<Route path="/sellerlist" element={<SellerList />}></Route>
				<Route path="/prodreq" element={<ProdReq />}></Route>
				<Route path="/sellerreq" element={<SellerReq />}></Route>
				<Route path="/buyerorderpage" element={<BuyerOrderPage />}></Route>
				<Route path="/home" element={<Home/>}></Route>
				
				




			</Routes>
		</div>

	);
}

export default App;
