import React from 'react';
import cowsay from 'cowsay-browser';
import Rx from 'rxjs';

export default () => (
	<div>
		<pre>{ cowsay.say({ text: 'hi there! This is a cow... for no reason at all.' })}</pre>
	</div>
)

