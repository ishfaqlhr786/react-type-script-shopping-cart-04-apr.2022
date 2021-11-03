import React,{useState} from 'react';
import {useQuery} from  'react-query' 
import  Drawer  from '@material-ui/core/Drawer'
import './App.css';
import LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import {StyledButton, Wrapper} from './App.styles'
import Items  from './Items/Items'
import Carts from './Carts/Carts'
export type CartItemType={
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  title:string,
  amount:number


}
const getProducts= async (): Promise<CartItemType[]>=>
  await (await fetch(`https://fakestoreapi.com/products`)).json();


const App=()=> {
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItem,setCartItem]= useState([] as CartItemType[]);

  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts);
  console.log(data);
  const getTotalItems=(items:CartItemType[])=>
    { items.reduce((ack:number,item)=> ack +item.amount,0)}
  
  const handleAddToCart=(clickedItem:CartItemType)=>{
    setCartItem(prev=>{
      const isItemInCart=prev.find(item=>item.id===clickedItem.id)
      if(isItemInCart){
        return prev.map(item=> item.id===clickedItem.id?{...item,amount:item.amount +1}: item
        );
      }
      return [...prev,{...clickedItem,amount:1}]
    })
  }
    

    



  const handleRemoveFromCart=(id:number)=>{
setCartItem(prev => prev.reduce((ack,item)=>{
if(item.id===id){
  if(item.amount===1)  return ack;
  return [...ack,{...item,amount:item.amount -1}];
}  else {
  return [...ack,item];
}
},[] as CartItemType[])

)



  }


  if(isLoading) return <LinearProgress/>
  if(error) return <div>Some thing went wrong</div>
  return (
    <>
   <Wrapper>
     <Drawer anchor="right" open ={cartOpen} onClose={()=>{
       setCartOpen(false)
     }}>
       <Carts cartItems={cartItem} addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}
       />
        </Drawer>
     <StyledButton onClick={()=>
       setCartOpen(true)
     }> 
     <Badge badgeContent={getTotalItems} color='error'>
       <AddShoppingCartIcon/>
     </Badge>
     </StyledButton>
<Grid container spacing={3} >
  
  {
    data?.map((item)=>(
      <Grid item key={item.id} xs={12} sm={4}>
        <Items item={item} handleAddToCart={handleAddToCart}/>

      </Grid>
    ))}

    
  
</Grid>
 </Wrapper>
 </>
  
  );
}

export default App;
