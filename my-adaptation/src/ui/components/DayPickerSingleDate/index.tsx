import React from 'react';
import 'moment/locale/ru';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';
import WindowWidth from '../../../hook/hookWidthResize';
import './styled.css';
import ArrowDown from '@icons/ArrowDown';
import ArrowDirection from '@icons/ArrowDirection';

const DayPickerSingleDate = (props: any) => {
	const width = WindowWidth();
	const {
		date = null,
		setDate = (date: any) => {},
		widthResize = 615,
		renderDayContents = (day: any) => day.format('D'),
		isDayBlocked = (): boolean => false,
		isDayHighlighted = (): boolean => false
	} = props;

	return (
		<DayPickerSingleDateController
			renderDayContents={ renderDayContents }
			isDayBlocked={ isDayBlocked }
			date={ date }
			navPrev={ <ArrowDirection direction='left' /> }
			navNext={ <ArrowDirection direction='right' /> }
			enableOutsideDays
			onDateChange={ (date) => setDate(date) }
			numberOfMonths={ width <= widthResize ? 1 : 2 }
			noBorder={ true }
			transitionDuration={ 0 }
			isDayHighlighted={ isDayHighlighted }
			hideKeyboardShortcutsPanel={ true }
			{ ...props }
		/>
	);
};

export default DayPickerSingleDate;
