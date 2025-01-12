'use client'

interface TextStyleProps {
    title: string;
}

const TextStyle: React.FC<TextStyleProps> = ({
    title
}) => {
  return (
    <div className="text-xs cursor-pointer">
      {title}
    </div>
  )
}

export default TextStyle
