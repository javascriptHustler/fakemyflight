import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function SelectInput (props) {
    const { prefix, label, values, width } = props;
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
                style={{ width: '300px' }}
                onChange={handleChange}
                {...(width ? {style: {width: width}} : {})}>
                {values.map((value, idx) =>
                    <MenuItem key={idx} value={value}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    )
}