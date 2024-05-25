import { ReactElement } from 'react'
import style from './input-with-label.module.scss'

const InputWithLabel = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  className,
  placeholder,
  disabled = false,
}: Props): ReactElement => {
  return (
    <div className={style['input-with-label']}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

export default InputWithLabel

type Props = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password' | 'email' | 'number'
  className?: string
  placeholder?: string
  disabled?: boolean
}
