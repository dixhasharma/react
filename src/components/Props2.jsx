// Props:-stands for properties these are like argumentsin function
// props are sent via HTML element attributes
// we will design a program in whuch we create a variable and sent it to another,then create object and send it to another meanwhile use their properties (props)
// we cant use state in function directly but we can do it in class to use state in function we use hooks
function Props(props)
{
   return(
       // <h1>my name is {props.name}</h1>
       <h1>my name is {props.x.name} and age is {props.x.age}</h1>
   )
}
export default Props;