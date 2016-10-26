import React from 'react'
import { Provider } from 'react-redux'
import { reducer, initStore, startClock } from '../store'
import Link from 'next/link'
import Clock from '../components/Clock'
import Explanation from '../components/Explanation'
import css from 'next/css'


export default class Counter extends React.Component {
	static getInitialProps ({ req }) {
		const isServer = !!req
		const store = initStore(reducer, null, isServer)
		store.dispatch({ type: 'TICK' })
		return  { initialState: store.getState(), isServer }
	}

	constructor (props) {
		super(props)
		this.store = initStore(reducer, props.initialState, props.isServer)
	}

	componentDidMount () {
		this.timer = this.store.dispatch(startClock())
	}

	componentWillUnmount () {
		clearInterval(this.timer)
	}

	render () {
		return (
			<Provider store={this.store}>
				<div className={main}>
					<Explanation />
					<Clock />
					<div>Click <Link href="/whatever"><a>here</a></Link> for some cow nonsense.</div>
				</div>
			</Provider>
		)
	}
}

const main = css({
	background: 'teal',
	width: '100%',
	display: 'flex',
	height: '100vh',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	textAlign: 'center'
})

