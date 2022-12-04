import { Layout } from "../components";
import "./styles/globals.css";
const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
};

export default App;
