import React, {useState, useEffect} from 'react'

const Calculator = () => {
    const [output, setOutput] = useState("");
    const [variables, setVariables] = useState(["",""]);    
    const [operation, setOperation] = useState("");
    const [curVariable, setCurVariable] = useState(0);

    const clearDisplay = () => {
        setVariables(["", ""]);
        setCurVariable(0);
        setOperation("");
        setOutput("");
    }
    useEffect (() => {
        console.log(output);
    });

    const getPressBtn = (e) => {
        //debugger;
        let key = e.target.value;        
        let vars = [...variables];
        let oper = operation;

        if ((!isNaN(parseInt(key)) || key === ".")) {
            if (key !== "." || vars[curVariable].indexOf(".") === -1)
                vars[curVariable] += key;
            setVariables(vars)
        } else {
            oper = key;
            setOperation(oper);
            setCurVariable(1);
        }
        setOutput([vars[0], oper, vars[1]].join(''));
    }

    const getResult = () => {        
        let res; 
        let x = parseFloat(variables[0]);
        let y = parseFloat(variables[1]);

        switch (operation) {
            case '+':
                res = x + y;
                break;  
            case '-':
                res = x - y;
                break;   
            case '*':
                res = x * y; 
                break; 
            case '/':
                res = x / y;
                break;
            default:
                break;
        }
        // fix .00000001 in floating number operations
        res = Math.floor(res * 100000)/100000;
        console.log("result:", res);
        setOutput(res.toString());
        setVariables([res.toString(), ""]);
        setCurVariable(0);
        setOperation("");
    }

    return (
    <form id='calc-contain'>
        <input type="text" id="result" value={output} readOnly/>
        <input type="button" value="c" onClick={clearDisplay} />
         <br /> 
        <input type="button" value="1" onClick={getPressBtn} />  
        <input type="button" value="2" onClick={getPressBtn} /> 
        <input type="button" value="3" onClick={getPressBtn} />
        <input type="button" value="/" onClick={getPressBtn} /><br /> 
        <input type="button" value="4" onClick={getPressBtn} /> 
        <input type="button" value="5" onClick={getPressBtn} />  
        <input type="button" value="6" onClick={getPressBtn} /> 
        <input type="button" value="-" onClick={getPressBtn} /><br /> 
        <input type="button" value="7" onClick={getPressBtn} />
        <input type="button" value="8" onClick={getPressBtn} />
        <input type="button" value="9" onClick={getPressBtn} />
        <input type="button" value="+" onClick={getPressBtn} /><br />  
        <input type="button" value="." onClick={getPressBtn} />
        <input type="button" value="0" onClick={getPressBtn} />
        <input type="button" value="=" onClick={getResult} />
        <input type="button" value="*" onClick={getPressBtn} /><br />      
   </form>
   );
}

export default Calculator;