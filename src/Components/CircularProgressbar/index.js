import React from "react";
import "./styles.css";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";



function Circle(props) {
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
                          trailColor: "#transparent",
                        })}
                          >
                            <div className="circularprogressbar_inside_circle">
                              <div className="circularprogressbar_simbolo">
                                <span>{props.simbolo}</span>
                              </div>
                              <div className="circularprogressbar_numero">
                                <span>{props.numero}</span>
                              </div>
                              <div className="circularprogressbar_texto">
                                <span>{props.texto}</span>
                              </div>
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
      <div className="circularprogressbar_individual_circle">
        {props.children}
      </div>
  );
}

//export
export default Circle