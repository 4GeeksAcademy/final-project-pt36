const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}, 
			],
			auth_token: "",

			user: []




		},
		actions: {
			// Use getActions to call a function within a fuction

			login: async ({email, password, navigate}) => {
				try {
					const response = await fetch(
					  "https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/login",
					  {
						method: "POST",
						headers: {
						  "Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							password: password
						}),
					  }
					);
					if (response.ok){
						const data = await response.json()
						setStore({auth_token: data.auth_token});
						navigate("/dashboard")
						return true
					}
				  } catch (error) {
					console.log(error);
				  };
			
			},

			getUser: async()=>{
				try{
					const response = await fetch("https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/dashboard", {
						headers: {Authorization:  `Bearer ${store.auth_token}`}
					  });
					if (response.ok){
						const data = await response.json();
						setStore({user: data.user})
					}
				}
				catch(error){
					console.log(error)
				}
			},

	








			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				token: 

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
