import { useRef, useState, useEffect } from "react"
import rightIcon from "../assets/check.png"
import wrongIcon from "../assets/wrong.png"

export function Level ({ source, stopTimer }) {

    const imgRef = useRef(null);

   

    const size = 100;

    const [point, setPoint] = useState(null);
    const [character, setCharacter] = useState("default");
    
    const [results, setResults] = useState([]);

    function handleClick(e) {

        setCharacter("default");

        const rect = imgRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const resetResults = results.filter((check) => check.icon !== wrongIcon);

        if(resetResults.length >= 6) {
            stopTimer();
        }

        setResults(resetResults);
        
        setPoint({x , y})
        
        const newCorner = {x: x-size/2, y: y-size/2, size};
        

        console.log({x, y}, newCorner);

    }

    function handleRightClick(){

        setPoint(null);
    }

    async function handleChange(e) {

        const value = e.target.value;

        setCharacter(value);

        const res = await fetch(`http://localhost:3000/match/1?x=${point.x}&y=${point.y}&size=${100}&character=${value}`);

        const match = await res.json();

        const newResult = {
            icon: match ? rightIcon : wrongIcon,
            x: point.x,
            y: point.y
        };

        setResults(prev => [...prev, newResult]);

        
        
    }
    return (
        <div style={{position: "relative"}}>
            <img ref={imgRef} src={source} alt="" onClick={handleClick} onContextMenu={handleRightClick}/>

            { point && (
                <div style={{
                    position: "absolute",
                    top: point.y,
                    left: point.x,
                    width: size,
                    height: size,
                    border: "inset 5px red",
                    
                    transform: "translate(-50%,-50%)"
                }
                }>
                    
                        <select name="character" id="character" value={character} onChange={handleChange}>
                            <option value="default">SELECT..</option>
                            <option value="Dalapathi">DALAPATHI</option>
                            <option value="NinnuKori">NinnuKori</option>
                            <option value="Uppena">Uppena</option>
                            <option value="MSDhoni">MSDhoni</option>
                            <option value="Spiderman">Spiderman</option>
                            <option value="Single">Single</option>
                        </select>
                    
                   
                    
                </div>
            )
            }

            {results.map((r,i) => {
                       return( <img 
                            key={i}
                            src={r.icon}
                            alt=""
                            style={{
                                position: "absolute",
                                top: r.y,
                                left: r.x,
                                width: "30px",
                                transform: "translate(-50%, -50%)"
                            }}
                        />)
                    })}
        </div>
    )
}