import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from '../../../components/vector-icons/MaterialIcons';

import { colors } from '../../../utils';
import type { SchemaType, SchemaField } from '../../../../typeDefinition';

export default class TypeSummary extends Component {
	props: SchemaType;

	static defaultProps = {
		fields: [],
	};

	render() {
		return <View style={styles.container}>
			{this.renderHeader()}
			{this.renderFields()}
		</View>;
	}

	renderHeader = () => {
		return <View style={styles.headingContainer}>
			<Text style={styles.typeName}>{this.props.name}</Text>
			<TouchableOpacity style={styles.expandButton} activeOpacity={0.8}>
				<Icon name="chevron-left" style={styles.expandButtonIcon}/>
			</TouchableOpacity>
		</View>;
	};

	renderFields = () => {
		return <View style={styles.contentContainer}>
			{this.props.fields.map((field, i) => {
				const wrapperStyle = i === this.props.fields.length - 1 ? {
					borderColor: 'transparent',
				} : {};

				return <FieldRow key={i} {...field} wrapperStyle={wrapperStyle}/>;
			})}
		</View>;
	};
}

function FieldRow(props: SchemaField) {
	return <View style={[styles.fieldRowContainer, props.wrapperStyle]}>
		<View style={styles.fieldRowLeftArea}>
			<Text style={styles.fieldTitle}>{props.name}</Text>
			{props.default && <Icon name="lock" style={styles.lockIcon}/>}
		</View>
		<View style={styles.fieldRowMainArea}/>
		<View style={styles.fieldRowRightArea}>
			<View style={styles.fieldTypeWrapper}>
				<Text style={styles.fieldTitle}>
					{props.type}{props.required ? '!' : ''}
					</Text>
			</View>
		</View>
	</View>;
}

const expandButtonSize = 24, rowHeight = 46;

const styles = StyleSheet.create({
	container: {
		borderRadius: 3, backgroundColor: '#ffffff',
		marginBottom: 5,
	},
	headingContainer: {
		paddingRight: 32, paddingLeft: 12,
		height: 50, justifyContent: 'center',
		borderBottomWidth: 1, borderColor: '#f2f2f2',
	},
	typeName: {
		fontSize: 16, color: '#666666',
	},
	expandButton: {
		position: 'absolute', top: 12, right: -6,
		width: expandButtonSize, height: expandButtonSize,
		borderRadius: 3, backgroundColor: colors.secondary,
		alignItems: 'center', justifyContent: 'center',
	},
	expandButtonIcon: {
		color: '#ffffff', fontSize: 18,
	},
	contentContainer: {

	},
	fieldRowContainer: {
		flexDirection: 'row',
		paddingHorizontal: 12,
		borderBottomWidth: 1, borderColor: '#f2f2f2',
	},
	fieldRowLeftArea: {
		flexDirection: 'row', height: rowHeight, alignItems: 'center',
	},
	fieldRowMainArea: {
		flex: 1,
	},
	fieldRowRightArea: {
		flexDirection: 'row', height: rowHeight, alignItems: 'center',
	},
	lockIcon: {
		fontSize: 16, color: '#d0d0d0', marginHorizontal: 3,
	},
	fieldTypeWrapper: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		padding: 6, paddingHorizontal: 8, borderRadius: 3,
	},
	fieldTitle: {
		color: '#666666',
	},
});