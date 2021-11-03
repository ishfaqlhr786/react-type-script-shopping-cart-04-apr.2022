
import styled from 'styled-components'

export const Wrapper =styled.div`
*{
    magin:0px;
    padding:0px;
}
display:flex;
justify-content:space-between;
flex-direction:coloumn;
width:100%;
border:1px solid lightblue;
border-radius:20px;
height:100%;
button{
    border-radius: 0 0 20px 20px
}
img{
    max-height: 250px;
    object-fit:cover;
    border-radius:20px 20px 00;
    border:2px solid blue;
}
div{
    font-family:Aria Helvetica sans-serif;
    padding:1rem;
    height:100%;
}
`;