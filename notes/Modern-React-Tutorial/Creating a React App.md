- Prerequisities
	- Install `node` (which installs `npm`)
	- Perhaps install `yarn`
- Use the utility `create-react-app`
	- Either `npx create-react-app <project_name>`
	- Or `yarn create react-app <project_name>`
- Directory structure created by `create-react-app`
	- `node_modules` 
		- Project dependencies
		- Must exist for project to start
			- If accidentally deleted, executing `yarn run start` will fail
				- Message will hint at error
		- If we download project from source control, we must
			- Run `npm install` in project root directory
	- `public`
		- Files served by web server to browser
		- Most important `index.html`
			- Code injected 
				- Into `div` element 
				- With `id` of "root"
	- `src`
		- "99%" of our code / changes go here
		- Key file `App.js`
		- `index.js` "kick starts" our application
		- We will delete generated `.test.js` files (not needed for tutorials)
		- If using `yarn`, execute `yarn run start` to start application in browser
- Note that the server serving the app is a **live reload server**
	- This means that (many) changes to our code
	- Will be reflected in the browser **without** restarting the server
- 