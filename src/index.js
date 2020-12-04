import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CartProvider, useCart } from 'react-use-cart';

const client = new ApolloClient({
	uri: 'https://pangaea-interviews.now.sh/api/graphql',
	cache: new InMemoryCache()
});

ReactDOM.render(
	<React.StrictMode>
		<CartProvider
			id="jamie"
			onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
			onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
			onItemRemove={() => console.log(`Item removed!`)}
		>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</CartProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
