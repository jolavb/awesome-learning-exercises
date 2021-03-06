import React from "react";
/* 
  CSS rules for this component and exercise should be added
  to the CSS file below
*/
import "./floats.css";

const Floats = () => (
  <div>
    <p>
      1. Align the menu content so that the icon is on the far right, and the
      title text is left aligned.
    </p>
    <br />
    <nav className="menubar">
      <span className="menubar-icon" role="img" aria-label="Search">
        🔍
      </span>
      <h3 className="menubar-title">Dom's Blog</h3>
    </nav>
    <br />
    <p>
      2. Fix the article block so that the image is contained within the brown
      body and borders.
    </p>
    <br />
    <article className="article">
      <h3>The Importance of Meow</h3>
      <img src="http://placekitten.com/200/300" className="article-image" />
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus.
    </article>
  </div>
);

export default Floats;
