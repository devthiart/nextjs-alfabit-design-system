import React from "react";

export type TextBlockProps = {
  title: string,
  text: string,
} & React.HTMLAttributes<HTMLDivElement>;

const TextBlock = ({title, text, className, ...rest}: TextBlockProps) => {
  return (
    <div 
      className={`
        flex flex-col justify-center items-start py-6 pr-5 pl-8 gap-3 bg-dark rounded-md my-2
        ${className}
      `} 
      {...rest}
    >
      <h3 className="text-gray-primary font-extrabold text-xl">
        {title}
      </h3>
      <p className="text-gray-primary font-normal text-md">
        {text}
      </p>
    </div>
  )
}

export default TextBlock;
