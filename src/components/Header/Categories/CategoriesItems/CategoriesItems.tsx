import './CategoriesItems.sass'

interface CategoriesItemsProps {
  title: string
  isSelect?: boolean
  icon?: JSX.Element
}

const CategoriesItems = ({ title, isSelect, icon }: CategoriesItemsProps) => {
  return (
    <div className="items__container">
      <div className={`${icon ? 'items__icon' : ''}`}>
        {icon}
        <h3 className={`${isSelect ? 'items__text-pink' : 'items__text'}`}>
          {title}
        </h3>
      </div>
    </div>
  )
}

export default CategoriesItems
