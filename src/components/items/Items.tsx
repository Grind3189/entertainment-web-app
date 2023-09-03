import './items.scss'

type ItemsProp = {
    children: React.ReactNode
}
const Items = ({children}: ItemsProp) => {
    return (
        <div className="items-container">
            {children}
        </div>
    )
}

export default Items