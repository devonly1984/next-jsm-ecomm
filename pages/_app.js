import "./styles/globals.css";

import { Layout } from "../components";
import { StoreContext } from "../context/StoreContext";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
	return (
		<StoreContext>
			<Layout>
				<Toaster />
				<Component {...pageProps} />;
			</Layout>
		</StoreContext>
	);
};

export default App;
