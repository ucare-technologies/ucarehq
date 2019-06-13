import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        { props.headComponents }
      </head>
      <body {...props.bodyAttributes}>
        { props.preBodyComponents }
        <div dangerouslySetInnerHTML={ {
          __html: `
          <style>
          html,body{height:100%;margin:0}
          #dino{display:none}
          </style>
          <!--[if lte IE 9]>
          <style>
          body{overflow:hidden;background:#ffffff}
          #dino{display:block}
          #___gatsby{display:none}
          </style>
          <![endif]-->
          <div id="dino">
            <h1>It's a dinosaur!</h1>
            <p>Sorry, Internet Explorer uses old technology that we no longer support.</p>
            <p>Please <a href="http://outdatedbrowser.com" target="_blank" rel="nofollow">switch to one of these newer browsers</a>.</p>
            <img src="https://static.ucareapp.com/Content/images/dinosaur.jpg" alt="dinosaur" />
          </div>
          ` 
        } }></div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
