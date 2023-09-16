import './CategoriesCardItems.sass'

interface CategoriesCardItemsProps {
  img: string
  title: string
  isSelect?: boolean
}

const CategoriesCardItems = ({
  img,
  title,
  isSelect,
}: CategoriesCardItemsProps) => {
  return (
    <div className="items__container">
      <div className={`${isSelect ? 'items__card-select' : 'items__card'}`}>
        <img src={img} alt="" />
      </div>
      <h3 className={`${isSelect ? 'text-select' : 'text'}`}>{title}</h3>
    </div>
  )
}

export default CategoriesCardItems
