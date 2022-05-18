import React, { useState } from 'react';
import Data from "../json/Dictionary.json";
import { ToggleName } from "../function/indexFun";
import "../style/Content.css";
import temperature from "../icon/temperature.png";
import humidity from "../icon/humidity.png";
import pm25 from "../icon/pm2.5.png";
import hcho from "../icon/hcho.png";
import co2 from "../icon/co2.png";
import o3 from "../icon/o3.png";
import laughing from "../icon/laughing.png";
import smiley from "../icon/smiley.png";
import cryingface from "../icon/cryingface.png";
import cry from "../icon/cry.png";
import anger from "../icon/anger.png";

// 有背底顏色的標籤
export function ColorLabel(props) {
    let state = props.state;
    let value1 = props.value1;
    let value2 = props.value2;
    let value3 = props.value3;
    let value4 = props.value4;
    let [Color, ColorState] = useState("");
    let [IconStyle, IconStyleState] = useState("");
    if (state === "") {
        Color = "";
        IconStyle = anger;
    }
    else if (state >= 0 && state <= value1) {
        Color = "StatusNormal";
        IconStyle = laughing;
    }
    else if (state > value1 && state <= value2) {
        Color = "StatusNormal";
        IconStyle = smiley;
    }
    else if (state > value2 && state <= value3) {
        Color = "StatusNormal";
        IconStyle = cryingface;
    }
    else if (state > value3 && state <= value4) {
        Color = "StatusSafe";
        IconStyle = cry;
    }
    else if (state > value4) {
        Color = "StatusDanger";
        IconStyle = anger;
    }
    return <div>
            <div className={"GroupState " + Color}>
                <div>{state}<span>{props.unit}</span></div>
                <div><img className="FaceIcon" alt={state} src={IconStyle}></img></div>
            </div>
        </div>
}

export function Content() {
    let count = [10, 55, 77, 1.5, 2000, 0.704];  //塞假資料測試
    let Imgs = [temperature, humidity, pm25, hcho, co2, o3]; //圖片

    return <div id="Content">
        {/* 根據字典Json的資料map出圖片與文字 */}
        {Data.Data.map((item, i) => {
            return <div 
            key={"Content" + i} 
            className="btn SensorGroup">
                <div className="ReportGroups" 
                onMouseMove={()=>{
                    ToggleName(true,i);
                }}
                onMouseLeave={()=>{
                    ToggleName(false,i);
                }}
                >
                    <div className="ReportLabel">
                        <img className="GroupImg" alt={item.name} src={Imgs[i]}></img>
                    </div>
                    <ColorLabel
                        state={count[i]}
                        value1={item.value1}
                        value2={item.value2}
                        value3={item.value3}
                        value4={item.value4}
                        unit={item.unit}
                    />
                </div>
            </div>
        })}
    </div>
}