// React-Router initializations
const BrowserRouter = window.ReactRouterDOM.BrowserRouter
const Route = window.ReactRouterDOM.Route
const Link = window.ReactRouterDOM.Link
const Prompt = window.ReactRouterDOM.Prompt
const Switch = window.ReactRouterDOM.Switch
const Redirect = window.ReactRouterDOM.Redirect
const NavLink = window.ReactRouterDOM.NavLink
const url = '/portfolio/subpages/movieDB'








// Main page controller
class Main extends React.Component {
	constructor() {
		super()
		window.cowRedux = this	// Allows state from this component to be accessed globally
		this.state = {
			selectedMovie: 0,
			APIresults: [
				{ q: '1', r: 'placeholder text 1' },
				{ q: '2', r: 'placeholder text 2' }
			]
		}
	}

	// onLoad
	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<HeaderBar />
				<div className='mainContent'>
					<Switch>
						<Route
							path={url+"/cowHomepage"}
							render={ () => <CowHomepage/> }
						/>
						// Displays a default component onLoad
						<Route path="*" render={ () => <CowHomepage/> } />
					</Switch>
				</div>
			</div>
		)
	}
}








// Page header
class HeaderBar extends React.Component {
	render() {
		return (
			<div className='headerBar'>
				<span><Link to={url+"/cowHomepage"}>Home</Link></span>
			</div>
		)
	}
}








// Components
class CowHomepage extends React.Component {
	render() {
		return (
			<div>text</div>
		)
	}
}








// ==============================================================

// Renderer
ReactDOM.render((
	<BrowserRouter>
		<Main />
	</BrowserRouter>
), reactRootDiv );