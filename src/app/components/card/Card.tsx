'use client'

interface CardProps {
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="text-white self-start">
      <div className="font-bold">
        {title}
      </div>
      <div>
        {subtitle}
      </div>
    </div>
  )
}

export default Card
