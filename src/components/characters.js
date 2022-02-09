import React from "react";
import Style from "./Style";

//any other imports

function Box(props){

    const [num, setNum]= React.useState();
    const [color, setColor]= React.useState("black");

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }



    let combine =()=>{
        addUp(props.number);
        setColor("black")
    }

    let style = {
        color: color
    }

    let pEles = [""].map((p ,idx )=>
        <p key={idx}>{p}</p>
    )




    return(
        <div style={{...Style.box, ...style}} onClick={combine}>
            <p>{props.mess}</p>
            <p>{props.nm}</p>
            <p>{props.age}</p>
            <p>{props.sm}</p>
            <p>{props.sm2}</p>
            <p>{props.sm3}</p>
            <p>{props.sm4}</p>
            <p>{num}{props.num}</p>
            {pEles}
        </div>
    )
}
export default Box;




//========================================================================
//                            HINT for HW 1/25/22
//When you click on a box its going to check a number, refer it to an array
// Make it change the color/border for each item.
//========================================================================
