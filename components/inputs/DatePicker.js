import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DatePicker (props) {

    const { label } = props;

    const [value, setValue] = React.useState(
        new Date()
    );

    const handleDate = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label={label}
                value={value}
                onChange={handleDate}
                inputFormat="MM/dd/yyyy"
                renderInput={(params) => <TextField
                    {...params}
                    style={{ width: '300px' }}
                />}
            />
        </LocalizationProvider>
    )
}