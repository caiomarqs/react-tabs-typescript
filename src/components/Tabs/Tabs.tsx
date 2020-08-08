import React from 'react';
import { TabContainer } from './TabContainer'

interface TabProps {
    activeTab: string,
    label: string,
    onClick: Function,
    className?: string
}


class Tab extends React.Component<TabProps> {

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    className() {
        return this.props.className === undefined ? '' : ` ${this.props.className}`
    }

    render() {
        const { onClick, props: { activeTab, label } } = this

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className + this.className()}
                onClick={onClick}
            >
                {label}
            </li>
        )
    }
}

interface TabsProps {
    children: React.ReactElement<TabContainer>[] | any
}

interface TabsState {
    activeTab: string
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

        let lastLabel: string;
        const isUniqueLabel = (tab: TabContainer) => {
            const { label } = tab.props
            if (label === lastLabel) {
                throw new Error('Tabs dont have unique label')
            }
            lastLabel = label;
            return
        }

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((tab: TabContainer) => {
                        const { label } = tab.props;

                        isUniqueLabel(tab);

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
                    {children.map((tab: TabContainer) => {
                        if (tab.props.label !== activeTab) return undefined;
                        return tab.props.children;
                    })}
                </div>
            </div>
        )
    }
}