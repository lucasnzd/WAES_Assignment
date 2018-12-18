import React, { Component }from 'react';
import { connect } from 'react-redux';
import { filterBy, showAll } from '../../actions';
import Section from '../../components/Section';
import ColorFilter from '../../components/ColorFilter';
import Display from '../../components/Display';

class NotesDisplay extends Component {
    render() {
        return (
            <Section title="my notes">
                <ColorFilter
                    markerColors={this.props.colorFilters}
                    options={this.props.options}
                    onShowAll={this.props.onShowAll}
                    onFilterClick={this.props.onFilterClick}
                />
                <Display
                    markerColors={this.props.colorFilters}
                    notes={this.props.notes}
                    options={this.props.options}
                />
            </Section>
        );
    }
}

const mapStateToProps = state => {
    return {
        colorFilters: state.color.marker_colors,
        options: state.filter.options,
        notes: state.highlight.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterClick: options => dispatch(filterBy(options)),
        onShowAll: () => dispatch(showAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
