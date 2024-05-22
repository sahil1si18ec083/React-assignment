
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const CustomDatePicker = () => {
    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </LocalizationProvider>
    </>)
}
export default CustomDatePicker;
