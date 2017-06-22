import React, { Component } from 'react';
import { Animated, Easing, Dimensions, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as appActions from '../store/action/app';

type Props = {
	initialProgress?: number,
	backgroundColor?: string,
	shadowColor?: string,
	progress?: number,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
		progress: app.loadingProgress,
		done: app.routeLoaded,
	};
})

export default class ProgressBar extends Component {
	props: Props;

	static defaultProps = {
		initialProgress: 0,
		backgroundColor: '#249ade',
		shadowColor: '#ffffff',
	};

	componentDidMount() {
		this.interval = setInterval(this.optimisticTick, 20);
	}

	componentWillUnmount() {
		this.interval = clearInterval(this.interval);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.progress < 1) {
			this.interval && clearInterval(this.interval);
			this.interval = setInterval(this.optimisticTick, 20);
		}
	}

	render() {
		const classes = this.props.progress >= 1 ? 'progress-bar done' : 'progress-bar',
			progressStyle = {
				width: `${this.props.progress * 100}%`,
				backgroundColor: this.props.backgroundColor,
				shadowColor: this.props.shadowColor,
			};

		return <View className={classes} style={[styles.container, progressStyle]}/>;
	}

	optimisticTick = () => {
		const currentProgress = this.props.progress;
		let nextProgress = currentProgress;

		if (currentProgress >= 0 && currentProgress < 0.2) { nextProgress += 0.01; }
		else if (currentProgress >= 0.2 && currentProgress < 0.5) { nextProgress += 0.004; }
		else if (currentProgress >= 0.5 && currentProgress < 0.8) { nextProgress += 0.002; }
		else if (currentProgress >= 0.8 && currentProgress < 0.99) { nextProgress += 0.0005; }
		else {
			this.interval && clearInterval(this.interval);
		}

		this.props.dispatch(appActions.updateLoadingProgress(nextProgress));
	};
}

const styles = StyleSheet.create({
  container: {
  	position: 'absolute', top: 0, left: 0,
		height: 2, width: '0%',
		shadowOffset: { width: 0, height: 0, },
		shadowOpacity: 0.5,
		shadowRadius: 4,
	},
});