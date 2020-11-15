const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: `https://goodreads-server-express--dotdash.repl.co/search/`,
			data: null
		},
		actions: {
			loadSomeData: async term => {
				const store = getStore();
				const resp = await fetch(`${store.apiUrl}${term}`);
				if (resp.status === 200) {
					const searchResponse = await resp.json();
					setStore({ data: searchResponse });
				} else if (resp.status >= 400 && resp.status < 500) {
					const e = await resp.json();
					throw new Error(e.message || e.msg || e);
				} else throw new Error("Request error");
			}
		}
	};
};

export default getState;
