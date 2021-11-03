import Button  from '@material-ui/core/Button'

import {CartItemType}  from '../App'
import Items from '../Items/Items'

// styles
import {Wrapper} from './CartItem.style'
type Props={
        item:CartItemType,
        addToCart: (clickedItem:CartItemType) =>void,
     removeFromCart:(id:number)=>void,
    }
const CartItem:React.FC<Props> = ({item,addToCart,removeFromCart})=>(
    
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
            <p>price: ${item.price}</p>
            
            <p>Total: ${item.amount * item.price}</p>
            </div>
        </div>
        <div className="buttons">
         <Button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                removeFromCart(item.id)
            }}
            
            >
               - </Button>   
               <p>{item.amount}</p>
                <Button size='small'
            disableElevation
            variant="contained"
            onClick={()=>{
                addToCart(item)
            }}
            
            >
               +</Button>   

        </div>
        <img src={item.image}  alt={item.title}/>
    </Wrapper>
)

export default CartItem