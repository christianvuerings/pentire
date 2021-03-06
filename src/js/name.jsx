var React = require('react');
var Autocomplete = require('react-autocomplete');

let Name = React.createClass({
  componentDidMount() {
    React.findDOMNode(this.refs.nameContainer).childNodes[0].focus();
  },
  componentDidUpdate() {
    this.refs.nameContainer.setState({
      value: ''
    });
  },
  render: function(){

    let matchName = (name, value) => {
      return name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    };

    return (
      <div className="p-name-container">
        <div className="p-name-autocomplete">
          <Autocomplete
            initialValue=""
            items={this.props.names.sort()}
            getItemValue={(item) => item}
            shouldItemRender={matchName}
            ref="nameContainer"
            onSelect={this.props.selectPerson}
            renderItem={(item, isHighlighted) => (
              <div
                className={isHighlighted ? 'p-name-autocomplete-item-highlighted' : 'p-name-autocomplete-item'}
              >{item}</div>
            )}
          />
        </div>
      </div>
    );
  }
});

module.exports = Name;
