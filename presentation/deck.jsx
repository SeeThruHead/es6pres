import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            ES2015
          </Heading>
          <Heading size={1} fit caps lineHeight={1}>
            An Introduction
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Let & Const
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/const.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/let.example")}
            margin="20px auto"/>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/let2.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Appear fid="1">
            <Heading caps size={4} textColor="secondary">
              No Hoisting in real es2015
            </Heading>
          </Appear>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/letConst.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Arrow Functions
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/arrow1.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/arrow2.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Enhanced Object Literals
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/enhobj.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Default + Rest + Spread
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/default.example")}
            margin="20px auto"/>
          <Appear fid="1">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/rest.example")}
              margin="20px auto"/>
          </Appear>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/spread.example")}
              margin="20px auto"/>
          </Appear>
          <Appear fid="3">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/objSpread.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Destructuring
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/destructuring.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Template String Literals
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/templatestr.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Iterators + For..Of
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/iterators-forof.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={5} textColor="black" textFont="secondary">
            Generators
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/generators.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Classes
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/classes.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/classes-react.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Import + Export
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./examples/mod-export.example")}
            margin="20px auto"/>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/mod-import-star.example")}
              margin="20px auto"/>
          </Appear>
          <Appear fid="3">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/mod-export-from.example")}
              margin="20px auto"/>
          </Appear>
          <Appear fid="4">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/mod-import-name-destr.example")}
              margin="20px auto"/>
          </Appear>
          <Appear fid="5">
            <CodePane
              lang="javascript"
              source={require("raw!./examples/mod-export.example")}
              margin="20px auto"/>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            The End
          </Heading>
          <Heading size={6} caps margin="44px auto">
            <Link href="https://github.com/ericdouglas/ES6-Learning">further reading</Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
