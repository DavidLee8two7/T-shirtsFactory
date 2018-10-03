import React, { Component } from 'react';
import { firebaseDB } from '../../firebase';
import { firebaseLooper } from '../Utils/Misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style = {
  cell: {
    padding: '4px 16px 4px 11px',
    borderBottom: '1px solid #ffffff',
    color: '#ffffff',
    textAlign: 'center',
  },
};

class ProductTable extends Component {
  state = {
    sizes: [],
  };

  componentDidMount() {
    firebaseDB
      .ref('positions')
      .once('value')
      .then(snapshot => {
        const sizes = firebaseLooper(snapshot);

        this.setState({
          sizes: sizes,
        });
      });
  }

  showSizes = size =>
    size
      ? size.map((size, i) => (
          <TableRow key={i}>
            <TableCell style={style.cell}>{i + 1}</TableCell>
            <TableCell style={style.cell}>{size.team}</TableCell>
            <TableCell numeric style={style.cell}>
              {size.w}
            </TableCell>
            <TableCell numeric style={style.cell}>
              {size.d}
            </TableCell>
            <TableCell numeric style={style.cell}>
              {size.l}
            </TableCell>
            <TableCell numeric style={style.cell}>
              {size.pts}
            </TableCell>
          </TableRow>
        ))
      : null;

  render() {
    return (
      <div className="product_table_wrapper">
        <div className="title">Product Table</div>
        <div style={{ background: '#98c6e9' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={style.cell}>size</TableCell>
                <TableCell style={style.cell}>Team</TableCell>
                <TableCell style={style.cell}>W</TableCell>
                <TableCell style={style.cell}>L</TableCell>
                <TableCell style={style.cell}>D</TableCell>
                <TableCell style={style.cell}>size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.showSizes(this.state.sizes)}</TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ProductTable;
