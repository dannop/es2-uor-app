import './style.scss';

interface Props {
  label: string,
  name: string,
  value: string,
  onChange: Function,
  placeholder: string
}

export default function TextField(props: Props){
  const { label, name, value, onChange, placeholder } = props;

  return (
    <div className="defaultInput">
      <label htmlFor="textInput">{label}</label>
      <input 
        // type={type}
        // min={min} 
        name={name}
        value={value} 
        onChange={(e) => onChange(e)}
        // autoFocus={autoFocus}
        // required={required}
        // disabled={disabled}
        placeholder={placeholder}
        // maxLength={maxLength}
      />
    </div>
  )
} 