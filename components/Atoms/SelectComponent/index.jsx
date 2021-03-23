import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
  },
}));

const SelectComponent = ({ value, handleChange, valueList, label, style }) => {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange} color="secondary">
          {valueList.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectComponent;
