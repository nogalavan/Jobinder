import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface Props {
    alignment: string;
    handleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
}

export default function ColorToggleButton({alignment, handleChange}: Props) {
    // const [alignment, setAlignment] = React.useState('android');

    // const handleChange = (
    //     event: React.MouseEvent<HTMLElement>,
    //     newAlignment: string,
    // ) => {
    //     setAlignment(newAlignment);
    // };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="android">תפקידים</ToggleButton>
            <ToggleButton value="web">מועמדים</ToggleButton>
        </ToggleButtonGroup>
    );
}