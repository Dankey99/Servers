function Results(props){
   let phys= props.physics
   let chem= props.chemistry
   let mth= props.maths
    return(
        <>
            Name: {props.name}
            Physics: {props.phys}
            Chemisty: {props.chem}
            maths: {props.mth}
          
            
        </>
    );
}
export default Results;