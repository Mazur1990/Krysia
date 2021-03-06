import React from 'react';
const Zakresy = ({text}) => {
    return(
        <div className="zakresy">
            {/* <i className={className}></i> */}
            <div>
            <ul className="">
                {text && text.map((item) =>
                <li className='' key={item}>{item}</li>
                )}
            </ul>
        </div>
        </div>
    )
}
export { Zakresy }