/* @flow */

import React, {Component} from 'react';
import {Entity} from 'draft-js';
import cx from 'classnames';
import autobind from 'class-autobind';


// $FlowIssue - Flow doesn't understand CSS Modules
import styles from './ImageSpan.css';

type Props = {
  children: React.Node;
  entityKey: string;
  className: ?string;
};

export default class ImageSpan extends Component {
  constructor(props: Props) {
    super(props);
    autobind(this);
  }

  clickImage() {
    const entity = Entity.get(this.props.entityKey);
    const {selected} = entity.getData();
    Entity.mergeData(this.props.entityKey, {selected: !selected});
  }


  render() {
    const entity = Entity.get(this.props.entityKey);
    const {src, selected} = entity.getData();
    const imageStyle = {
      maxWidth: '100%'
    };

    return <img src={src} style={imageStyle}/>
  }
}
