import React from 'react';

class DataDisp extends React.Component {
  render(){
    return(
      <div>
      {this.props.list.map((data,i)=>{
        return(
          <div data-testid={`food${i}`}>{data.name}
            <h4>{data.course}</h4>
            <h5>{data.technique}</h5>
            <h3>Ingridients:</h3>
            {data.ingredients.map(ing=>{
              return(
                <p>{ing}</p>
              );
            })}
          </div>
        );
      })}
      </div>
    );
  }
}

export default DataDisp;