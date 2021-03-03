import React from "react";

function ResultList(props) {
    console.log(props);
    return (
        <div className="flex flex-wrap ma5 justify-center">
            {
                props.results.map((result, i) => (
                    <article key={i} className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-2">
                        <div className="tc">
                            <img src={result.picture.medium} className="br-100 h3 w3 dib ba b--black-05 pa2" />
                            <h1 className="f3 mb2">{result.name.first} {result.name.last}</h1>
                            <h2 className="f5 fw4 gray mt0">{result.email}</h2>
                            <h2 className="f5 fw4 gray mt0">{result.cell}</h2>
                        </div>
                    </article>
                ))
            }
        </div>
    );
}

export default ResultList;