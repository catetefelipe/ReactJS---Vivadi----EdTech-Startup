import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";



function Circle() {
    return (
        <>
            <Example label="Fully controlled text animation using react-move">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={100}
                    duration={5}
                    easingFunction={easeQuadInOut}
                >
                  {value => {
                    return (
                    <CircularProgressbarWithChildren
                        value={value}
                        styles={buildStyles({ 
                          pathTransition: "none",
                          textColor: "#0f0",
                          pathColor: "#ff5050",
                          trailColor: "#transparent"
                        })}
                          >
                            <img
                              style={{ width: 40, marginTop: -5 }}
                              src="https://i.imgur.com/b9NyUGm.png"
                              alt="doge"
                            />
                            <div>
                              <span>26,890</span>
                              <br />
                              <span>alunos</span>
                            </div>
                    </CircularProgressbarWithChildren>

                    );
                }}
                </AnimatedProgressProvider>
            </Example>
        </>
    )
}

function Example(props) {
    return (
      <div style={{ marginBottom: 80 }}>
        <hr style={{ border: "2px solid #ddd" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "70%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }



//export
export default Circle

