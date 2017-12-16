import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Match, Link } from "react-router-dom";

import Protected from "../components/Protected";
import DataWrapper from "../components/DataWrapper";

import ChallengeRowCol from '../components/ChallengeRowCol/ChallengeRowCol';

@Protected
@DataWrapper
@observer
export default class Challenges extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {    
    const { items } = this.store.appState;
    const categoryOrientationClass = items.verticalChallengeOrientation ? 'vertical' : 'horizontal';

    // Fake JSON Challenge Data - Ideally we'll query with just a teamId and return the following.
    const fakeCategoryData = [
      'Cryptography',
      'Forensics',
      'Miscellaneous',
      'Web',
      'Pwn'
    ];

    // Iterate over challenge category JSON 
    const categories = fakeCategoryData.map((category) => {
      return (
        <div className={`category-${categoryOrientationClass}`}>
          <ChallengeRowCol key={category}
            category={category}
            vertical={items.verticalChallengeOrientation}/>
        </div>
      )
    })

    return (
      <div className="page posts">
        {categories}
      </div>
    );
  }
}