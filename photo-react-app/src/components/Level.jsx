import { useRef, useState } from "react"

export function Level ({ source }) {

    const imgRef = useRef(null);

    const [point, setPoint] = useState(null);

    function handleClick(e) {

        const rect = imgRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        console.log("click position:"+ x+ ","+y);

        setPoint({x , y})
    }

    function handleRightClick(){

        setPoint(null);
    }
    return (
        <div style={{position: "relative"}}>
            <img ref={imgRef} src={source} alt="" onClick={handleClick} onContextMenu={handleRightClick}/>

            { point && (
                <div style={{
                    position: "absolute",
                    top: point.y,
                    left: point.x,
                    width: 100,
                    height: 100,
                    border: "inset 5px red",
                    
                    transform: "translate(-50%,-50%)"
                }
                }>
                    <select name="character" id="character">
                        <option value="Dalapathi">DALAPATHI</option>
                        <option value="NinnuKori">NinnuKori</option>
                    </select>
                </div>
            )
            }
        </div>
    )
}