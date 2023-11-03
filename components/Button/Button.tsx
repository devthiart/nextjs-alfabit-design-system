export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white'
    case 'secondary': 
      return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary'
    case 'tertiary':
      return disabled ? 'bg-white text-disabled' : 'bg-white text-primary'
    default:
      return disabled ? '' : ''
  }
}

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
  const generalStyle = 'rounded-md px-6 py-2 font-extrabold';

  return (
    <button
      className={`${generalStyle} ${getVariant(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      { children }
    </button>
  )
  
  // *** Composition By Component Technique ***
  // const Btn = (classes: string) => {
  //   return (
  //     <button
  //       className={`${generalStyle} ${classes} ${className}`}
  //       disabled={disabled}
  //       {...rest}
  //     >
  //       { children }
  //     </button>
  //   )
  // }

  // return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white');
}

export default Button;
