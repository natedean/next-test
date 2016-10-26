import React from 'react'

import { style } from 'next/css'

export default () => {
	return (
		<div className={styles}>
			<h1>Isomorphic React/Redux</h1>
			<h3>Hotreloading | Yarn | ES6 Modules</h3>
			<h5>P.S. That clock down there is running from a redux store.</h5>
		</div>
	)
}

const styles = style({
	color: '#fff',
	font: '14px menlo, monaco, monospace',
	marginBottom: '1em'
})