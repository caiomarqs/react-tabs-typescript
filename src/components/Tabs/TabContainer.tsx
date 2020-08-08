import React from 'react';

export interface TabContainerProps { 
    label: string
}

export class TabContainer extends React.Component<TabContainerProps> {   
    render() {
        return this.props.children
    }
}