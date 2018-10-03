import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import { firebaseProducts } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Utils/Misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

class AdminItems extends Component {
  state = {
    isloading: true,
    products: [],
  };

  componentDidMount() {
    firebaseProducts.once('value').then(snapshot => {
      const items = firebaseLooper(snapshot);

      this.setState({
        isloading: false,
        products: reverseArray(items),
      });
    });
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Published</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.products
                  ? this.state.products.map((product, i) => (
                      <TableRow key={i}>
                        <TableCell>{product.date}</TableCell>
                        <TableCell>
                          <Link
                            to={`/admin_products/edit_product/${product.id}`}
                          >
                            {product.away} <strong>-</strong> {product.local}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <strong>$ </strong>
                          {product.resultLocal}
                        </TableCell>
                        <TableCell>
                          {product.final === 'Yes' ? (
                            <span className="products_tag_green">
                              Available
                            </span>
                          ) : (
                            <span className="products_tag_red">
                              Not Available
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Paper>

          <div className="admin_progress">
            {this.state.isloading ? (
              <CircularProgress thickness={6} style={{ color: '#98c5e9' }} />
            ) : (
              ''
            )}
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminItems;
