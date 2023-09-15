import './TextTwoColor.sass'

interface TextTwoColorProps {
  icon: JSX.Element
  firstColor: 'Pink' | 'Gray'
  secondColor: 'Pink' | 'Gray'
  firstText: string
  secondText: string
  isLast?: boolean
}

const TextBiColor = ({
  icon,
  firstColor,
  secondColor,
  firstText,
  secondText,
  isLast,
}: TextTwoColorProps) => {
  return (
    <div className={`${isLast ? 'header-text__last' : 'header-text'}`}>
      <div className="header-text__icon">{icon}</div>
      <h3
        className={`${
          firstColor === 'Pink'
            ? 'header-text__pinkColor'
            : 'header-text__grayColor'
        }`}
      >
        {firstText}
        <span
          className={`${
            secondColor === 'Pink'
              ? 'header-text__pinkColor'
              : 'header-text__grayColor'
          }`}
        >
          {secondText}
        </span>
      </h3>
    </div>
  )
}
export default TextBiColor
