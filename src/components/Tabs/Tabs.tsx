import React from 'react';
import { TabContainer } from './TabContainer'

interface TabsProps {
    children: React.ReactElement<TabContainer>[] | any
}

interface TabsState {
    activeTab: string
}

interface TabProps {
    activeTab: string,
    label: string,
    onClick: Function,
}


class Tab extends React.Component<TabProps> {

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const { onClick, props: { activeTab, label } } = this

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        )
    }
}


export class Tabs extends React.Component<TabsProps, TabsState> {

    constructor(props: TabsProps) {
        super(props)

        
        if (this.props.children) {
            this.state = {
                activeTab: this.props.children[0].props.label,
            }
        }
    }

    onClickTabItem = (tab: string) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const { onClickTabItem, props: { children }, state: { activeTab } } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((tab :TabContainer) => {
                        const { label } = tab.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((tab :TabContainer) => {
                        if (tab.props.label !== activeTab) return undefined;
                        return tab.props.children;
                    })}
                </div>
            </div>
        )
    }
}