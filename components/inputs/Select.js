import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function TripType (props) {
    const { prefix, label, values } = props;
    const [ value, setSelect ] = React.useState(values[0]);
    const handleChange = event => setSelect(event.target.value);
    return (
        <FormControl>
            <InputLabel id={`${prefix}-label`}>{label}</InputLabel>
            <Select
                labelId={`${prefix}-label`}
                id={`${prefix}-select`}
                value={value}
                label={label}
                onChange={handleChange}>
                {values.map((value, idx) =>
                    <MenuItem key={idx} value={value}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    )
}